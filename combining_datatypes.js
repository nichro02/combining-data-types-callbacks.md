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

//Vending Machine Object
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
    snacks: [
      {name: 'Snickers', price: 1.75},
      {name: 'Doritos', price: 2.00},
      {name: 'Starburst', price: 1.50},
    ],
    
    vend: (int) => {
      return vendingMachine.snacks[int - 1].name
    }
    
}
  
vendingMachine.vend(1)
  
//Callbacks
//1. Make a function add that takes two arguments (numbers) and sums them together

const add = (int1, int2) => {
    return (int1 + int2)
  }
  
  console.log(add(2,3))
  
  //2. Make a function subtract that takes two arguments (numbers) and subtracts them
  
  const subtract = (int1, int2) => {
    return (int1 - int2)
  }
  
  console.log(subtract(22,7))
  
  //3. Make a function multiply that takes two arguments and multiplies them
  
  const multiply = (int1, int2) => {
    return (int1 * int2)
  }
  
  console.log(multiply(3,4))
  
  //4. Make a function divide that takes two arguments and divides them
  
  const divide = (int1, int2) => {
    return (int1 / int2)
  }
  
  console.log(divide(10,2))
  
  //5. Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
  //6. Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
  
  const operates = (int1, int2) => {
    return (int1, int2)
  }
  
  const calculate = (int1, int2, callback) => {
    return callback(int1, int2)
  }
  
  calculate(1,2,operates)
  
  
  
  //7. Call calculate 4 times, each time using one of the operation functions you wrote
  
  //calculate(2,3,add)
  console.log("Calculate with add: " + calculate(2,3,add))
  //calculate(22,7,subtract)
  console.log("Calculate with subtract: " + calculate(22,7,subtract))
  //calculate(3,4,multiply)
  console.log("Calculate with multiply: " + calculate(3,4,multiply))
  //calculate(10,2,divide)
  console.log("Calculate with divide: " + calculate(10,2,divide))
  
  
  
  
  
  // Clean up this code, so that it works and has function definitions in the correct place
  /*
  bar();
  const bar = () => {
    console.log('bar here');
  }
  foo();
  
  const foo = () => {
    console.log('foo here');
  }
  */
  
  //Re-written code:
  const bar = () => {
    console.log('bar here')
  }
  
  bar()
  
  const foo = () => {
    console.log('foo here')
  }
  
  foo()
  
  //What is meant by the error(s) this produces?
  /*
  foo1();
  
  const foo1 ()=>{
    console.log('hi');
  }
  */
  //Error I received: Missing initializer in const declaration
  //What that means: The function isn't formatted properly. Fixed code is below:
  /*
  foo1();
  
  const foo1 = () => {
    console.log('hi');
  }
  */
  //Next error I received: Cannot access 'foo1' before initialization
  //What this means: I'm calling the function before it has been declared. Fixed code below:
  
  const foo1 = () => {
    console.log('hi');
  }
  
  foo1();
  //Code now runs fine