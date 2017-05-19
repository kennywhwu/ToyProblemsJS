-- https://www.hackerrank.com/challenges/weather-observation-station-5

(SELECT city, LENGTH(city) AS city_length
FROM station
ORDER BY city_length, city
LIMIT 1)

UNION

(SELECT city, LENGTH(city) AS city_length
FROM station
ORDER BY city_length DESC, city
LIMIT 1);