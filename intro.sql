-- SELECT name, entrydate, productionname FROM customers 
-- INNER JOIN orders on orders.customerid = customers.customerid

-- SELECT name, entrydate, productionname, id FROM customers 
-- RIGHT JOIN orders on orders.customerid = customers.customerid ORDER BY orders.id DESC

-- UPDATE customers SET name = 'Please, Where Damian?' WHERE customerid > 3

-- INSERT INTO customers (name, entrydate) VALUES ('Please, Where Damian?', '2022-10-12')

-- DELETE FROM orders WHERE id > 4

-- SELECT * FROM customers

-- CREATE TABLE customers (
-- 	customer_id SERIAL PRIMARY KEY,
-- 	first_name varchar(20) NOT NULL,
-- 	last_name varchar(20) NOT NULL,
-- 	email varchar(100) NOT NULL,
-- 	phone varchar(15) NOT NULL,
-- 	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
-- 	updated_at TIMESTAMP NULL
-- )

-- INSERT INTO customers (first_name, last_name, email, phone,created_at) VALUES 
-- ('Some','One','someone@email.com','8005550100', NOW()),
-- ('Some','Body','somebody@email.com','8005550150', NOW()),
-- ('No','One','noone@email.com','8005550200', NOW()),
-- ('Every','One','everyone@email.com','8005550250', NOW()),
-- ('Damien','M','damienm@email.com','8005550300', NOW()),
-- ('Todd','A','todda@email.com','8005550150', NOW()),
-- ('Ray','Magini','raymagini@email.com','8005550350', NOW()),
-- ('Michael','Scott','mscott@email.com','8005550400', NOW());

-- DROP TABLE customers