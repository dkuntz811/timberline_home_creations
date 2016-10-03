var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require ('pg');
var connectionString = 'postgres//localhost:5432/timberline';

app.use(bodyParser.json());

app.use(express.static('public'));

var index = require('../routers/index');
app.use('/', index);

var port = process.env.PORT || 4040;

var server = app.listen(port, function(){
	var port = server.address().port;
	console.log('Listening on port', port);
});
