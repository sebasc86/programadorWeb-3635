$(document).ready(function () {

  console.log('init.app')

  var firstName = $('#firstName')

  firstName.one('blur', validateInput)

  var comments = $('#comments')

  comments.one('blur', validateInput)

  var inputEmailNode = $('#email')

  inputEmailNode.on('blur', validateEmail)

  function validateSubmitButton () {
    if ($('.is-valid').length >= 3) {
      $('#submitButton').removeAttr('disabled')
    } else {
      $('#submitButton').attr('disabled', true)
    }
  }

  function validateEmail (event) {
    var inputNode = $(this)
    var value = inputNode.val()
    value = $.trim(value)
    var errorLabel = ''
    var parentNode = inputNode.parent()  
    inputNode.next().remove()

    if (!value) {
     
      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
      errorLabel = '*El Campo Requerido'
      parentNode.append('<div style="color:red">' + errorLabel + '</div>')

    } else if (value.indexOf('@') === -1) {
          inputNode.removeClass('is-valid')
          inputNode.addClass('is-invalid')
          errorLabel = 'Debe contener un arroba @' 
          parentNode.append('<div style="color:red">' + errorLabel + '</div>')

    } else if (value.indexOf('.') === -1) {
          inputNode.removeClass('is-valid')
          inputNode.addClass('is-invalid')
          errorLabel = 'Debe contener un punto "."' 
          parentNode.append('<div style="color:red">' + errorLabel + '</div>')

    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputEmailNode.on('input', validateEmail)
    }
    validateSubmitButton()
  }

  

  function validateInput (event) {
    var inputNode = $(this)
    var value = inputNode.val()
    value = $.trim(value)
    var errorLabel = ''

    inputNode.next().remove()

    if (!value) {
      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
      errorLabel = '*El campo es requerido'
      inputNode.parent().append('<div style="color:red">' + errorLabel + '</div>')
    } else {
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateInput)
    }

    validateSubmitButton()
  }
})