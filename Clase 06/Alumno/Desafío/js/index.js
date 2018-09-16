console.log('init.app')


//Declaro la funcion
function includesText(strSearch, strContent) {


	//Si alguno de los dos no es un string ingreso al if corto y devuelvo false.
	if (typeof strSearch !== 'string' || typeof strContent !== 'string') {
		return false
	}

	//declaro las variables para almacenar el nuevo string pasado en Mayúscula
	strSearch = strSearch.toUpperCase()
	strContent = strContent.toUpperCase()

	//Declaro el indexOf para verificar el texto buscado esta dentro del contenido declarado 
	strResult = strContent.indexOf(strSearch)

	// Si es diferente a -1 devuelvo True, si no false.
	if (strResult !== -1) {
		return true
	} else {
		return false
	}

}


// probando funcion con parametros manuales segun ejercicio.

var strCompare = includesText('Pa', 'Patricia')
console.log(strCompare) // Deberá devolver true segun enunciado

var strCompare = includesText('Patricia', 'Pa')
console.log(strCompare) // Deberá devolver false segun enunciado

var strCompare = includesText(2, 'Pa')
console.log(strCompare) // Deberá devolver false segun enunciado

var strCompare = includesText(3, '3')
console.log(strCompare) // Deberá devolver false segun enunciado