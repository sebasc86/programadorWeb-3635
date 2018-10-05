$(document).ready(function () {
  console.log('init.app')

  var mainList = $('#mainList')
  var showMoreButton = $('#showMore')

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  getData('https://swapi.co/api/people/', showPeople)

  function showPeople (error, data) {
    if (error) {
      console.log('fallo', error)
    } else {
      console.log('ok', data)
      var peoples = data.results

      for (var i = 0; i < peoples.length; i++) {
        var people = peoples[i]
        mainList.append('<li class="list-group-item">' + people.name + '</li>')
      }

      if (data.next) {
        showMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        showMoreButton.attr('disabled', true)
      }
    }
  }
})
