$(document).ready(function () {
  console.log('init.app')

  var mainList = $('#mainList')
  var showMoreButton = $('#showMore')
  var searchNode = $('#search')
  var urlApiSearch = 'https://swapi.co/api/people/?search='
  var searchNodeValue = ''
  var dataNext = ''

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  getData(urlApiSearch, showPeople)

  searchNode.on('blur', function () {
    searchNodeValue = searchNode.val()
    getData(urlApiSearch + searchNodeValue, showPeople)
  })

  showMoreButton.on('click', function () {
    if (dataNext) {
      getData(dataNext, showPeople)
    }
  })

  function showPeople (error, data) {
    if (error) {
      console.log('fallo', error)
    } else {
      console.log('ok', data)
      mainList.empty()
      var peoples = data.results
      dataNext = data.next
      for (var i = 0; i < peoples.length; i++) {
        var people = peoples[i]
        mainList.append('<li class="list-group-item">' + people.name + '</li>')
      }
    }

    if (data.next) {
      showMoreButton.attr('disabled', false)
    } else {
      showMoreButton.attr('disabled', true)
    }
  }
})
