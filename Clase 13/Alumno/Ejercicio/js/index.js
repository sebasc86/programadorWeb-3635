console.log('init.app')

var counter = 0

$(window).keydown(function (event) {
  switch (event.which) {
    case 13:
      counter = 0
      $('#counter').html(counter)
      break
    case 38:
      counter++
      $('#counter').html(counter)
      console.log(counter)
      break
    case 40:
      counter--
      $('#counter').html(counter)
      console.log(counter)
      break
  }
})
