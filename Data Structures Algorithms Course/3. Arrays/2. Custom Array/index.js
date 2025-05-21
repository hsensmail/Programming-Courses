// Define a class 'MyArray' which mimics the behavior of an array.
class MyArray {
  // The constructor initializes an empty array-like object.
  constructor() {
    this.length = 0; // Set the initial length to 0.
    this.data = {};  // Initialize an empty object to store array elements.
  }

  // Method to add an item to the array (at the end, like 'push' in a normal array).
  push(item) {
    this.data[this.length] = item; // Add the new item at the index 'this.length'.
    this.length++;  // Increase the length by 1.
    return this.length;  // Return the new length of the array.
  }

  // Method to get an item from a specific index.
  get(index) {
    return this.data[index]; // Return the item at the specified index.
  }

  // Method to remove and return the last item from the array (like 'pop' in a normal array).
  pop() {
    const lastItem = this.data[this.length - 1];  // Get the last item.
    delete this.data[this.length - 1];  // Remove the last item from the data.
    this.length--;  // Decrease the length by 1.
    return lastItem;  // Return the removed last item.
  }

  // Method to remove and return the first item from the array (like 'shift' in a normal array).
  shift() {
    const firstItem = this.data[0];  // Store the first item.

    // Shift every element one index to the left.
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];  // Move each element one step to the left.
    }

    // Delete the last element (since it is now duplicated from the shift).
    delete this.data[this.length - 1];
    this.length--;  // Decrease the length by 1.

    // Return the first item that was removed.
    return firstItem;
  }

  // Method to delete an item at a specific index.
  delete(index) {
    const item = this.data[index];  // Store the item to be deleted.

    // Shift elements after the target index to the left.
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];  // Shift each element left.
    }

    // Delete the last element after the shift.
    delete this.data[this.length - 1];
    this.length--;  // Decrease the length by 1.

    // Return the removed item.
    return item;
  }
}

// Create a new instance of the 'MyArray' class.
const myNewArray = new MyArray();

// Add items to the array.
myNewArray.push("one");   // Adds "one" at index 0.
myNewArray.push("two");   // Adds "two" at index 1.
myNewArray.push("three"); // Adds "three" at index 2.

// Remove the item at index 1 ("two") using the 'delete' method.
myNewArray.delete(1);

// Log the current state of 'myNewArray' to the console.
console.log(myNewArray); // Output will show the updated array and its properties.
