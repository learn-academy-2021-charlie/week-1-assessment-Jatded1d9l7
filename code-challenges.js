
// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//pseudo code 
// Function that takes in a number
// ^boilingPoint = (number) => {}^
// temperature is below the boiling point
// temperature is at boiling point 
// temperature is below boiling point


//-------------------- CODE BLOCK START ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 1-

var temp1 = 35
var temp2 = 350
var temp3 = 212

const boilingPoint = (temp) {
  if (temp === 212){
    return "212 is at boiling point"
  } else if(temp > 212){
    `${temp} is above boiling point`
  } else if (temp < 212){
    return `${212} is below boiling point`
  }
}

console.log boilingPoint(temp1)

//-------------------- CODE BLOCK END ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 1-


















// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. 

// Function that takes in two arrays of numbers 
// ^singleSort = ([],[]) => {}
// .concate() method to merge two or more arrays
// .sort() method that sorts an array alphabetically

//-------------------- CODE BLOCK START ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 2-

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [ , 8, -7, 22, 9, 13]
Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]


singleSort = (num1, num2) => {
  let newNumbers = num1.concat(num2)
  return newNumbers.sort(a, b => a - b)
}
console.log(singleSort(myNumbers1, myNumbers2))

//-------------------- CODE BLOCK END ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 2-















// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. 

//pseudo code
// function that takes in a string of a single word
// Returns the string with all letters reveresed
// .split() splits a string into an array of substrings
// .reverse reverses the order of the elements in the array
// .join() method returns a string by concatenating an array

//-------------------- CODE BLOCK START ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 3-

var myString1 = "bravo"
var myString2 = " charlie"
// Expected output: "ovarb", "eilrahc"


const reverseString = (string) => {
  return string.split("").reverse().join("")
}

console.log(reverseString(myString1))
console.log(reverseString(myString2))

//-------------------- CODE BLOCK END ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 3-










// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

//-------------------- CODE BLOCK START ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 4-

var numberExample1 = 42
var numberExample2 = 27
var numberExample3 = 7
var numberExample4 = 19

const subtractor = (num1, num2) => {
  let result1 = num1 - num2
  let result2
  if (num1 > num1)
  return result1 = num1 - num2
} else {
  return result2
}
console.log(subtractor(2,6))

//-------------------- CODE BLOCK END ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 4-











// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

//-------------------- CODE BLOCK START ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 5-


if (num1 >= num2){
    return num1-num2
    else if 
    (num2 > num1){
    return num2-num1
    }else if(typeof num1, num2 !== 'number'){
    return "Your input is not a number"
            }
    }

console.log(subtractFunction(numberExampleRefactor1, numberExampleRefactor3))

//-------------------- CODE BLOCK END ----------------------// Week-1-assessment-Jatded1d9l7 -Code Challenges- -Question 5-
