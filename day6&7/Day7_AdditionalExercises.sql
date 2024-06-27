USE sakila;

-- 1. Display the first and last name of each actor in a single column in upper case letters. Name the column Actor Name.
SELECT CONCAT(UPPER(first_name), ' ', UPPER(last_name)) AS `Actor Name`
FROM actor;

-- 2. You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe."
SELECT actor_id, first_name, last_name FROM actor WHERE first_name = 'Joe';

-- 3. Find all actors whose last name contain the letters GEN.
SELECT * FROM actor WHERE last_name LIKE '%GEN%';

-- 4. Find all actors whose last names contain the letters "LI". 
-- This time, order the rows by last name and first name, in that order.
SELECT * FROM actor WHERE last_name LIKE '%LI%' ORDER BY last_name, first_name;

-- 5. Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China.
SELECT country_id, country FROM country WHERE country IN ('Afghanistan', 'Bangladesh', 'China');

-- 6. List last names of actors and the number of actors who have that last name,
-- but only for names that are shared by at least two actors
SELECT last_name, COUNT(*) AS actor_count
FROM actor
GROUP BY last_name
HAVING COUNT(*) >= 2
ORDER BY last_name;

-- 7. The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS.
-- Write a query to fix the record, and another to verify the change.
 
-- Update the incorrect record
UPDATE actor
SET first_name = 'HARPO'
WHERE first_name = 'GROUCHO' AND last_name = 'WILLIAMS';

-- Verify the change
SELECT *
FROM actor
WHERE first_name = 'HARPO' AND last_name = 'WILLIAMS';

-- 8. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct name after all! 
-- In a single query, if the first name of the actor is currently HARPO, change it to GROUCHO. 
-- Then write a query to verify your change.

-- Update the first name back to GROUCHO if it is currently HARPO
UPDATE actor
SET first_name = 'GROUCHO'
WHERE first_name = 'HARPO' AND last_name = 'WILLIAMS';

-- Verify the change
SELECT *
FROM actor
WHERE first_name = 'GROUCHO' AND last_name = 'WILLIAMS';

-- 9. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct name after all! 
-- In a single query, if the first name of the actor is currently HARPO, change it to GROUCHO. 
-- Then write a query to verify your change.

-- Update the first name back to GROUCHO if it is currently HARPO, and verify the change
UPDATE actor
SET first_name = CASE
                    WHEN first_name = 'HARPO' THEN 'GROUCHO'
                    ELSE first_name
                 END
WHERE last_name = 'WILLIAMS'
AND first_name IN ('HARPO', 'GROUCHO');

-- Verify the change
SELECT *
FROM actor
WHERE last_name = 'WILLIAMS'
AND first_name = 'GROUCHO';

-- 10. Use JOIN to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.
SELECT s.staff_id, CONCAT(s.first_name, ' ', s.last_name) AS staff_name, SUM(p.amount) AS total_amount
FROM staff s
JOIN payment p ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2005 AND MONTH(p.payment_date) = 8
GROUP BY s.staff_id, CONCAT(s.first_name, ' ', s.last_name)
ORDER BY s.staff_id;

-- 11. List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.
SELECT f.film_id, f.title AS film_title, COUNT(*) AS actor_count
FROM film f
INNER JOIN film_actor fa ON f.film_id = fa.film_id
GROUP BY f.film_id, f.title
ORDER BY f.film_id;

-- 12. How many copies of the film Hunchback Impossible exist in the inventory system?
SELECT COUNT(*) AS num_copies
FROM inventory inv
JOIN film f ON inv.film_id = f.film_id
WHERE f.title = 'Hunchback Impossible';

-- 13. The music of Queen and Kris Kristofferson have seen an unlikely resurgence.
-- As an unintended consequence, films starting with the letters K and Q have
-- also soared in popularity. Use subqueries to display the titles of movies
-- starting with the letters K and Q whose language is English.
SELECT title
FROM film
WHERE LEFT(title, 1) IN ('K', 'Q')
AND language_id = (
    SELECT language_id
    FROM language
    WHERE name = 'English'
);

-- 14. Insert a record to represent Mary Smith renting the movie ‘Academy Dinosaur’ from Mike Hillyer at Store 1 today. 
-- Then write a query to capture the exact row you entered into the rental table.

-- Inserting the rental record
INSERT INTO rental (rental_date, inventory_id, customer_id, return_date, staff_id)
VALUES (NOW(), 
        (SELECT inventory_id FROM inventory WHERE film_id = (SELECT film_id FROM film WHERE title = 'Academy Dinosaur') AND store_id = 1 LIMIT 1), 
        (SELECT customer_id FROM customer WHERE first_name = 'Mary' AND last_name = 'Smith'),
        NULL,
        (SELECT staff_id FROM staff WHERE first_name = 'Mike' AND last_name = 'Hillyer' AND store_id = 1));

-- Query to capture the exact row inserted
SELECT *
FROM rental
WHERE rental_date
AND inventory_id = (SELECT inventory_id FROM inventory WHERE film_id = (SELECT film_id FROM film WHERE title = 'Academy Dinosaur') AND store_id = 1 LIMIT 1)
AND customer_id = (SELECT customer_id FROM customer WHERE first_name = 'Mary' AND last_name = 'Smith')
AND staff_id = (SELECT staff_id FROM staff WHERE first_name = 'Mike' AND last_name = 'Hillyer' AND store_id = 1);