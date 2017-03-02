$(document).ready(function() {

  $('#btn').click(function(){
    var first = $('.fName').val();
    var last = $('.lName').val();
    var mail = $('.Email').val();
    var number = $('.contact').val();

    $('.table').append(
      `<tr><td>${first}</td><td>${last}</td><td>${mail}</td><td>${number}</td>`
    );
  });
});
