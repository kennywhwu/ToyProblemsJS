def climbStairs(self, n):
  steps = [0, 1, 2]

  for i in xrange(3, n+1):
    steps.append(steps[i-1] + steps[i-2])

  return steps[n]