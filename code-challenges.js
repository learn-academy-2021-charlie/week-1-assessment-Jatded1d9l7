// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

//

//Pseudo coding- okay, I need to create a function. I know I have to use const because i dont want to
//treat it like a variable that can change.
//I need to use if statements to set the conditional paramenters
//I need to use the return functions for my expected outcomes.

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//1. Start out with a declaration, us "const" because this will not be reassigned.
//2. Begin with camelCased variable name. I will use boilingPoint as my variable name.
//3. My variable must have an equal sign after it.
//4. Now my I must have parentheses to describe an action and to pass inputs.
//5. I need a function syntax "=>".
//6. I need curly brackets to encapsolate my code "{}".
//7. Finally, I need a return function.

// for this problem:
//-I need to create a variable that takes in a number to determine if a temperature is above, at, or below boiling point.

///


var temp1 = 35
var temp2 = 350
var temp3 = 212




// var temp = ()
//
//   // if temp1 is above 212
//   if(temp > 212) {
//     return "is above boiling point"
//   }
// //   // if boilingPoint is equal to 212 return "is at boiling point"
//   else if(temp === 212) {
//     return "is at boiling point"
//   }
//    else if(temp < 212) {
//     return "is below boiling point"
//   }
// }
// console.log(boilingPoint(200))


// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

// for this question I must create a function that returns a single array.
// I must use the ".sort()" function to list the numbers from least to greatest
// the first thing I need to do is to create the function
// make my declaration
// function name
// equals sign
// concatenate the two variables
// return a value that orders the two arrays from least to greatest

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [ , 8, -7, 22, 9, 13]
//
// var singleSortedArray = (myNumbers1 + myNumbers2) => {
//   return singleSortedArray.sort()
// }
// console.log(singleSortedArray)

// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

//  create a constant variable
// make the function
// add the equals sign
// use the reversed function to render the two strings reversed order ".reversed"

// var myString1 = "bravo"
// var myString2 = " charlie"
//
// const singleWord = (myString1 + myString2) => {
//   return singleWord.reversed
// }
//
// console.log(singleWord)

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

// for this problem I have to take the two numbers and subtract the smaller from the larger
//if numberExample1 > numberExample2
// Return numberExample1 - numberExample2
// if numberExample1 < numberExampleRefactor
// Return numberExample2 - numberExample1


// var numberExample1 = 42
// var numberExample2 = 27
// var numberExample3 = 7
// var numberExample4 = 19

// const subTwo = (numb1, numb2) => {
//   if numb1 > numb2
//   return numb1 - numb2
// }
// console.log(subTwo(1, 2))


// const subTwo = (numberExample1 + numberExample2 + numberExample3 + numberExample4)


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

// var numberExampleRefactor1 = 42
// var numberExampleRefactor2 = "hello"
//
// var numberExampleRefactor3 = 27
// var numberExampleRefactor4 = 24
