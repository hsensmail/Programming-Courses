const isValidParenthesis = (str) => {
  // Use a stack to store opening brackets
  const stack = [];

  // Map opening brackets to their closing counterparts
  const brackets = {
    "{": "}", // Opening curly bracket corresponds to closing curly bracket
    "[": "]", // Opening square bracket corresponds to closing square bracket
    "(": ")", // Opening parenthesis corresponds to closing parenthesis
  };

  // Loop through each character in the string
  for (let char of str) {
    // If it's an opening bracket, push it to the stack
    if (brackets[char]) {
      stack.push(char); // Add the opening bracket to the stack
    } else {
      // If it's a closing bracket, check if it matches the top of the stack
      const top = stack.pop(); // Remove and store the last opening bracket from the stack
      if (!top || brackets[top] !== char) {
        // If no opening bracket exists (stack is empty) or it doesn't match the current closing bracket
        return false; // Return false if there's a mismatch
      }
    }
  }

  // After iterating, check if the stack is empty (all brackets were matched)
  return stack.length === 0; // If stack is empty, all brackets were balanced, return true
};

console.log(isValidParenthesis("(){}[]")); // true, all opening and closing brackets match correctly
console.log(isValidParenthesis("([)]")); // false, brackets are improperly nested
console.log(isValidParenthesis("()")); // true, a simple matching pair of parentheses
console.log(isValidParenthesis("(")); // false, unmatched opening bracket
