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

router.get('/getnote', function (req, res){
	console.log('in get notes');
	pg.connect(connectionString, function(err, client, done){
		if(err){
			console.log('get note connection error is', err);
		} else {
			var results = [];
			var queryResults = client.query ('SELECT * FROM contacts');
			queryResults.on('row', function(row){
				results.push(row);
			});
			queryResults.on('end', function(){
				done();
				return res.json(results);
				console.log('notes results are', results);
			});//end on end
		}
	}); //end pg.connect
});//end router.get

router.post ('/note', function (req, res){
	console.log('req.body is ', req.body);
	var note = req.body.noteIn;
	console.log('note is', note);
	pg.connect(connectionString, function (err, client, done){
		if (err) {
			console.log('connection error', err);
		} else {
			var queryResults = client.query('INSERT INTO contacts (note) VALUES ($1)' ,
					[note]);
		}
		queryResults.on('end', function(){
			done();
			//send back result to client
			res.send({success: true});
		});
	});
});//end router.post



router.post('/clients/id', function (req, res){
	console.log(req.params.id);
	console.log('in router.delete function');
	var id = req.params.id;

	pg.connect(connectionString, function (err, client, done){
		if (err){
			console.log('error in router.delete', err);
		} else {
			console.log('connected to db for delete client');
			var queryResults = client.query ('DELETE FROM clients WHERE client_id = ($1) ',
				[id],
				done());
				res.send({success: true});
		}
	});//end pg.connect
});//end router.delete


module.exports = router;
