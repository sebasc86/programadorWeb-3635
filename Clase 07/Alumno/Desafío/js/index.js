console.log('init.app')

function getLocalList(key) {
  if (typeof key === 'string') {
    var list = localStorage.getItem(key)
    if (!list) {
      var arrayEmpty = []
      return arrayEmpty
    }
    var listParse = JSON.parse(list)
    return listParse;
  }
}

var studentsList = getLocalList('noexiste') //nombre cualquiera da un array vacio
console.log(studentsList)

var studentsList = getLocalList('names') //nombre del ejercicio anterior
console.log(studentsList)