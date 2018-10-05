$(document).ready(function () {
  console.log('Init app')

  var people5 = 'https://swapi.co/api/people/5/'

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  getData(people5, showPeople)

  function showPeople (error, data) {
    if (error) {
      console.log('Falló algo', error)
    } else {
      console.log('ok los peoples son:', data)
    }
  }
})
