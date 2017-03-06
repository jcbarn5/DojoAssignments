like = "If monkeys like bananas, then I must be a monkey!"
#mon = 'monkey'
#for (i = 0; i < len(like); i++)
#    if (i = mon)
#        print i
print like.find('monkey')

print like.replace('monkey','alligator')

x = [2,54,-2,7,12,98]
print x
print min(x)
print max(x)

x = ["hello",2,54,-2,7,12,98,"world"]
print x[0], x[len(x)-1]

x = [19,2,54,-2,7,12,98,32,10,-3,6]
print x
x.sort()
print x
f = x[0:5]
l = x[5:11]
l.insert(0, f)
print l
