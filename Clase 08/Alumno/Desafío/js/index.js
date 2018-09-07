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
  var h1Node = document.createElement('h1')
  h1Node.innerHTML = fullName
  var h3Node = document.createElement('h3')
  h3Node.innerHTML = dni
  var pNode = document.createElement('p')
  pNode.innerHTML = email

  liNode.appendChild(h1Node)
  liNode.appendChild(h3Node)
  liNode.appendChild(pNode)

  return liNode

}

console.log(createNode(student))

// function Student(firstName, lastName, dni, email) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.dni = dni
//   this.email = email

//   var id = Math.random()

//   this.getId = function () {
//     return id
//   }

//   this.getFullName = function () {
//     if (firstName && lastName) {
//       return (firstName + ' ' + lastName)
//     } else if (!firstName && lastName) {
//       return (lastName)
//     } else if (firstName && !lastName) {
//       return (firstName)
//     } else if (!firstName && !lastName) {
//       return ('')
//     }
//   }

// }