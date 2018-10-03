$(document).ready(function () {
  console.log('init.app')

  $('.btn').click(function () {
    var buttonParentParent = $(this).parent().parent()
    var parentId = buttonParentParent.attr('id')
    console.log(parentId)
    removeElementWithAnimation(parentId)
  })

  function removeElementWithAnimation (id) {
    $('#' + id).click(function () {
      $(this).fadeOut(1000, function () {
        $(this).remove()
      })
    })
  }
})
