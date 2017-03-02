// alert("connected");
$(document).ready(function(){


  $('.click').click(function(){
    $(".clickText").text(function() {
      return "YOU CLIKCED THE BUTTON!";
    });
  });

  $('.hide').click(function(){
   $('.hide').hide("slow", function(){
   });
  });

  $('.show').click(function(){
   $('.peek').show("slow");
  });

  $('.toggle').click(function(){
   $('.toggleText').toggle("slow");
  });

  $('.slideDwn').click(function(){
     $('#downer').slideDown();
  });

  $('.slideUp').click(function(){
     $('#upper').slideUp();
  });

  $('.toggleBtn').click(function(){
     $('#toggler').slideToggle(5000, function() {

     });
  });

  $(".fadeIn").click(function() {
    $( "#fadee:hidden:first" ).fadeIn( "fast" );
  });

  $(".fadeOut").click(function() {
    $( "#fader" ).fadeOut( "slow" );
  });

  $(".adder").click(function() {
    $("#addee").addClass("selected");
  });

  $(".before").click(function() {
    $("#pre").before("Shhhh, I'm a secret...");
  });

  $(".after").click(function() {
    $("#post").after("Here I am Elmer!");
  });

  $(".append").click(function() {
    $(".append").append("Now I'm a fat button!");
  });

  $(".mod").click(function() {
    $(".mod").html("OW!");
  });



  var title = $ ("em").attr("title");
    $(".attribute").click(function() {
      $(".bc").text(title);
    });



    $( "input" )
    .keyup(function() {
      var value = $( this ).val();
      $( "#displayer" ).text( value );
    });


    $(".texting").click(function() {
      $( ".texting" ).text( "Whomp Whomp Whomp" );
    });

    $( "div" ).data( "test", { first: 16, last: "pizza!" } );
    $( "span:first" ).text( $( "div" ).data( "test" ).first );
    $( "span:last" ).text( $( "div" ).data( "test" ).last );







//Don't touch this closer \/, it's for the $(document).ready(function(){ up at the tippy top
});
