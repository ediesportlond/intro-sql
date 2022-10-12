-- SELECT name, entrydate, productionname FROM customers 
-- INNER JOIN orders on orders.customerid = customers.customerid

-- SELECT name, entrydate, productionname, id FROM customers 
-- RIGHT JOIN orders on orders.customerid = customers.customerid ORDER BY orders.id DESC

-- UPDATE customers SET name = 'Please, Where Damian?' WHERE customerid > 3

-- INSERT INTO customers (name, entrydate) VALUES ('Please, Where Damian?', '2022-10-12')

-- DELETE FROM orders WHERE id > 4

-- SELECT * FROM customers