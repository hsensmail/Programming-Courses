// 1. Print numbers from 1 to n
// 2. If number is divisible by 3, print "Fizz"
// 3. If number is divisible by 5, print "Buzz"
// 4. If number is divisible by 3 and 5, print "FizzBuzz"
// 5. Else, print the number



// Explanation  & Solution:
// Define a function 'fizzBuzz' that takes a number 'n' as an argument.
const fizzBuzz = (n) => {
  // 1. Use a for loop to iterate from 1 to 'n'.
  for (let i = 1; i <= n; i++) {
    // 2. Check if the current number 'i' is divisible by both 3 and 5.
    // IF true, print "FizzBuzz".
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      // 3. If the number is divisible only by 3, print "Fizz"
    } else if (i % 3 === 0) {
      console.log("Fizz");
      // 4. If the number is divisible only by 5, print "Buzz".
    } else if (i % 5 === 0) {
      console.log("Buzz");
      // 5.If the number is not divisible by either 3 or 5, print the number itself.
    } else {
      console.log(i);
    }
  }
};
// Call the "fizzBuzz" function with 15 as an argument to test it.
fizzBuzz(15);
