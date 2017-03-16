import random #import random so I can use it in the shuffle function

class Deck(object): #this is the blueprint/object/whatever for my entire deck which will contain all of my cards...also objects
    def __init__(self): #using built in function __init__(self), where self refers to Deck, to run something immediately. Self the paramater, so below (line ~47) deck1 is the argument
        self.deck = [] #this is the immediate thing we want run, which is making self(argument, or deck1), and deck is the name we gave the list we are creating that will contain our cards later

    def createDeck(self): #function createDeck, where self refers to Deck(object is deck1?)
        suits = ['Heart','Diamond','Club','Spade'] #this is a variable that is a list containing the suits
        values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'] #this is a list containing the card values
        for suit in suits: #this is a python for loop using suit as a counter that goes through the list in suits variable
            for val in values: #this is a python for loop using val as a counter that goes through the list in values variable
                card = Card(suit, val) # this is a variable, card, set to class Card (line ~37)
                self.deck.append(card) #puts card variable (which is an object) that was created in step above at the end of our self.deck list

        print self.deck #prints the deck list [] after running through both for loops
        return self.deck #prints the deck list [] after running through both for loops, ?????otherwise it is not stored for usage?????

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
