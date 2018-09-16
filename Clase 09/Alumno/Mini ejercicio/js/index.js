console.log('init.app')




var submitButton = document.getElementById('button')


submitButton.onclick = checkAge

function checkAge(event) {

  var nodeAge = document.getElementById('age')

  if (nodeAge.value < 18) {
    console.log('Usted es menor de edad, tiene ' + nodeAge.value + ' años')
  } else {
    console.log('Usted puede ingresar, tiene ' + nodeAge.value + ' años')
  }
}