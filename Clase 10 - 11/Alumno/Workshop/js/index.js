console.log('init.app')

var KEY_LOCAL = 'students'

inputName = document.getElementById('firstName')

inputName.onblur = validateInput

inputDni = document.getElementById('dni')

inputDni.onblur = validateDni







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
}

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

  // if (!!inputValue) {
  //   input.classList.add('is-valid')
  //   input.classList.remove('is-invalid')
  // } else {
  //   input.classList.remove('is-valid')
  //   input.classList.add('is-invalid')
  // }
}

function searchDniStudent(dni, studentsList) {
  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (dni === student.dni) {
      return i
    }
  }
  return -1
}

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