var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index', {
		location: 'city: Seville',
		explorer: 'explorer: Magellan'
	});
});

app.get('/CanaryIslands', function(req, res) {
	res.render('CanaryIslands', {
		location: 'Canary Islands',
		explorer: 'Magellan'
	});
});

app.get('/CapeVerde', function(req, res) {
	res.render('CapeVerde', {
		location: 'Cape Verde',
		explorer: 'Magellan'
	});
});

app.get('/straightofMagellan', function(req, res) {
	res.render('straightofMagellan', {
		location: 'Straight of Magellan',
		explorer: 'Magellan'
	});
});

app.get('/Guam', function(req, res) {
	res.render('Guam', {
		location: 'Guam',
		explorer: 'Magellan'
	});
});

app.get('/Philippines', function(req, res) {
	res.render('Philippines', {
		location: 'Philippines',
		explorer: 'Magellan'
	});
});



var server = app.listen(8162, function() {
	console.log('Express server listening on port ' + server.address().port);
});
