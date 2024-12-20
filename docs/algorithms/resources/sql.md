SQL Study Guide

## 1. Select

[584\. Find Customer Referee](https://leetcode.com/problems/find-customer-referee/)

:::spoiler Solution
```sql=
SELECT 
  name 
FROM 
  Customer 
WHERE 
  referee_id != 2 
  OR referee_id IS NULL;
```
:::

[1757\. Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/)

:::spoiler Solution
```sql=
SELECT 
  product_id 
FROM 
  products
WHERE 
  low_fats = 'Y' 
  AND recyclable = 'Y';
```
:::

[595\. Big Countries](https://leetcode.com/problems/big-countries/)

:::spoiler Solution
```sql=
SELECT 
  name, 
  population, 
  area 
FROM 
  World 
WHERE 
  area >= 3000000 
  OR population >= 25000000;
```
:::

[1148\. Article Views I](https://leetcode.com/problems/article-views-i/)

:::spoiler Solution
```sql=
SELECT 
  DISTINCT author_id AS id 
FROM 
  Views 
WHERE 
  author_id = viewer_id 
ORDER BY 
  id;
```
:::

[1683\. Invalid Tweets](https://leetcode.com/problems/invalid-tweets/)

:::spoiler Solution
```sql=
SELECT 
  tweet_id 
FROM 
  Tweets 
WHERE 
  CHAR_LENGTH(content) > 15;
```
:::

## 2. Basic Joins

[197\. Rising Temperature](https://leetcode.com/problems/rising-temperature/)

:::spoiler Solution
```sql=
SELECT w1.id AS id
FROM Weather AS w1
JOIN Weather AS w2
ON DATEDIFF(w1.recordDate, w2.recordDate) = 1
WHERE w1.temperature > w2.temperature;
```
:::

[577\. Employee Bonus](https://leetcode.com/problems/employee-bonus/)

:::spoiler Solution
```sql=
SELECT e.name, b.bonus
FROM Employee AS e
LEFT JOIN Bonus AS b ON e.empid = b.empid
WHERE bonus < 1000 OR bonus IS NULL;
```
:::

[1068\. Product Sales Analysis I](https://leetcode.com/problems/product-sales-analysis-i/)

:::spoiler Solution
```sql=
SELECT 
  p.product_name, 
  s.year, 
  s.price 
FROM 
  Sales AS s 
  LEFT JOIN Product AS p ON s.product_id = p.product_id;
```
:::

[1280\. Students and Examinations](https://leetcode.com/problems/students-and-examinations/)

:::spoiler Solution
```sql=
SELECT 
    s.student_id, s.student_name, sub.subject_name, IFNULL(grouped.attended_exams, 0) AS attended_exams
FROM Students s

CROSS JOIN Subjects sub
LEFT JOIN (
    SELECT student_id, subject_name, COUNT(*) AS attended_exams
    FROM Examinations
    GROUP BY student_id, subject_name
) grouped 
ON s.student_id = grouped.student_id AND sub.subject_name = grouped.subject_name
ORDER BY s.student_id, sub.subject_name;
```
:::

[1378\. Replace Employee ID With The Unique Identifier](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/)

:::spoiler Solution
```sql=
SELECT b.unique_id, a.name FROM Employees AS a
LEFT JOIN EmployeeUNI AS b
ON a.id = b.id;
```
:::

[1581\. Customer Who Visited but Did Not Make Any Transactions](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/)

:::spoiler Solution
```sql=
SELECT customer_id, COUNT(visit_id) AS count_no_trans 
FROM Visits 
WHERE visit_id NOT IN (
    SELECT visit_id 
    FROM Transactions
) 
GROUP BY customer_id;
```
:::

[1661\. Average Time of Process per Machine](https://leetcode.com/problems/average-time-of-process-per-machine/)

:::spoiler Solution
```sql=
SELECT machine_id,
    ROUND(SUM(CASE WHEN activity_type = 'start' THEN -timestamp ELSE timestamp END) / (COUNT(DISTINCT process_id)), 3) AS processing_time
FROM Activity
GROUP BY machine_id;
```
:::

## 3. Basic Aggregate Functions

## 4. Sorting and Grouping

[2356\. Number of Unique Subjects Taught by Each Teacher](https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/)

:::spoiler Solution
```sql=
SELECT teacher_id, COUNT(DISTINCT subject_id) AS cnt
FROM Teacher
GROUP BY teacher_id;
```
:::

[1141\. User Activity for the Past 30 Days I](https://leetcode.com/problems/user-activity-for-the-past-30-days-i/)

:::spoiler Solution
```sql=
SELECT 
    activity_date AS day, 
    COUNT(DISTINCT user_id) AS active_users
FROM 
    Activity
WHERE 
    DATEDIFF('2019-07-27', activity_date) < 30 AND DATEDIFF('2019-07-27', activity_date)>=0
GROUP BY day;
```
:::

## 5. Advanced Select and Joins

## 6. Subqueries

## 7. Advanced String Functions / Regex / Clause

Problem Difficulty Legend
-------------------------

-   🟩 Easy
-   🟨 Medium
-   🟧 Medium-Hard
-   🟥 Hard
-   ⬛ Very Hard

Additional Resources
--------------------

-   [SQL Tutorial (W3Schools)](https://www.w3schools.com/sql/)
-   [SQL Basics (Khan Academy)](https://www.khanacademy.org/computing/computer-programming/sql)
-   [SQL Zoo](https://sqlzoo.net/)
-   [Mode SQL Tutorial](https://mode.com/sql-tutorial/)
