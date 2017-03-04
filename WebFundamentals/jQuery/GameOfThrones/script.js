$(document).ready(function(){

	$('img').click(function(){

		var id = $(this).attr('id')

    $.get("http://anapioficeandfire.com/api/houses/"+id+"",function(res){
			console.log(res)
			$('.names').html(res.name)
			$('.words').html(res.words)
      for (var i = 0; i < array.length; i++) {
        $('.titles').html(res.titles[i])

      }


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
