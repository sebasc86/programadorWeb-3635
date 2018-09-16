console.log('init.app')

do {
  var userOperation = prompt('Que quiere hacer Sumar, Restar, Multiplicar o Dividir')
  switch (userOperation) {
    case 'Sumar':
    case 'sumar':
    case 'Suma' :
    case 'suma':
      userOperation = 'Suma'
      break
    case 'Restar':
    case 'restar':
    case 'Resta' :
    case 'resta':
      userOperation = 'Resta'
      break
    case 'Multiplicar':
    case 'multiplicar':
    case 'Multiplicacion' :
    case 'multiplicacion':
      userOperation = 'Multiplicacion'
      break
    case 'Dividir':
    case 'dividir':
    case 'Division' :
    case 'division':
      userOperation = 'Division'
      break
    default:
      userOperation = null
      break
  }
} while (userOperation === null)
  

var numberResult
var userAdd = prompt('Ingresar 1er numero');

do { 
   var userAdd2 = prompt('Ingresar 2do numero');
} while (userOperation === 'Division' && userAdd2 === '0' )

userAddParse = parseInt(userAdd);
userAddParse2 = parseInt(userAdd2);


switch(userOperation) {
  case 'Suma':
    numberResult = userAddParse + userAddParse2
    break
  case 'Resta':
    numberResult = userAddParse - userAddParse2
    break
  case 'Multiplicacion':
    numberResult = userAddParse * userAddParse2
    break
  case 'Division':
    numberResult = userAddParse / userAddParse2
    break
  default:
    numberResult = null
    break
}

console.log('Su operacion matematica es la ' + userOperation + ' y el resultado es: ' + numberResult)
