-- https://www.hackerrank.com/challenges/weather-observation-station-19

SELECT TRUNCATE(
    SQRT(
        POW(min(lat_n) - max(lat_n), 2) + POW(min(long_w) - max(long_w), 2)
    ), 4) 
FROM station;