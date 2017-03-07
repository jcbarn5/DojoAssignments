#function that prints from 1 to 2000 and designates whether the number is odd or even.


def odd_even(a,b):
    for i in range(a,b):

        if i%2 != 0:
            print "Number is ", i,".", "This is an odd number."
        else:
            print "Number is ", i,".", "This is an even number."
print odd_even(1,2001)

#function that multiplies each value in a list by 5 and returns list with multiplied values

def multiply(a,b):

    newList = [i*b for i in a]
    print newList
multiply([2,4,10,16], 5)
