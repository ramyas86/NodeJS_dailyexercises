USE northwind;

-- 1. List the product id, product name, unit price and category name of all products.
-- Order by category name and within that, by product name.
SELECT P.ProductID, P.ProductName, P.UnitPrice, C.CategoryName
FROM Products P
INNER JOIN Categories C ON P.CategoryID = C.CategoryID
ORDER BY C.CategoryName, P.ProductName;

-- 2. List the product id, product name, unit price and supplier name of all products
-- that cost more than $75. Order by product name.
SELECT P.ProductID, P.ProductName, P.UnitPrice, S.CompanyName
FROM Products P
INNER JOIN Suppliers S ON P.SupplierID = S.SupplierID
WHERE P.UnitPrice > 75
ORDER BY P.ProductName;

-- 3. List the product id, product name, unit price, category name, and supplier name
-- of every product. Order by product name.

SELECT P.ProductID, P.ProductName, P.UnitPrice, C.CategoryName, S.CompanyName
FROM Products P
INNER JOIN Categories C ON P.CategoryID = C.CategoryID
INNER JOIN Suppliers S ON P.SupplierID = S.SupplierID
ORDER BY P.ProductName;

-- 4. What is the product name(s) and categories of the most expensive products?
-- HINT: Find the max price in a subquery and then use that in your more complex query that joins products with categories.

SELECT P.ProductName, C.CategoryName
FROM Products P
INNER JOIN Categories C ON P.CategoryID = C.CategoryID
WHERE P.UnitPrice = (
    SELECT MAX(UnitPrice)
    FROM Products
);

-- 5. List the order id, ship name, ship address, and shipping company name of every order that shipped to Germany.
SELECT O.OrderID, O.ShipName, O.ShipAddress, S.ShipName
FROM Orders O
INNER JOIN Shippers S ON O.ShipVia = S.ShipperID
WHERE O.ShipCountry = 'Germany';

-- 6. List the order id, order date, ship name, ship address of all orders that ordered "Sasquatch Ale"?
SELECT O.OrderID, O.OrderDate, C.CompanyName AS ShipName, C.Address AS ShipAddress
FROM Orders O
INNER JOIN Customers C ON O.CustomerID = C.CustomerID
INNER JOIN `Order Details` OD ON O.OrderID = OD.OrderID
INNER JOIN Products P ON OD.ProductID = P.ProductID
WHERE P.ProductName = 'Sasquatch Ale';