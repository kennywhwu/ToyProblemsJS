-- https://www.hackerrank.com/challenges/weather-observation-station-18

SELECT ABS(ROUND((MIN(lat_n) - MAX(lat_n)) + (MIN(long_w) - MAX(long_w)), 4)) from station;