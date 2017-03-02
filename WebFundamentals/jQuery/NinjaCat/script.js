$(document).ready(function(){



  $('img').click(function() {
    var temp = $(this).attr('src');
      $(this).attr('src', $(this).attr('delta-alt-src'));
      $(this).attr('delta-alt-src', temp);
  });

//can't touch this, nah na na nah
});
