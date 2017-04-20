module.exports = function (){
  return {
    add: function(num1, num2) {
      var answer = num1 + num2;
      console.log(answer);
      // return answer;
    },
    multiply: function(num1, num2) {
      var answer = num1*num2;
      console.log(answer);
    },
    square: function(num) {
      var answer = num*num;
      console.log(answer);
    },
    random: function(num1, num2) {
      var answer = Math.floor(Math.random()*num2)+num1;
      console.log(answer);
    }
  }
};
