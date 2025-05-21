// Define a function 'twoSum' that takes an array 'nums' and a 'target' number as arguments.
function twoSum(nums, target) {
  // Loop through each number in the array.
  for (let i = 0; i < nums.length; i++) {
    // For each number at index 'i', check all subsequent numbers in the array.
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the sum of the numbers at index 'i' and index 'j' equals the 'target'.
      if (nums[i] + nums[j] === target) {
        // If true, return the indexes of the two numbers that add up to the target.
        return [i, j];
      }
    }
  }

  // If no pair of numbers add up to the target, return an empty array.
  return [];
}
// Test the 'twoSum' function with two examples cases.
const res = twoSum([2, 7, 11, 15], 9); // Expected output: [0, 1] because 2 + 7 = 9
const res2 = twoSum([1, 3, 7, 9, 2], 11); // Expected output: [3, 4] because 9 + 2 = 11

// Log the results to the console.
console.log(res);
console.log(res2);
