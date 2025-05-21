// Define a function 'chunk' that takes an array and a size as arguments.
const chunk = (array, size) => {
  // Initialize an empty array to hold the chucked arrays.
  const chunked = [];
  // Initialize the starting index for slicing the array.
  let index = 0;

  // Loop until the index is less than the length of the original array.
  while (index < array.length) {
    // Use the 'slice' method to get a sub-array from the current index to 'index + size'.
    const chunk = array.slice(index, index + size);
    // Optionally log the chunk to the console for debugging/
    // console.log("------------", chunk);
    // Add the chunk to the 'chunked' array.
    chunked.push(chunk);
    // Increment the index by the size of the chunk to move to the nest segment.
    index += size;
  }

  // Return the array of chunked arrays.
  return chunked;
};

// console.log(chunk([1, 2, 3, 4, 5], 2));
// Test the 'chunk' function with an array and a chunk size of 3.
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
