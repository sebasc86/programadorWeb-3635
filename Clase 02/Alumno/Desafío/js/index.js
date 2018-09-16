
var gender = prompt('Ingrese su genero: Hombre, Mujer u Otro');
var userYear = prompt('Ingrese su edad');
var userYearParse = parseInt(userYear);

switch(gender) {
	case 'Hombre':
		var message = 'Sr.';
		break;
	case 'Mujer':
		var message = 'Sra.';
		break;
	case 'Otro':
		var message = 'Sx'
		break;
	default:
		console.log('Su genero no es valido');
		break;	
}

if( userYearParse < 18 ) {
	console.log(message + ' usted no puede ingresar al sistema')
} else {
	console.log(message + ' usted puede ingresar al sistema')
}
