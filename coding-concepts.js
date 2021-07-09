// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Charlie 2021"
// console.log(cohort.length)

// a) Your answer: 11, because when using .lenth with a string it uses zero indexing to
//count the number of positions statring with the C=0 in Charlie 2021
// b) Verify and explain: console.log rendered 12. Starting with C in "Charlie 2021" there are
// 12 place holder positions counting from "C"=0 through "1"= 12. I answered this question wrong
//because the zero index does not apply to .length

// --------------------2) What will this log?

// var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: The anwswer will be l. This is because using zero indexing starting with
//"H" in "Hello" would be 0. Subsequently "e"=1 "l"=2 "l"=3 "o"=3
// b) Verify and explain: The answer was indeed l. This question confirmed my query in the above qestion
//zero indexing does not apply to .length, yet rather it does apply to direct bracket[] indexing


// --------------------3) What will this log?

// var languages = ["JavaScript", "Ruby", "Python", "C++"]
// var index = 1
// console.log(languages[index])

// a) Your answer: JavaScript because of the following:
// 1. JavaScript is number 1 in the array of 4 items
// 2. The variable index was created to represent the number 1
// 3. console.log(language[index]) looks at the four languages
//    "JavaScript", "Ruby", "Python", "C++" and then applies the index variable
//    whos value is the number 1
// 4. Therefore this code renders the 1st item in the array labled languages
//
//b) Verify and explain: My answer was incorrect. The correct answer is Ruby. Perhaps
// this is because the array is also zero indexed, begining with JavaScript at position 0


// --------------------4) What will this log?

// var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())


// console.log(weekendDays) ---> "[ 'saturday', 'sunday' ]"
//console.log(weekendDays()) ---> "weekendDays is not a function"
//console.log(weekendDays.toUpperCase) ---> "undefined"


// a) Your answer: Saturday Sunday- because the .toUpperCase function will capitalize the
// first letter in each word in an array of strings.
// b) Verify and explain: My answer was incorrect. When running this command the terminal
// rendered "weekendDays.toUpperCase is not a function"


// --------------------5) What will this log?

// var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: number because the typeof function is describing the length of the datatype array
// using zero indexing makes "number"= 0, "sting"= 1, and "Boolean"=2
// b) Verify and explain: My answer is CORRECT. The typof function is useful in the sense that it
// tells the user the type of data (i.e if it is a number, string, boolean, undefined, null)
