// Questions:
// 1. Convert number to string (toString method)
// 2. Convert String to array (split method)
// 3. Reverse the string (reverse method)
// 4. Convert array back to string (join method)
// 5. Convert string to number (parseInt method)
// 6. Return the number

// Explanation & Solution:
// Define a function 'reverseInt' that takes a number 'n' as an argument.
const reverseInt = (n) => {
  // 1. Convert the number 'n' to a string using 'toString' method.
  // 2. Convert the string to an array of characters using 'split' method.
  // 3. Reverse the order of the array using 'reverse' method.
  // 4. Convert the reversed array back into a string using 'join' method.
  const reversed = n.toString().split("").reverse().join("");
  // 5. Convert the reversed string back into a number using 'parseInt'.
  // 6. Multiply the result by 'Math.sign(n)' to preserve the original sign (positive/negative).
  return parseInt(reversed) * Math.sign(n);
};
// Test the 'reverseInt' function with a negative number.
console.log(reverseInt(-123)); // Output will be -321
