var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var pg = require ('pg');
var connectionString = 'postgres//localhost:5432/timberline';

app.use(bodyParser.json());

var index = require('../routers/index');
app.use('/', index);

// app.use(express.static('public'));





var port = process.env.PORT || 5000;

var server = app.listen(port, function(){
	var port = server.address().port;
	console.log('Listening on port', port);
});
