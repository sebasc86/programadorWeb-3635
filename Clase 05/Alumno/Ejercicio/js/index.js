console.log('init.app')

function Car(model, brand, year) {
  this.model = model
  this.brand = brand
  this.year = year

  var id = Math.random()

  this.getId = function () {
    return id
  }

  this.getCarName = function () {
    return ('El modelo del auto es: ' + model + '. La Marca del auto es: ' + brand + '. El año de fabricacion es: ' + year)
  }

}

var cars = [{
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]


var car = new Car('Suran', 'volskwagen', 2015)

console.log(car.getCarName());

var car2 = new Car('Audi TT', 'Audi', 2017)

console.log(car2.getCarName());