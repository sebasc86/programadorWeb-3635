$(document).ready(function () {
  console.log('init.app')

  $('.btn').on('click', function () {
    $(this).parent().parent().parent().slideUp(1000, function () {
      $(this).remove()
    })
  })
})
