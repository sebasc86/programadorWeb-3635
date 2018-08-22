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
  


var userAdd = prompt('Ingresar 1er numero');

do { 
   var userAdd2 = prompt('Ingresar 2do numero');
} while (userOperation === 'Division' && userAdd2 === '0' )




if(userOperation === 'Suma') {
  userAddParse = parseInt(userAdd);
  userAddParse2 = parseInt(userAdd2);
  console.log('Su Suma es = ' + (userAddParse + userAddParse2))
} else if (userOperation === 'Resta') {
  console.log('Su Resta es = ' + (userAdd - userAdd2))
} else if (userOperation === 'Multiplicacion') {
  console.log('Su Multiplicacion es = ' + (userAdd * userAdd2))
} else if (userOperation === 'Division') {
  console.log('Su Division es = ' + (userAdd / userAdd2))
} else {
  console.log('No existe operacion')
}
