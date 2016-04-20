'use strict';
//sentence//

module.exports = function(req, res, params) {
  var string = params.shift();
	var text = decodeURIComponent(string);//sentenceString
	var charLength = text.length; 
  var wordsArray = text.split(" ");
  var wordCount = wordsArray.length;
  var spacesCount = wordCount - 1;
  var avgWordLength = parseFloat((charLength - spacesCount) / wordCount).toFixed(2);

  var results=["chars: " + charLength, " words: " + wordCount, " avgLength: " + avgWordLength];
  console.log("string:", string);
  console.log("text:", text);
  console.log("params:", params);

res.write(`${results}`);
res.end('\n');
}