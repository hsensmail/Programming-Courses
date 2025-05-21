class Graph {
  constructor() {
    this.adjacencyList = {}; // Initializes an empty object to store the adjacency list of the graph
  }

  // Method to add a vertex to the graph
  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) { // Check if the vertex does not already exist
      this.adjacencyList[vtx] = []; // Add the vertex with an empty array of edges
      return true; // Return true to indicate the vertex was added
    }
    return false; // Return false if the vertex already exists
  }

  // Method to add an edge between two vertices
  addEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) { // Check if both vertices exist
      this.adjacencyList[vtx1].push(vtx2); // Add vtx2 to the adjacency list of vtx1
      this.adjacencyList[vtx2].push(vtx1); // Add vtx1 to the adjacency list of vtx2 (undirected graph)
      return true; // Return true to indicate the edge was added
    }
    return false; // Return false if either vertex does not exist
  }

  // Method to remove an edge between two vertices
  removeEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) { // Check if both vertices exist
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter( // Remove vtx2 from the adjacency list of vtx1
        (v) => v !== vtx2
      );

      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter( // Remove vtx1 from the adjacency list of vtx2
        (v) => v !== vtx1
      );
      return true; // Return true to indicate the edge was removed
    }
    return false; // Return false if either vertex does not exist
  }

  // Method to remove a vertex and all its edges from the graph
  removeVertex(vtx) {
    if (!this.adjacencyList[vtx]) return undefined; // If the vertex does not exist, return undefined

    for (let neighbor of this.adjacencyList[vtx]) { // Iterate through all neighbors of the vertex
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter( // Remove the vertex from the neighbors' adjacency lists
        (v) => v !== vtx
      );
    }

    delete this.adjacencyList[vtx]; // Delete the vertex from the adjacency list
    return this; // Return the graph instance to allow method chaining
  }
}

let g = new Graph(); // Create a new instance of the Graph class

// Example 1 (Commented Out)
// g.addVertex("A"); // Add vertex "A"
// g.addVertex("B"); // Add vertex "B"
// g.addEdge("A", "B"); // Add an edge between "A" and "B"

// Example 2 (Commented Out)
// g.addVertex("A"); // Add vertex "A"
// g.addVertex("B"); // Add vertex "B"
// g.addVertex("C"); // Add vertex "C"
// g.addEdge("A", "B"); // Add an edge between "A" and "B"
// g.addEdge("B", "C"); // Add an edge between "B" and "C"
// g.addEdge("C", "A"); // Add an edge between "C" and "A"
// console.log(g); // Log the graph structure
// g.removeEdge("A", "B"); // Remove the edge between "A" and "B"
// console.log(g); // Log the updated graph structure

// Example 3 (Active)
// Add vertices "A", "B", "C", and "D"
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

// Add edges between the vertices
g.addEdge("A", "B"); // Edge between "A" and "B"
g.addEdge("A", "C"); // Edge between "A" and "C"
g.addEdge("A", "D"); // Edge between "A" and "D"
g.addEdge("B", "D"); // Edge between "B" and "D"
g.addEdge("C", "D"); // Edge between "C" and "D"

// Log the graph structure after adding vertices and edges
console.log(g);

// Remove vertex "D" and all edges connected to it
g.removeVertex("D");

// Log the graph structure after removing vertex "D"
console.log(g);
