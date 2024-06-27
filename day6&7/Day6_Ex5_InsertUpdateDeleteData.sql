USE northwind;
-- 1. Add a new supplier.

INSERT INTO Suppliers (SupplierID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax)
VALUES (DEFAULT, 'Britania', 'Britania Co', 'Owner', 'BTM Layout', 'Bengaluru', 'Karnataka', '560068', 'India', '9999999999', '8888888888');

-- 2. Add a new product provided by that supplier
INSERT INTO Products (ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued)
VALUES ('Marie Gold', 30, 6, '1 unit', 10.99, 100, 0, 10, 0);

-- 3. List all products and their suppliers.
SELECT * FROM Products;
SELECT * FROM  Suppliers;

-- 4. Raise the price of your new product by 15%.
UPDATE Products SET UnitPrice = (1.15 * UnitPrice) WHERE ProductID=78;

-- 5. List the products and prices of all products from that supplier.
SELECT ProductName, UnitPrice FROM Products WHERE SupplierID = 30;

-- 6. Delete the new product.
DELETE FROM Products WHERE ProductID = 78;

-- 7. Delete the new supplier.
DELETE FROM Suppliers WHERE SupplierID = 30;

-- 8. List all products.
SELECT * FROM Products;

-- 9. List all suppliers.
SELECT * FROM  Suppliers;