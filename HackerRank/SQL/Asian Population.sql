-- https://www.hackerrank.com/challenges/asian-population

SELECT SUM(city.population) FROM city 
INNER JOIN country ON country.code = city.countrycode 
WHERE continent = 'Asia';