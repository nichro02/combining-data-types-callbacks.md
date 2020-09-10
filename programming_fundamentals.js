//PROGRAMMING FUNDAMENTALS

//1. Programming Principles
// DRY - Avoid repetitive taks wherever possible. It makes your code more efficient and easier to read. Creating a group of 1000 squares, for instance, is much drier if you do it in a function

// KISS - Don't overcomplicate things. This is an area I think I can really improve. I tend to overthink things and bring unnecessary stress upon myself.

// Avoid creating a YAGNI - Don't add unnecessary functionality. Only write code that you will use

// Do the simplest thing that could possibly work - The guiding principle of KISS. Simpler is usually better.

// Don't make me think - Someone else should be able to read your code without asking you a bunch of questions.

// Write code for the maintainer - You're likely not going to remember all of the code you write, so write it as if you're reading it for the first time.

// Single responsibility principle - A function should have a clear purpose. It's not that I find this surprising necessarily, but I think this reinforces the need think about your code before writing it.

// Avoid premature optimization - Get your code to do what you want first, then start thinking about ways to optimize the code in a methodical way. It's no use optimizing code that doesn't work.

// Separation of concerns - Different functionality in the code should be managed by distinct and minimally overlapping modules. This will prevent redundancy and is a good thing to keep in mind when thinking about DRY.

//2. Commenting Code
/*
const f = l => { //We are declaring a function called f that takes one argument
  let es = 0, p = 0, c = 1, n = 0 //in the function, four variables are delcared. The "let" indicates their values will change
  while (c <= l) { //initialzing a while loop that will run when c is less or equal l
    n = c + p; // n is the sum of c & p
    [c, p] = [n, c] //setting two arrays equal to each other (c will take n's value, p will take c's value)
    es += (c % 2 === 0) ? c : 0 //this line has a ternary operator that says if c is an equal number, add that to es, otherwise add zero 
  }
  return es //returns value of es after loop completes
}

console.log(f(55)) //input 55 as an argument into the function and console.log()
//Summary: 
//1 < 55 so loop will start iterating
//n = 1 + 0
//n = 1, c = 1, so [c, p] = [1, 1]
//1 is odd, so add zero to es
//start of second loop: es = 0, p = 1, c = 1, n = 0
//n = 1 + 1 = 2
//n = 2, c = 1, so [c, p] = [2, 1]
//2 is divisible by 2 so add 2 to es
//es will eventually return 44
//round 3: es = 2, p = 1, c = 2
//n = 2 + 1 = 3
//n = 3, c = 2 so [c, p] = [3, 2]
//3 not divisible by 3 so add 0 to es
*/
/*Used this to check logic
const f = l => {
  let es = 0, p = 0, c = 1, n = 0
  while (c <= l) {
    n = c + p;
    [c, p] = [n, c]
    console.log([c, p])
    es += (c % 2 === 0) ? c : 0
    console.log(es)
  }
  return es
}

console.log(f(55))
*/

//More semantic variable names
/*
const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))
*/

//What would have been a more semantic name for this function?
//A more semantic name for this function would be evenSum. Is this function another form of the Project Euler problem we had? The code seems pretty straightforward to read, the only thing I would add is a comment at each step, just to make it very clear what is going on in the function. I've also found that writing notes forces you to understand what is going on in the function, so the act of commenting also reinforces the code is doing what you want.

//Would I rather work with f or f2?
//I'd much rather start working with f2. It's easier for me to read and the variable names clearly indicate what the variable is. f2 has more lines, but the difference isn't huge and the tradeoff is clarity, which I will gladly take. This code is written for the maintainer.

//Is the last semi-colon necessary in function f?
//The code ran when I removed the semi-colon, which would make the semi-colon unnessecary. In fact, I think including the semi-colon makes the format of the code inconsistent because none of the other lines end with a semi-colon.