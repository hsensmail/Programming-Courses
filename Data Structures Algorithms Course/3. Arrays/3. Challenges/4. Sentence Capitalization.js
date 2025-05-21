// 1. Make the string lowercase (toLowerCase method)
// 2. Convert string to array (split method)
// 3. Capitalize each word (map method)
// 3. Convert array back to string (join method)

// Explanation
// Define a function 'capitalize' that takes a string 'str' as an argument.
const capitalize = (str) => {
  return str
    // 1. Convert the entire string to lowercase using 'toLowerCase' method.
    .toLowerCase()
    
    // 2. Split the string into an array of words using 'split' method.
    // The argument " " tells 'split' to divide the string at each space.
    .split(" ")

    // 3. Use the 'map' method to capitalize the first letter of each word.
    // 'word[0].toUpperCase()' capitalizes the first letter.
    // 'word.slice(1)' takes the rest of the word (starting from the second letter).
    .map((word) => word[0].toUpperCase() + word.slice(1))

    // 4. Join the array of words back into a single string using 'join' method.
    // The argument " " tells 'join' to insert a space between each word.
    .join(" ");
};
// Test the 'capitalize' function with different strings.
console.log(capitalize("hello world")); // Output: "Hello World"
console.log(capitalize("jordan peterson")); // Output: "Jordan Peterson"
