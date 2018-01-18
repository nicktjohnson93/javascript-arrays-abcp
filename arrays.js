var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  const newArray = ["twix", ...chocolateBars]
console.log(newArray)
}
console.log(addElementToBeginningOfArray([chocolateBars], "twix"))

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element)
}
console.log(destructivelyAddElementToBeginningOfArray([chcolateBars], "twix"))

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