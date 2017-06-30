# // https://www.hackerrank.com/challenges/birthday-cake-candles

# // Colleen is turning x years old! She has n candles of various heights on her cake, and candle  has height . 
# // Because the taller candles tower over the shorter ones, Colleen can only blow out the tallest candles.
# // Given the  for each individual candle, find and print the number of candles she can successfully blow out.

import sys

def birthdayCakeCandles(n, ar):
    tallest = max(ar)
    blown = 0
    
    for candle in ar:
        if tallest <= candle:
            blown += 1
    
    return blown

n = int(raw_input().strip())
ar = map(int, raw_input().strip().split(' '))
result = birthdayCakeCandles(n, ar)
print(result)  

