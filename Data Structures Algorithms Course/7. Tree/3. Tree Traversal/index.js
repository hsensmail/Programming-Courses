class Node {
  constructor(value) {
    this.value = value;
    this.left = null;  // Points to the left child node
    this.right = null; // Points to the right child node
  }
}

class BST {
  constructor() {
    this.root = null; // Root node of the binary search tree
  }

  // Method to insert a new value into the BST
  insert(value) {
    const newNode = new Node(value); // Create a new node with the given value
    if (this.root === null) { // If the tree is empty
      this.root = newNode; // Set the new node as the root
      return this; // Return the BST instance
    }

    let temp = this.root; // Start at the root
    while (true) { // Loop until the correct position is found
      if (newNode.value === temp.value) return undefined; // Avoid duplicate values
      if (newNode.value < temp.value) { // If the value is less, go to the left
        if (temp.left === null) { // If no left child, place the new node here
          temp.left = newNode;
          return this; // Return the BST instance
        } else {
          temp = temp.left; // Move to the left child
        }
      } else { // If the value is greater, go to the right
        if (temp.right === null) { // If no right child, place the new node here
          temp.right = newNode;
          return this; // Return the BST instance
        }
        temp = temp.right; // Move to the right child
      }
    }
  }

  // Method to perform a breadth-first traversal (BFS)
  dfs() {
    let current = this.root; // Start at the root
    let queue = []; // Initialize a queue for BFS
    let data = []; // Array to store the values

    queue.push(current); // Start with the root node

    while (queue.length) { // Process nodes in the queue
      current = queue.shift(); // Remove the first node from the queue
      data.push(current.value); // Add its value to the result array

      if (current.left) queue.push(current.left); // Add left child to the queue
      if (current.right) queue.push(current.right); // Add right child to the queue
    }
    return data; // Return the array of values in BFS order
  }

  // Method to perform a pre-order depth-first traversal (DFS)
  dfsPreOrder(node = this.root, data = []) {
    if (node === null) return data; // Base case: if the node is null, return data array

    data.push(node.value); // Add the current node's value
    if (node.left) this.dfsPreOrder(node.left, data); // Recursively visit left subtree
    if (node.right) this.dfsPreOrder(node.right, data); // Recursively visit right subtree
    return data; // Return the array of values in pre-order
  }

  // Method to perform a post-order depth-first traversal (DFS)
  dfsPostOrder(node = this.root, data = []) {
    if (node === null) return data; // Base case: if the node is null, return data array
    if (node.left) this.dfsPostOrder(node.left, data); // Recursively visit left subtree
    if (node.right) this.dfsPostOrder(node.right, data); // Recursively visit right subtree
    data.push(node.value); // Add the current node's value after visiting children
    return data; // Return the array of values in post-order
  }

  // Method to perform an in-order depth-first traversal (DFS)
  dfsInOrder(node = this.root, data = []) {
    if (node === null) return data; // Base case: if the node is null, return data array
    this.dfsInOrder(node.left, data); // Recursively visit left subtree
    data.push(node.value); // Add the current node's value
    this.dfsInOrder(node.right, data); // Recursively visit right subtree
    return data; // Return the array of values in in-order
  }
}

const tree = new BST(); // Create a new binary search tree
tree.insert(5); // Insert values into the BST
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree.dfs()); // Output BFS traversal
console.log(tree.dfsPreOrder()); // Output DFS pre-order traversal
console.log(tree.dfsPostOrder()); // Output DFS post-order traversal
console.log(tree.dfsInOrder()); // Output DFS in-order traversal
