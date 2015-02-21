var express = require('express');

var indexController = require('./controllers/index.js');
var _ = require('underscore');
var trip = require('./public/voyage.js');
var bodyParser = require('body-parser');
// var bodyParser = require('body-parser');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', indexController.index);


app.get('/voyage/:place', function(req, res){
  var currentPlace = req.params.place.toLowerCase();
  var selectedPlace = _.find(trip, function(place) {
    console.log(place)
    return place.place.toLowerCase() == currentPlace
  });
  console.log(selectedPlace)
  var currentLocation = selectedPlace['place'];
  res.render('voyage', selectedPlace);
});



var server = app.listen(8162, function() {
	console.log('Express server listening on port ' + server.address().port);
});
