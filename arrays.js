var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  const newArray = [...chocolateBars, "twix"]
  console.log(newArray)
}
console.log(addElementToEndOfArray([chocolate], "twix"))

function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element)
}
console.log(destructivelyAddElementToEndOfArray([chocolateBars], "twix"))

function accessElementInArray (array, index) {
  var city = " is the best chocolate"
  const newArray = [chocolateBars[0], city]
  console.log(newArray)
}
console.log(accessElementInArray(chocolateBars[0], city))

var accessElementInArray = " is the best chocolate";
console.log(chocolateBars[0] + accessElementInArray)