class Node {
  constructor(value) {
    this.head = value; // Assigns the value to the node
    this.next = null; // Sets the next node to null initially
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value); // Creates the first node (head) in the list
    this.tail = this.head; // Sets the tail to be the same as the head (since it's the only node)
    this.length = 1; // Initializes the length of the list to 1
  }

  push(value) {
    let newNode = new Node(value); // Creates a new node with the given value

    if (!this.head) { // If the list is empty (head is null), set head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    }

    // If the list is not empty, append the new node to the tail
    this.tail.next = newNode; // Link the current tail to the new node
    this.tail = newNode; // Update the tail to the new node
    this.length++; // Increase the length of the list
  }

  reverse() {
    // Swapping the head and the tail
    let temp = this.head; // Temporarily store the current head
    this.head = this.tail; // Set the head to the current tail
    this.tail = temp; // Set the tail to the previous head

    let next = temp; // Initialize `next` to point to the current node
    let prev = null; // Start with `prev` as null, since the new tail's `next` will be null

    // Iterate over the list to reverse the pointers
    for (let i = 0; i < this.length; i++) {
      next = temp.next; // Store the next node
      temp.next = prev; // Reverse the link, pointing the current node to the previous node
      prev = temp; // Move `prev` to the current node
      temp = next; // Move `temp` to the next node in the original list
    }

    return this; // Return the reversed list
  }
}

const myLinkedList = new LinkedList(1); // Initialize the linked list with the value 1
myLinkedList.push(2); // Add node with value 2 to the list
myLinkedList.push(3); // Add node with value 3 to the list
myLinkedList.push(4); // Add node with value 4 to the list
console.log(myLinkedList.reverse()); // Reverse the list and print the result
