console.log('init.app')

inputName = document.getElementById('firstName')

inputName.onblur = validateInput

function validateInput(event) {
  input = event.target
  inputValue = input.value
  console.log(inputValue)
  if (!!inputValue) {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
  } else {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
  }
}