console.log('init.app')

var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createNode(object) {

  var id = object.dni
  var fullName = object.firstName + " " + object.lastName
  var dni = 'DNI: ' + id
  var email = 'Email: ' + object.email


  var liNode = document.createElement('li')
  liNode.id = id
  liNode.className = 'list-group-item'
  
  /* Forma Larga
  var h1Node = document.createElement('h1')
  h1Node.innerHTML = fullName 
  var h3Node = document.createElement('h3')
  h3Node.innerHTML = dni
  var pNode = document.createElement('p')
  pNode.innerHTML = email 
  liNode.appendChild(liNodeId)
  liNode.appendChild(h3Node)
  liNode.appendChild(pNode) 
  */

  //Forma corta
  liNode.innerHTML =  '<h1>' + fullName + '</h1>' +  '<h1>' + dni +'</h3>' + '<p>' + email + '</p>'

  
  return liNode

}

console.log(createNode(student))

