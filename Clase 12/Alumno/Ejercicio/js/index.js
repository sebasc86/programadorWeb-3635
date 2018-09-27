var squereNodes = $('.square')

var bool = false
var i = 0
squereNodes.click(circleOrCross)

function circleOrCross () {
  var node = $(this)
  var nodeCircle = node.hasClass('circle')
  var nodeCross = node.hasClass('cross')
  console.log(i)
  if (!nodeCircle && !nodeCross) {
    if (bool === false) {
      node.addClass('cross')
      bool = true
    } else {
      node.addClass('circle')
      bool = false
    }
    i++
  }

  if (i > 9) {
    squereNodes.removeClass('circle')
    squereNodes.removeClass('cross')
    i = 0
  }
}
