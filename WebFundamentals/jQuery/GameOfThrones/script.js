$(document).ready(function(){

	 $(document).on('click', 'img', function() {

		var id = $(this).attr('id')

    $.get("http://anapioficeandfire.com/api/houses/"+id+"",function(res){
			console.log(res);
			$('.names').html("<h4>Name </h4>" + res.name);
			$('.words').html("<h4>Words </h4>" + res.words);

			var titles = "";
			titles +="<h4>Titles </h4>";
			titles +="<ul>";
      for (var i = 0; i < res.titles.length; i++) {
					titles += "<li>"+res.titles[i]+"</li>"
      }
			titles +="</ul>";
			$('.titles').html(titles);

		},"json");

	});
});

//
// for(var i = 0; i < res.types.length; i++) {
//     html_str += "<li>" + res.types[i].name + "</li>";
// }
// html_str += "</ul>";
//  $('.type').html(html_str);
//  $('.height').html('<h4>Height: </h4>' + res.height);
//  $('.weight').html('<h4>Weight: </h4>' + res.weight + " lbs");
//  $('.name').html(res.name);
//  $('.pic').html('<img id=' + id + ' src="http://pokeapi.co/media/img/' + id + '.png">');
