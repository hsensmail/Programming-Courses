class Node {
  constructor(value) {
    this.value = value; // Stores the value of the node
    this.next = null; // Points to the next node in the list (initially null)
    this.prev = null; // Points to the previous node in the list (initially null, used for doubly linked list)
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value); // Creates a new node with the given value
    this.head = newNode; // Initializes the head of the list to the new node
    this.tail = this.head; // Initializes the tail to the same new node (since there's only one node now)
    this.length = 1; // Sets the initial length of the list to 1
  }

  push(value) {
    const newNode = new Node(value); // Creates a new node with the given value

    if (!this.head) { // If the list is empty (no head)
      this.head = newNode; // The new node becomes the head
      this.tail = newNode; // The new node also becomes the tail
    } else {
      this.tail.next = newNode; // Sets the current tail's `next` to the new node
      newNode.prev = this.tail; // Sets the new node's `prev` to the current tail
      this.tail = newNode; // Updates the tail to be the new node
    }

    this.length++; // Increments the length of the list
    return this; // Returns the list object for chaining
  }

  pop() {
    if (this.length === 0) { // If the list is empty, return undefined
      return undefined;
    }

    let temp = this.tail; // Temporarily store the current tail

    if (this.length === 1) { // If the list has only one node
      this.head = null; // Set the head to null (empty list)
      this.tail = null; // Set the tail to null (empty list)
    } else {
      this.tail = this.tail.prev; // Update the tail to the previous node
      this.tail.next = null; // Remove the reference to the old tail by setting `next` to null
      temp.prev = null; // Remove the reference to the previous node from the old tail
    }

    this.length--; // Decrement the length of the list
    return temp; // Return the node that was removed (the old tail)
  }

  unshift(value) {
    const newNode = new Node(value); // Creates a new node with the given value

    if (this.length === 0) { // If the list is empty
      this.head = newNode; // The new node becomes the head
      this.tail = newNode; // The new node also becomes the tail
    } else {
      newNode.next = this.head; // Set the new node's `next` to the current head
      this.head.prev = newNode; // Set the current head's `prev` to the new node
      this.head = newNode; // Update the head to be the new node
    }

    this.length++; // Increment the length of the list
    return this; // Returns the list object for chaining
  }

  shift() {
    if (this.length === 0) { // If the list is empty, return undefined
      return undefined;
    }

    let temp = this.head; // Temporarily store the current head

    if (this.length === 1) { // If the list has only one node
      this.head = null; // Set the head to null (empty list)
      this.tail = null; // Set the tail to null (empty list)
    } else {
      this.head = this.head.next; // Update the head to the next node
      this.head.prev = null; // Remove the reference to the old head by setting `prev` to null
      temp.next = null; // Remove the reference to the next node from the old head
    }

    this.length--; // Decrement the length of the list
    return temp; // Return the node that was removed (the old head)
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0); // Create a new doubly linked list with an initial value of 0
myDoublyLinkedList.push(1); // Add 1 to the end of the list
// myDoublyLinkedList.pop(); // Uncomment this line to remove the last node (1) from the list
// myDoublyLinkedList.shift(); // Uncomment this line to remove the first node (0) from the list
console.log(myDoublyLinkedList); // Output the current state of the list
