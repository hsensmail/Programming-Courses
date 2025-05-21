// Create an array 'numbers' containing a list of 5 numbers.
const numbers = [1, 2, 3, 4, 5];

// Define a function 'getElement' that takes two arguments:
// 'arr' (an array) and 'index' (the position in the array).
// The function returns the element from 'arr' at the position 'index'.
const getElement = (arr, index) => arr[index];

// Use 'console.log' to print the first element (index 0) of the 'numbers' array
// by calling the 'getElement' function with 'numbers' and 0 as arguments.
console.log(getElement(numbers, 0)); // Output will be 1
console.log(getElement(numbers, 1)); // Output will be 2
console.log(getElement(numbers, 2)); // Output will be 3
console.log(getElement(numbers, 3)); // Output will be 4
console.log(getElement(numbers, 4)); // Output will be 5
