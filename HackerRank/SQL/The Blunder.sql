-- https://www.hackerrank.com/challenges/the-blunder

SELECT CEIL(AVG(salary) - AVG(REPLACE(salary, 0, ''))) FROM employees;