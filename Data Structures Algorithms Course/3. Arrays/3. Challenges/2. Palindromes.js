// Questions:
// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)
// 4. Compare strings

// Explanation:
// 1. Use the 'split' method to convert the string into an array of individual characters.
// 2. Use the 'reverse' method to reverse the order of the array.
// 3. Use the 'join' method to convert the reversed array back into a string.
// 4. Compare the reversed string with the original string using '==='.

// Solution
const palindrome = (str) => str.split("").reverse().join("") === str;

// Test the 'palindrome' function with a string that is a palindrome.
console.log(palindrome("cddc"));// Output will be true

// Test the 'palindrome' function with a string that is not a palindrome.
console.log(palindrome("Hello"));// Output will be false



