import { getData } from '../utils/ajax'
import { getLocalList, setLocalList } from '../utils/localStorage'
import { eyeTranslate, genderTranslate } from '../utils/translates'
import { searchPeopleIndexByUrl } from '../utils/search'

function peopleController () {
  console.log('Se cargo controller de people')

  var apiResults = []

  var localPeople = getLocalList('peopleList')

  var tableBodyNode = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  getData('https://swapi.co/api/people/', showPeople)

  function showPeople (error, data) {
    if (error) {
      console.log('Falló algo ', error)
    } else {
      console.log('Ok los personajes son:', data)
      var people = data.results

      if (data.results) {
        apiResults = apiResults.concat(data.results)
        //concat concatena un resultado con otro, ejemplo este concatena un array con otro array osea
        // que es como que lo agrega.
        console.log(apiResults)
        //apiResults seria como nuestra fuente de verdad, los guarda en memoria lo que trae de la api.
      }

      var person

      for (var i = 0; i < people.length; i++) {
        person = people[i]
        var url = person.url

        var localIndex = searchPeopleIndexByUrl(person.url, localPeople)

        var addButton

        url = url.replace('https://swapi.co/api/people/', '')

        var id = url.replace('/', '')

        if (localIndex === -1) {
          addButton =
            '<button id="button' +
            id +
            '" type="button" class="btn btn-success">Guardar</button>'
        } else {
          addButton = ''
        }

        tableBodyNode.append(
          '<tr id="' +
            id +
            '"><th scope="row">' +
            id +
            '</th><td>' +
            person.name +
            '</td><td>' +
            genderTranslate(person.gender) +
            '</td><td>' +
            person.height +
            ' Cm' +
            '</td><td>' +
            person.mass +
            ' Kg' +
            '</td><td style="text-align: center">' +
            eyeTranslate('ES', person.eye_color) +
            '</td><td>' +
            addButton +
            '</td></tr>'
        )

        $('#button' + id).click(function () {
          var button = $(this)

          var buttonId = button.attr('id')

          var id = buttonId.replace('button', '')

          var newUrl = 'https://swapi.co/api/people/' + id + '/'

          var index = searchPeopleIndexByUrl(newUrl, apiResults)
          console.log(index)

          if (index !== -1) {
            var personInfo = apiResults[index]
            localPeople.push(personInfo)

            setLocalList('peopleList', localPeople)

            button.remove()

            console.log(personInfo)
          }
        })
      }
      if (data.next) {
        seeMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        seeMoreButton.remove()
      }
    }
  }
}

export default peopleController
