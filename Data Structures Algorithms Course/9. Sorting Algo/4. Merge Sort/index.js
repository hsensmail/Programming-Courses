function mergeSort(arr) {
  // Base case: if the array has 1 or 0 elements, it's already sorted
  if (arr.length <= 1) return arr;

  // Calculate the middle index of the array
  const middle = Math.floor(arr.length / 2);

  // Divide the array into two halves: left and right
  const left = arr.slice(0, middle);   // Elements from the start to the middle
  const right = arr.slice(middle);     // Elements from the middle to the end

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = []; // Array to store the merged result
  let i = 0; // Pointer for the left array
  let j = 0; // Pointer for the right array

  // Merge the two arrays while there are elements in both arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]); // Add the smaller element to the result array
      i++; // Move the pointer in the left array
    } else {
      result.push(right[j]); // Add the smaller element to the result array
      j++; // Move the pointer in the right array
    }
  }

  // Add the remaining elements from the left array (if any)
  result.push(...left.slice(i));

  // Add the remaining elements from the right array (if any)
  result.push(...right.slice(j));

  return result; // Return the merged and sorted array
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10]; // Array to be sorted
const sortedArray = mergeSort(unsortedArray); // Call mergeSort function and store the result
console.log(sortedArray); // Print the sorted array
