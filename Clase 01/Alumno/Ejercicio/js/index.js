var name = prompt('Ingresa tu nombre');
console.log('Hola '+name+'!')

var number = 5;

var numberUser = prompt('Ingresa un numero');

var numberUserParse = parseFloat(numberUser, 10);

console.log('Le sumamos ' + number + ' da un total = ' + (number + numberUserParse));

var number2 = 20;

var numberUser2 = prompt('Ingresa otro numero menor a 20');

var numberUserParse2 = parseFloat(numberUser2, 10);

console.log('Le restamos ' + number2 + ' da un total = ' + (number2 - numberUserParse2));

var numberUser3 = prompt('Ingresa un tercer numero');
var numberUserParse3 = parseFloat(numberUser3, 10);
var numberUser4 = prompt('Ingresa un cuarto numero');
var numberUserParse4 = parseFloat(numberUser4, 10);
var sumaTotal = numberUserParse3 + numberUserParse4;
console.log('Sumamos los dos = ' + sumaTotal) ;
















