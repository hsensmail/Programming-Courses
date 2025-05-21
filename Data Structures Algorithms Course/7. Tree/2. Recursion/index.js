// ------------------ Example 1
function countDown(number) {
  // Base case: if the number is 0, print a stopping point message and end the recursion
  if (number === 0) {
    console.log("And finally the stopping point! 🥂");
    return; // Exit the function to stop further recursion
  }

  // Print the current number
  console.log(number);
  
  // Recursive case: call countDown with the number decreased by 1
  countDown(number - 1);
}

// Call countDown with an initial value of 5
countDown(5);

// ------------------ Example 2
function factorial(number) {
  // Base case: if the number is 0, return 1 (factorial of 0 is 1)
  if (number === 0) {
    return 1;
  }

  // Recursive case: return the current number multiplied by the factorial of the number - 1
  return number * factorial(number - 1);
  // An alternative way to write the recursive return statement is shown as a comment
  // return number === 0 ? 1 : number * factorial(number - 1);
}

// Call factorial with an initial value of 4 and print the result
console.log(factorial(4));
