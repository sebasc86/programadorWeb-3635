console.log('init.app')

var firstNameNode = $('#firstName')

firstNameNode.blur(validateName)

function validateName (event) {
  var node = $(event.target)
  var nodeValue = node.val()

  var liNodes = $('.list-group-item')
  liNodes.html(nodeValue)
}
