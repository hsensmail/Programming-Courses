function twoSum(nums, target) {
  // Initialize an empty object (hash map) to store each number and its index.
  const numMap = {};

  // Iterate over the 'nums' array.
  for (let i = 0; i < nums.length; i++) {
    // For each number, calculate the complement (the number needed to sum up to the target).
    const complement = target - nums[i];

    // Check if the complement exists in the hash map and the index of the complement is not the same as the current index.
    if (complement in numMap && numMap[complement] !== i) {
      // If the complement is found, return the indices of the complement and the current number.
      return [numMap[complement], i];
    }

    // If the complement is not found, store the current number and its index in the hash map.
    numMap[nums[i]] = i;
  }

  // If no solution is found, return an empty array.
  return [];
}

const nums = [2, 7, 11, 15]; // Example input array
const target = 9; // Example target sum
const result = twoSum(nums, target); // Call the function to find the indices that sum up to the target
console.log(result); // Output: [0, 1] - The indices of the numbers 2 and 7, which add up to 9
