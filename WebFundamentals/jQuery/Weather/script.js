$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)

          var city = $(".city").val();

        $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&APPID=3dc5ee23522773ed1d60952f81d07cc4', function(res) {
          var html_str = "";
          var degree = res.main.temp;
          html_str += "<h2>"+city+"</h2>"
          html_str += "<p>"+degree+ "\xB0" +"</p>"

          $('.info').html(html_str);
            

        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
