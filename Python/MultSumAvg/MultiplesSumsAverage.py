#Part1: Prints odd numbers from 1-1000
for i in range(1, 1000):
    if i%2 != 0:
        print i
#Part2: Prints numbers 5-1000000 in increments of 5
for x in range(5, 1000000):
    if x%5 == 0:
        print x

#Sum List
a = [1, 2, 5, 10, 255, 3]
tot = 0
for val in a:
    tot += val
print tot

#Average List
a = [1, 2, 5, 10, 255, 3]
tot = 0
average = 0
for val in a:
    tot += val
average = tot/len(a)
print average
