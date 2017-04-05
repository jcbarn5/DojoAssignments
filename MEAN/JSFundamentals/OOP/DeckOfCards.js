function Deck() {
  var deck = [];
  var suits = ['Heart','Diamond','Club','Spade'];
  var values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];

  this.createDeck = function() {
    for (var s = 0; s < suits.length; s++) {
      for (var v = 0; v < values.length; v++) {
        var card = `${suits[s]} ${values[v]}`
        deck.push(card)
      }
    }
    return deck;
  }
this.shuffle = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  console.log(array);
  return array;
  }
  this.reset = function(){
    deck = [];
    this.createDeck();
    console.log(deck);
    return deck;
  }
  this.printDeck = function(){
    console.log(deck);
  }
  this.deal = function(person) {
    // var cardDealt1 = deck[deck.length-1];
    // deck.pop();
    // var cardDealt2 = deck[deck.length-1];
    // deck.pop();
    // console.log(cardDealt1);
    person.card1 = deck.pop();
    person.card2 = deck.pop();
    console.log(deck.length);
    return this;
  }
}
function Player(name){
  var name = name;
  this.card1 = '';
  this.card2 = '';
  console.log('You created player:', name);
  this.printHand = function() {
    console.log(this.card1, this.card2);
  }

  this.discard = function(num){
    if(num == 1){
      this.card1 = '';
    }
    else{
      this.card2 = '';
    }
  }
};
var myDeck = new Deck();

myDeck.shuffle(myDeck.createDeck());
// myDeck.reset();
console.log('*****');
myDeck.printDeck();

var Dude = new Player('Dude');
myDeck.deal(Dude);
Dude.printHand();
Dude.discard();
Dude.printHand();
