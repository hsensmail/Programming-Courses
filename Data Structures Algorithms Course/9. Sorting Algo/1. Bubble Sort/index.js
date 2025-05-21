function bubbleSort(arr) {
  // Outer loop: iterates from the end of the array to the start
  for (let i = arr.length - 1; i > 0; i--) {
    // Inner loop: iterates from the start of the array to the current position of the outer loop
    for (let j = 0; j < i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[j]; // Temporarily store the current element
        arr[j] = arr[j + 1]; // Move the next element to the current position
        arr[j + 1] = temp; // Move the temporarily stored element to the next position
      }
    }
  }
  // Return the sorted array
  return arr;
}

const myArr = [4, 2, 6, 5, 1, 3]; // Array to be sorted
const res = bubbleSort(myArr); // Call bubbleSort function and store the result
console.log(res); // Print the sorted array
