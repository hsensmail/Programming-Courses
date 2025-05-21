function insertionSort(arr) {
  // Outer loop: iterates over each element starting from the second element
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Current element to be inserted into the sorted portion
    let j = i - 1;    // Index of the last element in the sorted portion

    // Inner loop: shifts elements of the sorted portion that are greater than key to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Move the element one position to the right
      j--; // Move to the next element in the sorted portion
    }

    // Insert the key into its correct position in the sorted portion
    arr[j + 1] = key;
  }

  // Return the sorted array
  return arr;
}

const unsortedArray = [5, 2, 4, 6, 1, 3]; // Array to be sorted
const sortedArray = insertionSort(unsortedArray); // Call insertionSort function and store the result
console.log(sortedArray); // Print the sorted array
