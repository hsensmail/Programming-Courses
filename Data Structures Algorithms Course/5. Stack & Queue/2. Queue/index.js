class Node {
  constructor(value) {
    this.value = value; // Stores the value of the node
    this.next = null; // Points to the next node in the queue, initially null
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value); // Creates a new node with the initial value
    this.first = newNode; // The first element in the queue (front of the queue)
    this.last = newNode; // The last element in the queue (back of the queue)
    this.length = 1; // Initializes the length of the queue to 1
  }

  enqueue(value) {
    const newNode = new Node(value); // Creates a new node to be added to the queue

    if (this.length === 0) { // If the queue is empty, set the new node as both first and last
      this.first = newNode;
      this.last = newNode;
    }

    // Link the last node (current tail) to the new node
    this.last.next = newNode;
    // Update the last to point to the newly added node (now the tail)
    this.last = newNode;
    // Increment the length of the queue
    this.length++;
    // Return the updated queue
    return this;
  }

  dequeue() {
    if (this.length === 0) { // If the queue is empty, return undefined
      return undefined;
    }

    let temp = this.first; // Temporarily store the first node (the node to be removed)

    if (this.length === 1) { // If there is only one node in the queue
      this.first = null; // Set the first to null (no nodes in queue)
      this.last = null; // Set the last to null (no nodes in queue)
    }

    // Move the first pointer to the next node in the queue
    this.first = this.first.next;
    // Remove the link to the rest of the queue from the dequeued node
    temp.next = null;
    // Decrease the length of the queue
    this.length--;
    // Return the dequeued node
    return temp;
  }
}