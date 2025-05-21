// Questions
// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)


// Explanation:
// Define a function 'reverseString' that takes a string 'str' as an argument.
// 1. Use the 'split' method to convert the string into an array of individual characters.
//    The argument "" tells 'split' to divide the string at each character.
    
// 2. Use the 'reverse' method to reverse the order of the elements in the array.
    
// 3. Use the 'join' method to combine the elements of the array back into a single string.
//    The argument "" tells 'join' to combine the array elements without any separator.
  
// Test the 'reverseString' function by passing the string "hello".

// Solution
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));


  