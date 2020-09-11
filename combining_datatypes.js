//COMBINING DATATYPES
//1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    colors:['midnight blue', 'razzle dazzle rose', 'electric lime','outer space', 'sunset orange']
}
console.log(crayonBox.colors[3]) //should log outer space
  
//2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
    cap: {
      material: 'plastic',
      color: 'red',
      weight: 3
    }
}
console.log(bottle.cap.color) //should log red
  
//3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = [
    {name: 'Za Pizza', price: 33},
    {name: 'beer', price: 13}, 
    {day: 'Thursday', time: '9:00pm'}
]
console.log(receipt[1].price) //should log 13
  
//4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
const apartmentBuilding = [
    {
      built: 1993,
      doorman: true,
      street: '5th Avenue'
    },
    ['Larry', 'Moe', 'Curly', 'Beavis', 'Lisa Simpson']
]
  
console.log(apartmentBuilding[1][0]) //Should log Larry
console.log(apartmentBuilding[0].doorman) //Extra practice
//Is there a 'best way' to write key-value pairs in objects? Is it okay to write them the way I did in #3 or shoud each pair be a separate line?

//Combine objects, arrays, and functions more than one level deep
//1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value)

const knit = () => {
    return {
      item: 'scarf',
      size: '6 ft',
      color: 'grey',
      material: 'wool'
    }
}
  
console.log(knit().item)
  
//2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
  
const crayonSelector = () => {
    return crayonBox
}
  
crayonSelector()
console.log(crayonBox.colors[1])
  
//3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
  
const powerButton = () => {
    return options = () => {
      console.log('select a song')
    }
}
  
powerButton()()