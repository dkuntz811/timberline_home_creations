var express = require ('express');
var router = express.Router();
var path = require ('path');

router.get('/', function(req, res){
	var indexFile = path.join(__dirname, '../public/views/index.html');
});

module.exports = router;
