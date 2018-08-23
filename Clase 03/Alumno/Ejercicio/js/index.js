console.log('init.app')

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

var dayOfTheWeek

for (var i = 0; i < daysOfTheWeek.length; i++) {
  dayOfTheWeek = daysOfTheWeek[i];
  console.log(dayOfTheWeek);

  switch (dayOfTheWeek) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
      console.log('Es un dia de semana')
      break
    case 'Miercoles':
      console.log('Es un dia de semana pero esta mal escrito')
      break
    case 'Jueves':
    case 'Viernes':
      console.log('Es un dia de semana')
      break
    
    case 'Sabado':
      console.log('Es fin de semana pero esta mal escrito')
      break
    case 'Sábado':
    case 'Domingo':
      console.log('Es fin de semana')
      break
    default:
      console.log('No es un dia válido')
      break
  }

  
}