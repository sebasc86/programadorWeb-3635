console.log('init.app')

var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']

function setLocalList(key, arrayList) {
  if (Array.isArray(arrayList) && typeof key === 'string') {
    var arrayToJson = JSON.stringify(arrayList)
    localStorage.setItem(key, arrayToJson)
  }
}

setLocalList('names', testList)