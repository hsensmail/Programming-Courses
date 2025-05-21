function reverseString(str) {
  // Create an empty stack
  const stack = [];

  // Push each character of the string onto the stack
  // We loop through the input string and add each character to the stack
  for (let char of str) {
    stack.push(char); // Push the current character onto the stack
  }

  // Initialize an empty string to store the reversed string
  let reversedStr = ""; // This variable will accumulate characters in reverse order

  // Pop characters from the stack and build the reversed string
  // The stack follows the Last In, First Out (LIFO) principle, so popping will give us characters in reverse order
  while (stack.length > 0) {
    reversedStr += stack.pop(); // Pop the top character from the stack and add it to `reversedStr`
  }

  // Return the reversed string
  return reversedStr;
}

const originalString = "hello world"; // Original string to be reversed
const reversedString = reverseString(originalString); // Call the function to reverse the string
console.log(reversedString); // Output: "dlrow olleh"
