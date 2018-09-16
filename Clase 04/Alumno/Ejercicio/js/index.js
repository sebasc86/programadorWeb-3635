console.log('init.app')

var examResults = [ 7, 5, 6, 4, 3, 2, 8, 13 ]
var arrayLength = examResults.length

function averageArray(arrayNumbers) {

  var examResultAdd = 0

  for (var i = 0; i < arrayLength; i++) {
      examResultAdd += examResults[i];
  }

  var averageNumbers = examResultAdd / arrayLength

  return averageNumbers;

}


var resultFinal = averageArray(examResults);
console.log(resultFinal);