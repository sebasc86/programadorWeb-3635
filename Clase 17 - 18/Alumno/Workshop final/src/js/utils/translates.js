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

function eyeTranslate (lang, eyeColor) {
  return TRANSLATES[lang][eyeColor] || eyeColor
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

export { genderTranslate, eyeTranslate }
