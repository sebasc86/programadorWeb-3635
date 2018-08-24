console.log('init.app')

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
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
var userNull

function numberUserArray(objectStudents) {

  for (var i = 0; i < studentsList.length; i++) {

    if(studentsList[i]['firstName'] === userSearch || studentsList[i]['lastName'] === userSearch) {
      numberUser = i 
    } 
  }

  if(numberUser === undefined) {
    userNull = -1;
    return userNull
  } else {
    return numberUser
  }

}

var numerUserPosition = numberUserArray(studentsList)
console.log(numerUserPosition);

