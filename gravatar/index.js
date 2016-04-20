'use strict';
//gravatar//

var md5 = require('md5');

module.exports = function(req, res, params) {
	var operation = params.shift(); //email string
	var hash = md5(operation);

	var gravatar = "//gravatar.com/avatar/" + hash;
	console.log("grav", gravatar)

res.write(`${gravatar}`);
res.end('\n');
}
