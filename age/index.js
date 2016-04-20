'use strict';
//age//

module.exports = function(req, res, params) {

	var operation = params.shift();
	var year = operation.toString(); 
	var today = new Date();
	var yyyy = today.getFullYear();
	var age = yyyy - year;
	res.write(`${age}`);
	res.end('\n');
	// };
}	


