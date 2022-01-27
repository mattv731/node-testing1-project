/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  let newObj = {}
  for (let prop in obj) {
    newObj[prop] = obj[prop].trim()
  }
  return newObj
  // ✨ implement
}
// const test = {name: '     just me  ', foo: ' await a br', bar: 'aeing aid aa      ie'}
// console.log(trimProperties(test))
// console.log(test)

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  // ✨ implement
 for (let prop in obj) {
   obj[prop] = obj[prop].trim()
 }
 return obj
}
// console.log(trimPropertiesMutation({name: '     just me  ', foo: ' await a br', bar: 'aeing aid aa      ie'}))
/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  let biggestNum = 0
  integers.forEach(num => {
    if (num.integer > biggestNum) {
      biggestNum = num.integer
    } else { return }
  })
  return biggestNum
  // ✨ implement
}
// console.log(findLargestInteger([{integer: 24}, {integer: 14}, {integer: 75}, {integer: 23}]))

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */

  constructor(initialNumber) {
    this.initialNumber = initialNumber
    this.num = initialNumber
    // ✨ initialize whatever properties are needed
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    if (this.num > 0 && this.num !== this.initialNumber ) {
      this.num -= 1
      return this.num + 1
    } else if (this.num === this.initialNumber) {
      this.num -= 1
      return this.initialNumber
    } else {
      return 0
    }
    // ✨ implement
  }
}
//  const counter = new Counter(3)
// console.log(counter.countDown())
// console.log(counter.countDown())
// console.log(counter.countDown())
// console.log(counter.countDown())

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed
    this.season = 'spring'
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    // ✨ implement
    if (this.season === 'summer'){
      this.season = 'fall'
    } else if (this.season === 'fall'){
      this.season = 'winter'
    } else if (this.season === 'winter') {
      this.season = 'spring'
    } else if (this.season === 'spring') {
      this.season = 'summer'
    } else {
      return "invalid season"
    }
    return this.season
  }
}
/** const seasons = new Seasons()
console.log(seasons.next())
console.log(seasons.next())
console.log(seasons.next())
console.log(seasons.next())
console.log(seasons.next()) */

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tankSize = tankSize
    this.tank = tankSize // car initiazes full of gas
    // ✨ initialize whatever other properties are needed
    this.mpg = mpg
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    let usedFuel = 0
    if (distance < (this.mpg * this.tank)) {
      usedFuel = distance/this.mpg
      this.tank -= usedFuel
      return this.odometer += distance
    } else {
      this.odometer += (this.mpg * this.tank)
      const returnStatement  = ("odometer " + this.odometer + " ran out of gas after " + (this.mpg * this.tank) + " miles.")
      this.tank = 0
      return returnStatement
    }
    // ✨ implement
  }
  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
    const attempted = gallons + this.tank
    if (attempted > this.tankSize) {
      return `tank only holds ${this.tankSize}`
    } else if (gallons + this.tank > 0) {
      this.tank += gallons
      return this.tank * this.mpg
    }
    return 
  }
}
// const civic = new Car('civic', 14, 12)
// console.log(civic.drive(100))
// console.log(civic.drive(100))
// console.log(civic.refuel(10))
// console.log(civic.drive(100))
// console.log(civic.drive(100))
// console.log(civic.drive(100))

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  if (number % 2 === 0)
  return true
  else {
    return false
  }
  // ✨ implement
}
// console.log(isEvenNumberAsync(3))

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
