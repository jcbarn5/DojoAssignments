// alert("connected");
$(document).ready(function(){

  $(document).on('click', 'img', function(){
    $(this).fadeOut();
  });

  $(".restore").click(function() {
    $( "img" ).fadeIn("slow");
  });

  $('.start').click(function(){
    $('.picWrap').append('<img class="ninjaVanish" src="ninja.png" alt="Coding Dojo Yellow Belt Ninja">')
  });

//ah, can't touch this, dun nah nun
});
