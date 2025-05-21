class Node {
  constructor(value) {
    // Each node in the binary search tree has a 'value', 'left', and 'right' property
    // The 'value' holds the data of the node, while 'left' and 'right' point to child nodes
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    // The root of the binary search tree starts as null
    this.root = null;
  }

  insert(value) {
    // Create a new node with the given 'value'
    const newNode = new Node(value);
    
    // If the tree is empty (root is null), set the root to be the new node
    if (this.root === null) {
      this.root = newNode;
      return this; // Return the tree after inserting the new node
    }

    // If the root exists, start traversing the tree to find the correct spot for the new node
    let temp = this.root;

    while (true) {
      // If a node with the same value already exists, do not insert it (avoid duplicates)
      if (newNode.value === temp.value) return undefined;

      // If the new value is smaller, go to the left side of the tree
      if (newNode.value < temp.value) {
        // If the left child is null, insert the new node here
        if (temp.left === null) {
          temp.left = newNode;
          return this; // Return the tree after inserting the new node
        } else {
          // Otherwise, keep traversing down the left subtree
          temp = temp.left;
        }
      } 
      // If the new value is greater, go to the right side of the tree
      else {
        // If the right child is null, insert the new node here
        if (temp.right === null) {
          temp.right = newNode;
          return this; // Return the tree after inserting the new node
        }
        // Otherwise, keep traversing down the right subtree
        temp = temp.right;
      }
    }
  }

  includes(value) {
    // If the tree is empty (no root), return false because the value cannot be found
    if (!this.root) return false;

    // Start traversing from the root
    let temp = this.root;

    // Traverse the tree until either the value is found or we reach a null node
    while (temp) {
      // If the value is smaller, go to the left subtree
      if (value < temp.value) {
        temp = temp.left;
      } 
      // If the value is larger, go to the right subtree
      else if (value > temp.value) {
        temp = temp.right;
      } 
      // If the value is equal to the current node's value, return true (value is found)
      else if (value === temp.value) {
        return true;
      }
    }

    // If the loop ends and no matching value is found, return false
    return false;
  }
}

const tree = new BST();
// Insert nodes with the values 5, 8, 3, 1, 7, and 9 into the binary search tree
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);

// Check if the value 9 exists in the tree and print the result (true if it exists, false if it doesn't)
console.log(tree.includes(9)); // Output: true
