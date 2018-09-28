console.log('init.app')

var inputEmailNode = $('#email')
console.log(inputEmailNode)

inputEmailNode.on('blur', validateEmail)

function validateEmail(event) {

  var inputNode = $(this)
  var value = inputNode.val()
  
  if (!value || value.indexOf('@') === -1) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
    
  } else if (!value || value.indexOf('.') === -1) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
    
  } else {
    inputNode.addClass('is-valid')
    inputNode.removeClass('is-invalid')
    
  }
}  