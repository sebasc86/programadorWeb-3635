console.log('init.app')

var KEY_LOCAL = 'students'

var studentsList = getLocalList(KEY_LOCAL)

var mainListNode = document.getElementById('mainList')


inputNameNode = document.getElementById('firstName')

inputNameNode.onblur = validateInput

inputDniNode = document.getElementById('dni')

inputDniNode.onblur = validateDni

var addStudentButtonNode = document.getElementById('addStudentButton')

addStudentButtonNode.onclick = studentAdd

var deleteButtonNode = document.getElementById('deleteStudentButton')

deleteButtonNode.onclick = deleteStudent



//Elimina Studiante

function deleteStudent() {
  
  var deleteDniNode = document.getElementById('deleteDni')
  inputValueNode = deleteDniNode.value  
  var valueExist = searchDniStudent(inputValueNode, studentsList)
  if(valueExist != -1) {
    studentsList.splice(valueExist, 1)
    setLocalList(KEY_LOCAL, studentsList)
    mainListNode.removeChild(mainListNode.childNodes[valueExist])
  }

  deleteDniNode.value = ''
  
}


//Agrega Estudiante

function studentAdd() {
  firstNameValue = inputNameNode.value
  dniValue = inputDniNode.value

  var student = {
    firstName: firstNameValue,
    dni: dniValue
  }

  studentsList.push(student)

  setLocalList(KEY_LOCAL, studentsList)

  student = createNode(student)

  mainListNode.appendChild(student)

  inputNameNode.value = ''
  inputDniNode.value = ''
  addStudentButtonNode.disabled = true
  inputNameNode.classList.remove('is-valid')
  inputDniNode.classList.remove('is-valid')

}

//Valida Boton Submit

function validateSubmitButton () {
  var addStudentButtonNode = document.getElementById('addStudentButton')
  var inputFields = document.getElementsByClassName('is-valid')

  if (inputFields.length === 2) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

//Valida Nombre

function validateInput(event) {
  input = event.target
  inputValue = input.value

  if (!!inputValue) {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
    
  } else {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
    
  }
  validateSubmitButton ()
}


//Valida DNI

function validateDni(event) {
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
  validateSubmitButton ()

}

//BuscaStudiante

function searchDniStudent(dni, studentsList) {
  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (dni === student.dni) {
      return i
    }
  }
  return -1
}

//Crea Nodo

function createNode(objStudent) {

  var id = objStudent.dni
  var fullName = objStudent.firstName + " " + objStudent.lastName
  var dni = 'DNI: ' + id
  var email = 'Email: ' + objStudent.email


  var liNode = document.createElement('li')
  liNode.id = id
  liNode.className = 'list-group-item'

  liNode.innerHTML = '<h1>' + fullName + '</h1>' + '<h3>' + dni + '</h3>' + '<p>' + email + '</p>'


  return liNode

}


//busca lista

function getLocalList(key) {
  if (typeof key === 'string') {
    var list = localStorage.getItem(key)
    if (!list) {
      var arrayEmpty = []
      return arrayEmpty
    }
    var listParse = JSON.parse(list)
    return listParse;
  }
}

//Setea lista

function setLocalList(key, arrayList) {
  if (Array.isArray(arrayList) && typeof key === 'string') {
    var arrayToJson = JSON.stringify(arrayList)
    localStorage.setItem(key, arrayToJson)
  }
}

//Apendea//Muestra lista Lista
for (var i = 0; i < studentsList.length; i++) {
  student = createNode(studentsList[i])
  mainListNode.appendChild(student)
}