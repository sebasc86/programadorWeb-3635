console.log('init.app')

var students = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]


function Student(firstName, lastName, dni, email) {
  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  var id = Math.random()

  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    if (firstName && lastName) {
      return (firstName + ' ' + lastName)
    } else if (!firstName && lastName) {
      return (lastName)
    } else if (firstName && !lastName) {
      return (firstName)
    } else if (!firstName && !lastName) {
      return ('')
    }
  }

}


var student = new Student('juan', 'perez', 11202030, 'prueba@gmail.com')

console.log(student.getId())
console.log(student.getFullName())

var student2 = new Student('Ana', '', 11202030, 'prueba@gmail.com')
console.log(student2.getId())
console.log(student2.getFullName())

var student3 = new Student('', 'Fernandez', 11202030, 'prueba@gmail.com')
console.log(student3.getId())
console.log(student3.getFullName())

var student4 = new Student('', '', 11202030, 'prueba@gmail.com')
console.log(student4.getId())
console.log(student4.getFullName())