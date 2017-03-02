$(document).ready(function() {


  $(document).on('click', '.contactCard', function(){
    $(this).children().toggle('slow');
  });

  $('#btn').click(function(){

    var first = $('.fName').val();
    var last = $('.lName').val();
    var description = $('.description').val();

    $('.fName').val('');
    $('.lName').val('');
    $('.description').val('');

    $('.contacts').append("<div class='contactCard'><h1>" + first + " " + last + "</h1><h4>Cick for description</h4><p hidden>" + description + "</p></div>");



  });
});

// $(document).on('click', 'img', function(){
//   $(this).fadeOut();
// });

// NINJA CAT
// $('img').click(function() {
  // var temp = $(this).attr('src');
    // $(this).attr('src', $(this).attr('delta-alt-src'));
    // $(this).attr('delta-alt-src', temp);
// });
// USERS
// $('#btn').click(function(){
//   var first = $('.fName').val();
//   var last = $('.lName').val();
//   var mail = $('.Email').val();
//   var number = $('.contact').val();
//
//   $('.table').append(
//     `<tr><td>${first}</td><td>${last}</td><td>${mail}</td><td>${number}</td>`
//   );
