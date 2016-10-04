var express = require ('express');
var router = express.Router();
var path = require ('path');
var pg = require('pg');
var bodyParser = require('body-parser');
var connectionString = 'postgres://localhost:5432/timberline';

router.use(bodyParser.json());

router.post('/contact', function (req, res){
	var contact = req.body;
	console.log('contact is', contact);
	pg.connect(connectionString, function(err, client, done){
		if (err){
			console.log('connection error', err);
		} else {
		var queryResults = client.query('INSERT INTO clients (first_name, last_name, email, subject, message) ' +
									'VALUES($1, $2, $3, $4, $5)', [contact.first_name, contact.last_name, contact.email, contact.subject, contact.message]);

			} //end else
			 queryResults.on('end', function(){
						done();
						//send back success to client
						res.send({success: true});
			});//end query results
	});//end pg.connect
});//end router.post





module.exports = router;
