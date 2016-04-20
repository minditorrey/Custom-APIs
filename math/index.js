'use strict';
//math//

module.exports = function(req, res, params) {

var operation = params.shift();


switch(operation) {
	case 'sum': 
		// require('./sum')(req, resp, params);
		//console.log(operatio//n[1]);
		var num1 = parseInt(params[0]);
		var num2 = parseInt(params[1]);
		var result = num1 + num2;
		console.log("num1:", num1);
		console.log("num1=2:", num2)
		res.write(`${result}`);
		break;
	case 'subtract':
		var num1 = operation[0];
		var num2 = operation[1];
		var result = num1 - num2;
		res.write(`${result}`);
		break;
	case 'multiply':
		var num1 = operation[0];
		var num2 = operation[1];
		var result = num1 * num2;
		break;
		res.write(`${result}`);
}
res.end('\n');
}

	