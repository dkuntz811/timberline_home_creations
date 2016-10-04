var express = require ('express');
var router = express.Router();
var path = require ('path');
var pg = require('pg');
var bodyParser = require('body-parser');
var connectionString = 'postgres://localhost:5432/timberline';

router.use(bodyParser.json());

router.get('/getContact', function(req, res){
	console.log('getContact router hit');
	pg.connect(connectionString, function(err, client, done){
		if (err){
			console.log('error in getContact route', err);
		} else {
			console.log('connected to clients db');
			//array to hold results
			var resultArray = [];
			//query to db to get rows
			var queryResults = client.query('SELECT * FROM clients');
			queryResults.on('row', function(row){
				resultArray.push(row);
				console.log(resultArray);
			});//end query on 'row'
			queryResults.on('end', function(){
				done();
				return res.json(resultArray);
				res.send({success: true});
			});//end query on 'end'
		}
	});//end pg.connect
});//end router.get

module.exports = router;
