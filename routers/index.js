var express = require ('express');
var router = express.Router();
var path = require ('path');

console.log('in index router');

router.get('/', function(req, res){
	var indexFile = path.join(__dirname, '../public/views/index.html');
	res.sendFile(indexFile);
	console.log('went to public');
});


module.exports = router;
