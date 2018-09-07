console.log('init.app')

// var userTitle = prompt('Ingresa un Titulo')
// var userText = prompt('ingresa un texto')

// var title = document.getElementById('title')
// var text = document.getElementById('text')
// title.innerHTML = userTitle
// text.innerHTML = userText

var texts = ['Ed', 'Edd', 'Eddy']

var listNode = document.getElementById('mainList')

for (var i = 0; i < texts.length; i++) {
  var textLi = texts[i]
  nodeLi = document.createElement('li')
  nodeLi.className = 'list-group-item'
  nodeLi.innerHTML = textLi
  listNode.appendChild(nodeLi)

}