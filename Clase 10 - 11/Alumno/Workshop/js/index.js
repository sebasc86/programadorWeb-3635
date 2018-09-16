console.log('init.app')

var KEY_LOCAL = 'students'

var studentsList = getLocalList(KEY_LOCAL)

var mainListNode = document.getElementById('mainList')

var inputNameNode = document.getElementById('firstName')

inputNameNode.onblur = validateName

var inputLastNameNode = document.getElementById('lastName')

inputLastNameNode.onblur = validateLastName

var inputDniNode = document.getElementById('dni')

inputDniNode.onblur = validateDni

var inputEmailNode = document.getElementById('email')

inputEmailNode.onblur = validateEmail

var addStudentButtonNode = document.getElementById('addStudentButton')

addStudentButtonNode.onclick = studentAdd

var deleteButtonNode = document.getElementById('deleteStudentButton')

deleteButtonNode.onclick = deleteStudent

var searchButtonNode = document.getElementById('searchStudentButton')

searchButtonNode.onclick = searchStudent

//Muestra la lista al inicio del programa

viewListStudent()

//Busca Estudiante

function searchStudent () {
  var searchName = document.getElementById('searchText')

  inputSearchNode = searchName.value.trim()

  var positionStudentArray = searchInArrayStudents(
    inputSearchNode,
    studentsList
  )

  if (!!inputSearchNode && positionStudentArray.length > 0) {
    mainListNode.innerHTML = ''
    for (var i = 0; i < positionStudentArray.length; i++) {
      positionStudentNumber = positionStudentArray[i]
      student = createNode(studentsList[positionStudentNumber])
      mainListNode.appendChild(student)
    }
  }

  searchName.value = ''
}

//Elimina Studiante

function deleteStudent () {
  var deleteDniNode = document.getElementById('deleteDni')
  inputValueNode = deleteDniNode.value
  var valueExist = searchDniStudent(inputValueNode, studentsList)
  var dniExist = document.getElementById(inputValueNode)
  if (valueExist != -1 && !!dniExist) {
    mainListNode.removeChild(dniExist)
    studentsList.splice(valueExist, 1)
    setLocalList(KEY_LOCAL, studentsList)
  }
}

//Agrega Estudiante

function studentAdd () {
  firstNameValue = inputNameNode.value
  lastNameValue = inputLastNameNode.value
  emailNodeValue = inputEmailNode.value
  dniNodeValue = inputDniNode.value

  var student = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    dni: dniNodeValue,
    email: emailNodeValue
  }

  studentsList.push(student)

  setLocalList(KEY_LOCAL, studentsList)

  student = createNode(student)

  mainListNode.appendChild(student)

  inputNameNode.value = ''
  inputLastNameNode.value = ''
  inputDniNode.value = ''
  inputEmailNode.value = ''
  addStudentButtonNode.disabled = true
  inputNameNode.classList.remove('is-valid')
  inputDniNode.classList.remove('is-valid')
  inputEmailNode.classList.remove('is-valid')
}

//Valida Boton Submit

function validateSubmitButton () {
  var addStudentButtonNode = document.getElementById('addStudentButton')
  var inputFields = document.getElementsByClassName('is-valid')

  if (inputFields.length === 3) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

//validate Email

function validateEmail (event) {
  input = event.target
  inputValue = input.value

  if (!inputValue || inputValue.indexOf('@') === -1) {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
  } else if (!inputValue || inputValue.indexOf('.') === -1) {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
  } else {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
  }
  validateSubmitButton()
}

//valida hace un trim de lastname setea '' por defecto si no ingresa nada

function validateLastName (event) {
  input = event.target
  inputValue = input.value.trim()
  inputParse = parseInt(inputValue)

  if (!inputValue || !!inputParse) {
    inputLastNameNode.value = ''
  }
}

//Valida Nombre

function validateName (event) {
  input = event.target
  inputValue = input.value

  if (!!inputValue) {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
  } else {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
  }
  validateSubmitButton()
}

//Valida DNI

function validateDni (event) {
  var listLocal = getLocalList(KEY_LOCAL)

  input = event.target
  inputValue = input.value
  parsedValue = parseInt(inputValue, 10)

  var valueExist = searchDniStudent(inputValue, listLocal)

  if (!isNaN(parsedValue) && valueExist === -1 && inputValue > 0) {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
  } else {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
  }
  validateSubmitButton()
}

//Busca estudiante por Array necesita funcion IncludesText

function searchInArrayStudents (textStr, arraySearch) {
  var studentNumberArray = []
  for (var i = 0; i < arraySearch.length; i++) {
    var studentLastName = arraySearch[i].lastName
    var studentFirstName = arraySearch[i].firstName

    var comparisonFirsName = includesText(textStr, studentFirstName)

    var comparisonLastName = includesText(textStr, studentLastName)

    if (!!comparisonFirsName || !!comparisonLastName) {
      studentNumberArray.push(i)
    }
  }

  return studentNumberArray
}

// Busca por texto

function includesText (strSearch, strContent) {
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

//BuscaStudiante por DNI

function searchDniStudent (dni, studentsList) {
  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (dni === student.dni) {
      return i
    }
  }
  return -1
}

//Crea Nodo

function createNode (objStudent) {
  var id = objStudent.dni
  var fullName = objStudent.firstName + ' ' + objStudent.lastName
  var dni = 'DNI: ' + id
  var email = 'Email: ' + objStudent.email

  var liNode = document.createElement('li')
  liNode.id = id
  liNode.className = 'list-group-item'

  liNode.innerHTML =
    '<h1>' +
    fullName +
    '</h1>' +
    '<h3>' +
    dni +
    '</h3>' +
    '<p>' +
    email +
    '</p>'

  return liNode
}

//busca lista

function getLocalList (key) {
  if (typeof key === 'string') {
    var list = localStorage.getItem(key)
    if (!list) {
      var arrayEmpty = []
      return arrayEmpty
    }
    var listParse = JSON.parse(list)
    return listParse
  }
}

//Setea lista

function setLocalList (key, arrayList) {
  if (Array.isArray(arrayList) && typeof key === 'string') {
    var arrayToJson = JSON.stringify(arrayList)
    localStorage.setItem(key, arrayToJson)
  }
}

//Apendea//Muestra lista Lista

function viewListStudent () {
  for (var i = 0; i < studentsList.length; i++) {
    student = createNode(studentsList[i])
    mainListNode.appendChild(student)
  }
}
