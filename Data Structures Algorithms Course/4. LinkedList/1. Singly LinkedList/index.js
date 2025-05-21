// Define a Node class to be used in the LinkedList.
class Node {
  constructor(value) {
    this.head = value; // Store the node's value.
    this.next = null; // Pointer to the next node in the list.
  }
}

// Define a LinkedList class.
class LinkedList {
  constructor(value) {
    // Initialize the list with a single node.
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // Add a new node to the end of the list.
  push(value) {
    let newNode = new Node(value);

    // If the list is empty, update head and tail.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode; // Link new node to the end of the List.
    this.tail = newNode; // Update tail to the new node.
    this.length++;
  }

  // Remove the last node from the list.
  pop() {
    if (!this.head) {
      return undefined; // Return undefined if the list is empty.
    }

    let temp = this.head;
    let prev = this.head;

    // Transfer the list to find the last node.
    while (temp.next) {
      // console.log("********** temp", temp);
      prev = temp;
      temp = prev.next;
    }

    // console.log(prev);
    this.tail = prev; // Update tail to the previous node.
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Remove and return the first node from the list.
  shift() {
    if (!this.head) {
      return undefined; // Return undefined if the list is empty.
    }

    // 1. Point to the first node/element
    let temp = this.head;
    // 2. Move the head to the next node/element
    this.head = this.head.next; // Update head to the next node.
    // 3. Remove first element
    temp.next = null; // Remove link to the old head.
    this.length--;

    // Handle the case where the list becomes empty.
    if (this.length === 0) {
      this.tail = null;
    }

    return temp; // Return the removed node.
  }

  // Return the last node by traversing the list.
  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null; // Return null if the list is empty.
    }

    let node = this.head;

    while (node) {
      // console.log("***********", node);
      if (!node.next) {
        return node; // Return the node at the index.
      }
      node = node.next;
    }
  }

  // Return the node at a specific index.
  get(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node; // Return the node at the index.
      }

      counter++;
      node = node.next;
    }

    return null; // Return null if the index is out of bounds.
  }

  // Update the value of the node at a specific index.
  set(index, value) {
    let temp = this.get(index);
    console.log("----------", temp);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  // Insert a new node at a specific index.
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value); // Insert at the beginning
    }

    if (index === this.length) {
      return this.push(value); // Insert at the end.
    }

    const newNode = new Node(value);
    // Uses the get method to find the node right before the desired position (index - 1).
    const temp = this.get(index - 1);

    newNode.next = temp.next; // Link new node to the next node.
    temp.next = newNode; //Link previous node to the new node.
    this.length++;
    return true;
  }

  // Return the number of nodes in the list.
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter; // Return the count of nodes.
  }

  clear() {
    this.head = null;
  }
}

// Example usage
const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
console.log(myLinkedList); // Output the LinkedList
