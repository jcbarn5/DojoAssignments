import random #import random so I can use it in the shuffle function

class Deck(object): #this is the blueprint/object/whatever for my entire deck which will contain all of my cards...also objects
    def __init__(self): #using built in function __init__(self), where self refers to the instatiated deck i.e. self is deck1 in deck1 = Deck(), to run something immediately after being created. Self the paramater, so below (line ~47) deck1 is the argument
        self.deck = [] #this is the code inteh __init__ block, this give the self (deck1 or whatever) the attribute deck which is in this case a list.

    def createDeck(self): #method createDeck, where self refers to Deck(object is deck1?)
        suits = ['Heart','Diamond','Club','Spade'] #this is a variable that is a list containing the suits
        values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'] #this is a list containing the card values
        for suit in suits: #this is a python for loop using suit as a counter that goes through the list in suits variable
            for val in values: #this is a python for loop using val as a counter that goes through the list in values variable
                card = Card(suit, val) # this is a variable, card, set to class Card (line ~37), this is also creating a new object
                self.deck.append(card) #puts card variable (which is an object) that was created in step above at the end of our self.deck list

        print self.deck #prints the deck list [] after running through both for loops
        return self.deck # this leaves the method, and returns the deck attribute so that it's exposed outside of the class.

    def shuffle(self): #shuffle function where self refers to Deck(object is deck1?)
        random.shuffle(self.deck)

        print self.deck
        return self.deck


    def dealCards(self):
        print "hit me"

        return (self.deck.pop(), self.deck.pop())

    def resetDeck(self):
        self.deck = []
        self.createDeck()

        print self.deck
        return self.deck

class Card(object):
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return "Card(Suit %r, Value %r)" % (self.suit, self.value)
deck1 = Deck()

deck1.createDeck()

deck1.shuffle()

deck1.resetDeck()
print deck1.dealCards()
print deck1.dealCards()
print deck1.dealCards()
print deck1.dealCards()
print deck1.dealCards()
print deck1.dealCards()

print len(deck1.deck)
