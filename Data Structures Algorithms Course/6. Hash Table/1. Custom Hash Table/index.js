class HashTable {
  // Constructor to initialize a hash table with a default size of 6
  constructor(size = 6) {
    this.keyMap = new Array(size); // Create an array of the specified size to hold key-value pairs
  }

  // Private method to hash the key and convert it to an index
  _hashFunction(key) {
    let sum = 0; // Initialize sum to store hash value
    const PRIME_NUMBER = 31; // Use a prime number to reduce collisions

    // Loop through the characters in the key up to 100 characters
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96; // Get the character code of the key and normalize it
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length; // Hash calculation
    }

    return sum; // Return the final hashed index
  }

  // Method to set a key-value pair in the hash table
  set(key, value) {
    const index = this._hashFunction(key); // Get the hashed index for the key
    if (!this.keyMap[index]) this.keyMap[index] = []; // If no bucket exists at the index, create an empty array
    this.keyMap[index].push([key, value]); // Push the key-value pair to the bucket
    return this; // Return the updated hash table instance
  }

  // Method to get the value associated with a given key
  get(key) {
    const index = this._hashFunction(key); // Get the hashed index for the key
    if (this.keyMap[index]) { // Check if there is a bucket at that index
      for (let i = 0; i < this.keyMap[index].length; i++) { // Loop through all key-value pairs in the bucket
        if (this.keyMap[index][i][0] === key) { // If a matching key is found
          return this.keyMap[index][i][1]; // Return the corresponding value
        }
      }
    }
    return undefined; // If the key isn't found, return undefined
  }

  // Method to get all the keys from the hash table
  getAllKeys() {
    const keys = []; // Initialize an empty array to store keys
    for (let i = 0; i < this.keyMap.length; i++) { // Loop through all buckets
      if (this.keyMap[i]) { // If a bucket exists at the index
        for (let j = 0; j < this.keyMap[i].length; j++) { // Loop through all key-value pairs in the bucket
          keys.push(this.keyMap[i][j][0]); // Push the key to the keys array
        }
      }
    }
    return keys; // Return all collected keys
  }

  // Method to get all the values from the hash table
  getAllValues() {
    const values = []; // Initialize an empty array to store values
    for (let i = 0; i < this.keyMap.length; i++) { // Loop through all buckets
      if (this.keyMap[i]) { // If a bucket exists at the index
        for (let j = 0; j < this.keyMap[i].length; j++) { // Loop through all key-value pairs in the bucket
          values.push(this.keyMap[i][j][1]); // Push the value to the values array
        }
      }
    }
    return values; // Return all collected values
  }
}

// Example usage of the HashTable class
const phoneBook = new HashTable(); // Create a new instance of HashTable
phoneBook.set("john", "555-333-444"); // Add the key-value pair ("john", "555-333-444")
phoneBook.set("jordan", "222-444-666"); // Add the key-value pair ("jordan", "222-444-666")
phoneBook.set("michel", "111-666-222"); // Add the key-value pair ("michel", "111-666-222")
console.log(phoneBook.get("jordan")); // Retrieve the value associated with "jordan" and print it (Output: "222-444-666")
console.log(phoneBook.getAllValues()); // Print all values stored in the hash table (Output: ["555-333-444", "222-444-666", "111-666-222"])
console.log(phoneBook.getAllKeys()); // Print all keys stored in the hash table (Output: ["john", "jordan", "michel"])
