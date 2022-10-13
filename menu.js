import pg from "pg";
import readline from "readline-sync";
import { cred } from "./credentials.js";

const { Pool } = pg;
const pool = new Pool(cred);

const runQuery = (query) => pool.query(query);

let run = true;

while (run) {
    let option = Number(readline.question(`         MENU
    0. View All Data
    1. Find Data
    2. Insert New Entry
    3. Update Entry
    4. Delete
    5. Exit
    Your Entry: `));

    let query;
    let result;
    switch (option) {
        case 0:
            query = 'SELECT * FROM customers';
            result = await runQuery(query, option);
            console.table(result.rows);
            break;
        case 1:
            const id = Number(readline.question(`What is the id you would like to view?
            `));
            query = `SELECT * FROM customers WHERE customerid = ${id}`;
            result = await runQuery(query, option);
            console.table(result.rows);
            break;
        case 2:
            const name = readline.question(`What name would you like to add?
        `);
            query = `INSERT INTO customers (name, entrydate) VALUES ('${name}', NOW())`;
            result = await runQuery(query, option);
            console.log('User added.');
            break;
        case 3:
            const idToUpdate = Number(readline.question(`What is the id you would like to update?
        `));
            const newName = readline.question(`What is the new name?
        `);
            query = `UPDATE customers SET name = '${newName}', entrydate = NOW() WHERE customerid = ${idToUpdate}`;
            result = await runQuery(query, option);
            console.log('Name has been updated.');
            break;
        case 4:
            const idToDelete = Number(readline.question(`What is the id you would like to delete?
        `));
            query = `DELETE FROM customers WHERE customerid = ${idToDelete}`;
            result = await runQuery(query, option);
            console.log("Entry has been deleted.");
            break;
        default:
            run = false;
            break;
    }
}

pool.end();