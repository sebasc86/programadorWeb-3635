import { getData } from '../utils/ajax'

function peopleController () {
  console.log('Se cargo controller de people')
  var tableBodyNode = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  getData('https://swapi.co/api/people/', showPeople)

  function showPeople (error, data) {
    if (error) {
      console.log('Falló algo ', error)
    } else {
      console.log('Ok los personajes son:', data)
      var people = data.results

      var person

      for (var i = 0; i < people.length; i++) {
        person = people[i]
        var url = person.url
        url = url.replace('https://swapi.co/api/people/', '')

        var id = url.replace('/', '')

        console.log(id)

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
            '</td><td><button type="button" class="btn btn-success">Guardar</button></td></tr>'
        )
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

function genderTranslate (gender) {
  switch (gender) {
    case 'male':
      return 'Masculino'
      break
    case 'female':
      return 'Femenino'
      break
    case 'n/a':
      return 'n/a'
      break
    case 'hermaphrodite':
      return 'hermafrodita'
      break
    default:
      return gender
      break
  }
}

var TRANSLATES = {
  ES: {
    blue: 'Azules',
    yellow: 'Amarillos',
    red: 'Rojos'
  },
  EN: {
    blue: 'Blue',
    yellow: 'Yellow',
    red: 'Red'
  }
}

function eyeTranslate (lang, eyeColor) {
  return TRANSLATES[lang][eyeColor] || eyeColor
}

export default peopleController
