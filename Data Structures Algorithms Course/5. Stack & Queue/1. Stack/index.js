class Node {
  constructor(value) {
    this.value = value; // Assigns the value to the node
    this.next = null; // Initially, the next pointer is set to null
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value); // Creates a new node with the initial value
    this.first = newNode; // Sets the top of the stack to the newly created node
    this.length = 1; // Initializes the stack length to 1
  }

  push(value) {
    const newNode = new Node(value); // Creates a new node with the given value

    if (this.length === 0) { // If the stack is empty, set the new node as the first element
      this.first = newNode;
    } else {
      newNode.next = this.first; // Link the new node to the current top of the stack
      this.first = newNode; // Set the new node as the top of the stack
      this.length++; // Increment the length of the stack
      return this; // Return the stack instance (for method chaining)
    }
  }

  pop() {
    if (this.length === 0) { // If the stack is empty, return undefined
      return undefined;
    }

    let temp = this.first; // Temporarily store the current top node
    this.first = this.first.next; // Move the top to the next node in the stack
    temp.next = null; // Remove the link of the popped node
    this.length--; // Decrease the length of the stack
    return temp; // Return the popped node
  }

  top() {
    if (this.length === 0) { // If the stack is empty, return undefined
      return undefined;
    }
    return this.first; // Return the top node of the stack
  }
}

let theStack = new Stack(0); // Initialize the stack with the value 0
theStack.push(1); // Push the value 1 onto the stack
theStack.push(2); // Push the value 2 onto the stack
// theStack.pop(); // Uncomment this line to pop the top node off the stack
console.log(theStack); // Print the current state of the stack
