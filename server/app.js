var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var pg = require ('pg');
var connectionString = 'postgres//localhost:5432/timberline';

app.use(bodyParser.json());

//routers
var index = require('../routers/index');
app.use('/', index);

var contact = require('../routers/contact');
app.use('/', contact);

var admin = require('../routers/admin');
app.use('/', admin);
// app.use(express.static('public'));





var port = process.env.PORT || 6060;

var server = app.listen(port, function(){
	var port = server.address().port;
	console.log('Listening on port', port);
});
