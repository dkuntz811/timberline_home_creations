var express = require ('express');
var router = express.Router();
var path = require ('path');
var pg = require('pg');
var bodyParser = require('body-parser');
var connectionString = 'postgres://localhost:5432/timberline';

router.use(bodyParser.json());

router.get('/admin', function(req, res){
	console.log('in get contacts');
	pg.connect(connectionString, function(err, client, done){
		if(err){
			console.log('connection error is', err);
		} else {
			var results = [];
			var queryResults = client.query ('SELECT * FROM clients');
			queryResults.on('row', function(row){
				results.push(row);
			});
			queryResults.on('end', function(){
				done();
				return res.json(results);
				console.log('results are', results);
			});
		}
	});//end pg.connect
});//end router.get

module.exports = router;
