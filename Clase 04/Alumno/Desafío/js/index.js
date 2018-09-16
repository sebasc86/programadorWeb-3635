console.log('init.app')

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Perez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Marmol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]


var userSearch = prompt('Buscar el usuario')
var numberUser

function numberUserArray(objectStudents) {

  for (var i = 0; i < studentsList.length; i++) {

    var student = studentsList[i]

    if(student.firstName === userSearch || student.lastName === userSearch) {
      numberUser = i 
      return numberUser
    }
     
  }

  return -1

}

var numerUserPosition = numberUserArray(studentsList)
console.log(numerUserPosition);

