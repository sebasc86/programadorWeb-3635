console.log('init.app')

inputEmail = document.getElementById('email')

inputEmail.onblur = validateEmail

submitButton = document.getElementById('button')


//regex

// function validateEmail(event) {
//   input = event.target
//   inputValue = input.value
//   regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   regexTest = regexEmail.test(inputValue)
//   if (!!regexTest) {
//     input.classList.add('is-valid')
//     input.classList.remove('is-invalid')
//   } else {
//     input.classList.remove('is-valid')
//     input.classList.add('is-invalid')
//   }
// }


//indexOf

function validateEmail(event) {
  input = event.target
  inputValue = input.value

  if (!!inputValue && inputValue.indexOf('@') === -1) {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
    submitButton.disabled = true
  } else if (!!inputValue && inputValue.indexOf('.') === -1) {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
    submitButton.disabled = true
  } else {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
    submitButton.disabled = false
  }

}