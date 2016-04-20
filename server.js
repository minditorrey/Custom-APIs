'use strict';

const PORT =process.env.PORT || 3000;

var http = require('http');
var fs = require('fs');
var md5 = require('md5');


var server = http.createServer(function (req, res) {

	var params = req.url.split('/');
	params.shift();//url without empty string
	var resource = params.shift().toLowerCase();//first thing after localhost3000
console.log(params);
	switch(resource) {
		
		case 'math': require('./math')(req, res, params);
			break;
		case 'gravatar': require('./gravatar')(req, res, params);
			break;
		case 'sentence': require('./sentence')(req, res, params);
			break;
		case 'age': require('./age')(req, res, params);
			break;
		// case '': //serve out index.html
		// 	var data = fs.readFileSync('./public/index.html');
		// 	res.end( data.toString() );
		// 	break;
		default: 
			fs.readFile('./public/'+(params[0] ? params[0] : 'index.html'), 'utf8',(err, data) => {
			console.log(data);
			var html = data;
			res.write(html);
			res.end();
			// fs.readFile(`./${resource}`), (err, data) => {
			// 	if(err) {
			// 		res.statusCode = 404;
			// 		res.write('Not Found.');
			// 		res.end('\n');
			
			})
	}


	});


server.listen(PORT, function(err) {
	if(err) return console.log('error:', err);
	console.log(`Node server listening on port ${PORT}`);
});