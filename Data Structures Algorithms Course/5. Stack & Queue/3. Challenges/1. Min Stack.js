class Node {
  constructor(value) {
    this.value = value; // Stores the value of the node
    this.next = null; // Points to the next node in the stack, initially null
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value); // Creates a new node with the initial value
    this.first = newNode; // This is the top node of the stack
    this.length = 1; // Initializes the length of the stack to 1
  }

  push(value) {
    const newNode = new Node(value); // Creates a new node to be pushed onto the stack

    if (this.length === 0) { // If the stack is empty, set the new node as the top (first)
      this.first = newNode;
    } else {
      // Link the new node to the current top node
      newNode.next = this.first;
      // Update the top to point to the newly pushed node
      this.first = newNode;
      // Increment the length of the stack
      this.length++;
    }
    return this;
  }

  pop() {
    if (this.length === 0) { // If the stack is empty, return undefined
      return undefined;
    }

    let temp = this.first; // Temporarily store the current top node (which will be removed)
    this.first = this.first.next; // Move the top pointer to the next node in the stack
    temp.next = null; // Remove the link to the rest of the stack from the popped node
    this.length--; // Decrease the length of the stack
    return temp; // Return the popped node
  }

  top() {
    if (this.length === 0) { // If the stack is empty, return undefined
      return undefined;
    }
    return this.first; // Return the top node of the stack
  }

  min() {
    if (this.length === 0) { // If the stack is empty, return undefined
      return undefined;
    }

    let current = this.first; // Start at the top of the stack
    let minValue = current.value; // Assume the top node's value is the minimum

    // Traverse through the entire stack
    while (current.next) {
      current = current.next; // Move to the next node in the stack
      if (current.value < minValue) { // If the current node's value is smaller than minValue
        console.log(current.value, minValue); // Print the comparison (for debugging purposes)
        minValue = current.value; // Update minValue to the smaller value
      }
    }

    return minValue; // Return the smallest value found in the stack
  }
}

let theStack = new Stack(); // Create an empty stack
theStack.push(1); // Push 1 onto the stack
theStack.push(2); // Push 2 onto the stack
theStack.push(3); // Push 3 onto the stack
console.log(theStack.min()); // Find and print the minimum value in the stack
