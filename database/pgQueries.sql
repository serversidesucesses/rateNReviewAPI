
-- select (product_id, c.id, cr.id, name, value) FROM characteristics c
-- INNER JOIN characteristic_reviews cr ON c.id = cr.characteristic_id WHERE product_id = 40438;


--COMPUTES AVERAGE

--SPECIFY NAME AND PRODUCT => AVERAGE SCORE OF CHAR
--  SELECT product_id, c.name, avg(value) as length
--  FROM characteristics c JOIN characteristic_reviews cr
--  ON c.id = cr.characteristic_id
--  WHERE name = 'Quality' and product_id = 43438 GROUP BY product_id, c.name
--  LIMIT 5;

-- **** RETURNS ALL AVERAGES FOR GIVEN PRODUCT
 SELECT product_id, c.name, avg(value) as length
 FROM characteristics c JOIN characteristic_reviews cr
 ON c.id = cr.characteristic_id
 WHERE product_id = 43438 GROUP BY product_id, c.name
 LIMIT 5;

--DUPLICATES, BUT CALCULATES AVG OF EACH NAME CHAR BY PRODUCT
-- SELECT product_id, name, value,
-- avg(value) over(partition by product_id, name) as avg_val
-- FROM characteristic_reviews cr INNER JOIN characteristics c
-- ON cr.characteristic_id = c.id
-- LIMIT 100;


-- SELECT id AS length INTO product_chars
-- FROM characteristics c
-- WHERE id = c.id AND c.name = 'Length';

-- SELECT id
-- INTO product_chars
-- FROM product;


--RETURNING COMPONENTS OF A REVIEW (REVIEW AND REVIEW PHOTOS INNER JOIN)
--METRICS: Query completed in 15.3 / 4.8 sec.
-- SELECT (
--   r.id,
--   rating,
--   summary,
--   recommend,
--   response,                   --HELPFUL
--   body,
--   date,
--   reviewer_name,
--   helpfulness,
--   url
-- ) FROM reviews r INNER JOIN reviews_photos rp ON r.id = rp.review_id
-- WHERE (r.product_id = 40384) --****VAR FOR PRODUCT ID****--
-- ORDER BY r.helpfulness DESC
-- LIMIT 10;

-- SELECT (
--   r.id,
--   rating,
--   summary,
--   recommend,
--   response,                 --RELEVANT
--   body,
--   date,
--   reviewer_name,
--   helpfulness,
--   url
-- ) FROM reviews r INNER JOIN reviews_photos rp ON r.id = rp.review_id
-- WHERE (r.product_id = 40384)  --****VAR FOR PRODUCT ID****--
-- ORDER BY r.date ASC, helpfulness ASC--HELPFUL TO PUT ASC ? DEC
-- LIMIT 10;

-- SELECT (
--   r.id,
--   rating,
--   summary,
--   recommend,
--   response,                   --NEWEST
--   body,
--   date,
--   reviewer_name,
--   helpfulness,
--   url
-- ) FROM reviews r INNER JOIN reviews_photos rp ON r.id = rp.review_id
-- WHERE (r.product_id = 40384)  --****VAR FOR PRODUCT ID****--
-- ORDER BY r.date ASC
-- LIMIT 10;


-- SELECT (
--   rating,
--   recommend
-- ) FROM reviews r
-- WHERE (r.id = 40384);

-- SELECT (
--   name,
--   value
-- ) FROM characteristic_reviews cr INNER JOIN characteristics c
-- ON characteristic_id = c.id
-- WHERE (product_id = 40384)
-- ORDER BY review_id;