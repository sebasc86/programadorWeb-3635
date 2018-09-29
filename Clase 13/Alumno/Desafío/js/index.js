console.log('init.app')

var firstName = $('#firstName')

firstName.one('blur', validateName)

var comments = $('#comments')

comments.one('blur', validateComments)

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

  if (!value) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')

    if ($('#rq-email').length === 0) {
      inputNode
        .parent()
        .append(
          '<div id="rq-email" style="color: red">*El campo es requerido</div>'
        )
    }

    $('#rq-at').remove()
    $('#rq-point').remove()
  } else if (value.indexOf('@') === -1) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')

    if ($('#rq-at').length === 0) {
      inputNode
        .parent()
        .append('<div id="rq-at" style="color: red">*falta un arroba</div>')
    }

    $('#rq-email').remove()
    $('#rq-point').remove()
  } else if (value.indexOf('.') === -1) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')

    if ($('#rq-point').length === 0) {
      inputNode
        .parent()
        .append('<div id="rq-point" style="color: red">*falta un punto</div>')
    }

    $('#rq-at').remove()
    $('#rq-email').remove()
  } else {
    inputNode.addClass('is-valid')
    inputNode.removeClass('is-invalid')
    $('#rq-email').remove()
    $('#rq-at').remove()
    $('#rq-point').remove()
  }

  if (event.type === 'blur') {
    inputEmailNode.on('input', validateEmail)
  }
  validateSubmitButton()
}

function validateComments (event) {
  var inputCommentsNode = $(this)
  var valueInputComments = inputCommentsNode.val()
  valueInputComments = $.trim(valueInputComments)

  if (!valueInputComments) {
    inputCommentsNode.removeClass('is-valid')
    inputCommentsNode.addClass('is-invalid')
    inputCommentsNode

    if ($('#rq-comments').length === 0) {
      inputCommentsNode
        .parent()
        .append(
          '<div id="rq-comments" style="color: red">*El campo es requerido</div>'
        )
    }
    $('#min-length').remove()
  } else if (valueInputComments.length < 8) {
    inputCommentsNode.removeClass('is-valid')
    inputCommentsNode.addClass('is-invalid')

    if ($('#min-length').length === 0) {
      inputCommentsNode
        .parent()
        .append(
          '<div id="min-length" style="color: red">*minimo de letras 8</div>'
        )
    }

    $('#rq-comments').remove()
  } else {
    inputCommentsNode.removeClass('is-invalid')
    inputCommentsNode.addClass('is-valid')
    $('#rq-comments').remove()
    $('#min-length').remove()
  }

  if (event.type === 'blur') {
    inputCommentsNode.on('input', validateComments)
  }
  validateSubmitButton()
}

function validateName (event) {
  var inputNode = $(this)

  var value = inputNode.val()
  value = $.trim(value)

  if (!value) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')

    if ($('#rq-name').length === 0) {
      inputNode
        .parent()
        .append(
          '<div id="rq-name" style="color: red">*El campo es requerido</div>'
        )
    }
  } else {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
    $('#rq-name').remove()
  }

  if (event.type === 'blur') {
    inputNode.on('input', validateName)
  }

  validateSubmitButton()
}
