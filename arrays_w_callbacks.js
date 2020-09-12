//SECTION 3: ARRAY METHODS WITH CALLBACKS

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//Determine if every number is greater than or equal to 0

const everyNums = nums.every(num => {
  return num >= 0
})

console.log(everyNums)

//determine if every word shorter than 8 characters

const everyPanagram = panagram.every(word => {
  return word.length < 8
})

console.log(everyPanagram)

//Filter
//filter the array for numbers less than 4

const numsFilter = nums.filter(num => {
  return num < 4
})

console.log(numsFilter)

//filter words that have an even length

const panagramFilter = panagram.filter(word => {
  return word.length % 2 === 0
})

console.log(panagramFilter)

//Find
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//Find the first value divisible by 5

const findNum = nums.find(num => {
  return num % 5 === 0
})

console.log(findNum)

//find the first word that is longer than 5 characters
//Longest word in array = 5 so this should return undefined. If function is modified to look at greater than or equal, quick would be returned

const findWord = panagram.find(word => {
  return word.length > 5
})

console.log(findWord)

//Find Index
//The findIndex() method returns the index of the first element in the array that satisfies the test. Otherwise, it returns -1, indicating that no element passed the test.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
//find the index of the first number that is divisible by 3

const findIndexNum = nums.findIndex(num => {
  return num % 3 === 0
})

console.log(findIndexNum)

//find the index of the first word that is less than 2 characters long. This should return -1 because the shortest word is 3 characters and -1 is returned when no element passes findIndex() test

const findIndexWord = panagram.findIndex(word => {
  return word.length < 2
})

console.log(findIndexWord)

//For Each
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//console.log each value of the nums array multiplied by 3


nums.forEach(num => {
  console.log(num * 3)
})


//console.log each word with an exclamation point at the end of it

panagram.forEach(word => {
  console.log(word + '!')
})




//Thought questions
//What happened to the original array?
//The original array is unchanged because forEach() does not mutate an array logging something to the console doesn't mutate the array. 

//Can you store the values from a forEach method in a new array?
//Yes, see code below
const sampleArr = []
nums.forEach(num => {
  sampleArr.push(num * 3)
})
console.log(sampleArr)

//Map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//Make a new array of each number multiplied by 100

let numsMultiplied = nums.map(num => {
  return num * 100
})

console.log(numsMultiplied)

//make a new array of all the words in all uppercase

const shouting = panagram.map(word => {
  return word.toUpperCase()
})

console.log(shouting)

// Thought Questions
//What happened to the original array?
//The original array is still there, the map method using an existing array to create a new array

//Can you store the values from a map method in a new array?
//Yes, this is required

//SOME
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//Find out if some numbers are divisible by 7

const divisible = nums.some(num => {
  return num % 7 === 0
})

console.log(divisible)
//Find out if some words have the letter a in them
const hasA = panagram.some(word => {
  return word.includes('a') || word.includes('A')
})

console.log(hasA)