function selectionSort(arr) {
  // Outer loop: iterates through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Assume the current index is the index of the smallest element
    let minIndex = i;

    // Inner loop: finds the index of the smallest element in the remaining unsorted portion of the array
    for (let j = i + 1; j < arr.length; j++) {
      // If the current element is smaller than the element at minIndex, update minIndex
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // If the smallest element is not already in the correct position, swap it with the element at index i
    if (i !== minIndex) {
      let temp = arr[i]; // Temporarily store the element at index i
      arr[i] = arr[minIndex]; // Move the smallest element to index i
      arr[minIndex] = temp; // Move the temporarily stored element to minIndex

      // SHORTHAND 👇: This line can be used to swap elements in a more concise way
      // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  // Return the sorted array
  return arr;
}

const myArr = [4, 2, 6, 5, 1, 3]; // Array to be sorted
const res = selectionSort(myArr); // Call selectionSort function and store the result
console.log(res); // Print the sorted array
