import pg from 'pg';
const { Client, Pool } = pg;

const pool = new Pool(
    {
        host: "sql.bocacode.com",
        database: "bocacode",
        user: "bocacode",
        password: "bocacode",
        port: 5432
    }
)

let query = `SELECT * FROM customers`;

pool.query(query, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //will show data on a table
    console.table(data.rows);
    pool.end();
});

// const quest = ['Who', 'What', 'When', 'Where', 'Why'];

// let id =2;
// for(let i = 0; i < quest.length; i++){
//     query = `UPDATE customers SET name = 'Please, ${quest[i]} Damian?' WHERE customerid = ${id}`;
//     pool.query(query)
//     id++
// }
