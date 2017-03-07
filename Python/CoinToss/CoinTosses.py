# count = 0
# while count < 5:
#     print 'looping - ', count
#     count += 1

import random

def coinToss():
    countH = 0
    countT = 0
    print "Starting the program..."
    side=""
    count = 0
    while count < 5001:
        val = random.randint(0,1)
        side = ""
        if val == 1:
            side = "head"
            countH+=1
            print "Attemp #", count, ":Throwing a coin... It's a", side, "!", "Got", countH, "head(s) so far and", countT, "tail(s) so far"
        if val == 0:
            side = "tails"
            countT+=1
            print "Attemp #", count, ":Throwing a coin... It's a", side, "!", "Got", countH, "head(s) so far and", countT, "tail(s) so far"
        count+=1
coinToss()
