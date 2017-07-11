#https://www.hackerrank.com/challenges/camelcase

#!/bin/python

import sys

s = raw_input().strip()

word_count = 1
for char in s:
    if ord(char) > 64 and ord(char) < 91:
        word_count += 1
print word_count