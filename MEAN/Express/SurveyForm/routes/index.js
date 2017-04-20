module.exports = function Route(app){
	app.get('/', function(req, res) {
	 res.render("index");
	})
	app.post('/results', function(req, res) {
		info = {
			name: req.body.name,
			dojo_location: req.body.dojo,
			favorite_language: req.body.favlang,
			comment: req.body.comment
		};
    //user_data is instantiated below, could be called anything, must be reference in results.ejs, i.e. user_data
	 	res.render("results",{user_data: info});
	})
};
