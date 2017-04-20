// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require mongoose
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/intro_mongoose_demo');

//MODELS
// Schema variable
var Schema = mongoose.Schema;
// Create Team Schema
var TeamSchema = new Schema({
    name: String,
    players: [{type: Schema.Types.ObjectId, ref: 'Player' }]
}, { timestamps: true });

//Create Player Schema
var PlayerSchema = new mongoose.Schema({
    _team: {type: Schema.Types.ObjectId, ref: 'Team'},
    name: String,
    age: Number,
}, {timestamps: true});

mongoose.model('Team', TeamSchema);
mongoose.model('Player', PlayerSchema); // We are setting this Schema on our Models as 'Player'

var Team = mongoose.model('Team');
var Player = mongoose.model('Player'); // We are retrieving this Schema from our Models, named 'Player'


// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//ROUTES
app.get('/', function(req, res){
    Team.find({})
    .populate('players')
    .exec(function(err, teams){
        if (err){ console.log(err) ; }
        res.render('index', {teams});
    });
});

app.post('/players', function(req, res){
    Team.findOne({_id: req.body._team}, function(err, team){
        var player = new Player(req.body);
        team.players.push(player);
        player.save(function(err){
            if (err){console.log(err);}
            team.save(function(err){
                if (err) {console.log(err);}
                res.redirect('/');
            })
        })
    })
});
app.post('/team', function(req, res){
    Team.create(req.body, function(err, result){
        if (err){ console.log(err)};
        res.redirect('/');
    })
});



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
