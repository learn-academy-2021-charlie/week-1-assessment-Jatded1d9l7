
// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//pseudo code 
// Function that takes in a number
// ^boilingPoint = (number) => {}^
// temperature is below the boiling point
// temperature is at boiling point 
// temperature is below boiling point


//-------------------- CODE BLOCK START ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 1-

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// const boilingPoint = (temp) {
//   if (temp === 212){
//     return "212 is at boiling point"
//   } else if(temp > 212){
//     `${temp} is above boiling point`
//   } else if (temp < 212){
//     return `${212} is below boiling point`
//   }
// }

// console.log boilingPoint(temp1)

//-------------------- CODE BLOCK END ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 1-


















// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. 

// Function that takes in two arrays of numbers 
// ^singleSort = ([],[]) => {}
// Concatination for two arrays 
// .sort for least to greatest

//-------------------- CODE BLOCK START ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 2-

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [ , 8, -7, 22, 9, 13]
// Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]


// singleSort = (num1, num2) => {
//   let newNumbers = num1.concat(num2)
//   return newNumbers.sort(a, b => a - b)
// }
// console.log(singleSort(myNumbers1, myNumbers2))

//-------------------- CODE BLOCK END ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 2-















// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"


//-------------------- CODE BLOCK START ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 3-


const reverseString = (string) => {
  let newArray = sting.split()
  console.log(newArray)
  let reversedArray = newArray.reverse()
  console.log(reversedArray)
  let joinedArray = reversedArray.join("")
  console.log(joinedArray)
}

const reverseString = (string) => {
  return string.split("").reverse().join("")
}

console.log(reverseString(myString1))
console.log(reverseString(myString2))

//-------------------- CODE BLOCK END ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 3-



// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

// for this problem I have to take the two numbers and subtract the smaller from the larger
//if numberExample1 > numberExample2
// Return numberExample1 - numberExample2
// if numberExample1 < numberExampleRefactor
// Return numberExample2 - numberExample1


// Review Answers
//- create a functions
//- function will take in 2 parameters = numb 1, numb 2
// make conditionals to check for the larger number, then subtract the smaller
// create a variable for the results
// return the results variable

const subtractor = (numb1, numb2) => {
  let result 1 = numb1 - num2
  let result2
  if (numb1 > numb1)
  return result1 = numb1 - numb2
} else {
  return result2
}


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

// Review: Answer-
//-
//-
//-
//-

//Amanda's syntax for this problem (possible option)

// if (num1 >= num2){
//             return num1-num2
//             }else if (num2 > num1){
//                 return num2-num1
//             }else if(typeof num1, num2 !== 'number'){
//                 return "Your input is not a number"
//             }
//     }

// console.log(subtractFunction(numberExampleRefactor1, numberExampleRefactor3))


// var numberExampleRefactor1 = 42
// var numberExampleRefactor2 = "hello"
//
// var numberExampleRefactor3 = 27
// var numberExampleRefactor4 = 24
