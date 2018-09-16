console.log('init.app')

var numbers = [1, 2, 3, 4, 5]

function deleteElement(index, array) {
  if (Array.isArray(array)) {
    numbers2 = numbers.slice();
    numbers2.splice(index, 1)
    return numbers2
  }
}

var numbers3 = deleteElement(2, numbers)
console.log(numbers2)

var numbers4 = deleteElement(1, numbers)
console.log(numbers3)