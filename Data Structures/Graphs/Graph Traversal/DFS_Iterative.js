// I shall be using an adjacencyList along with the other instance methods defined in the 'Graphs' section, to implement DFS
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // To add a new vertex
    addVertex(vertex) {
        // check if there is already a key of the same name
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
    }

    // To add an undirected edge between two vertices
    addEdge(vertex1, vertex2) {
        // Search the adjacencyList for the keys of vertex1 and vertex2
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            // push 'vertex2' to vertex1's value array
            this.adjacencyList[vertex1].push(vertex2);
            // push 'vertex1' to vertex2's value array
            this.adjacencyList[vertex2].push(vertex1);
        }
        return this.adjacencyList;
    }

    // To remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            // filter out the unwanted vertex
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                (vertex) => vertex !== vertex2
            );
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                (vertex) => vertex !== vertex1
            );

            // return the new adjacenecyList
            return this.adjacencyList;
        }
    }

    // To remove a vertex;
    removeVertex(vertex) {
        // loop through all the elements stored in the value of key 'vertex' and call the removeEdge() method for all the pairs of vertices
        this.adjacencyList[vertex].map((v) => this.removeEdge(vertex, v));

        // delete the key of the 'vertex'
        delete this.adjacencyList[vertex];

        // return the new adjacencyList
        return this.adjacencyList;
    }

    // -----------------------
    // DFS Starts Here Onwards
    // -----------------------

    // My approach, does work, and is very similar to Colt's solution
    DFS(startVertex) {
        // Create a stack
        const stack = [];

        // Create an object to keep track of visited nodes
        const visited = {};

        // Create an array to store the results
        const result = [];

        // push() the startVertex to the stack
        stack.push(startVertex);

        // Loop until stack becomes empty
        while (stack.length) {
            // Pop() a node from the stack
            const currentNode = stack.pop();

            // Check if the currentNode has not been visited yet
            if (!visited[currentNode]) {
                // mark it as visited
                visited[currentNode] = true;

                // add it to the result array
                result.push(currentNode);

                // push() currentNode's neighbour nodes to the stack
                this.adjacencyList[currentNode].forEach((neighbor) => {
                    stack.push(neighbor);
                });
            }
        }

        // return the result
        return result;
    }

    // Colt's solution
    DFS(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                // Now check if the neighbor node has been visited
                if (!visited[neighbor]) {
                    // Mark it as being visited
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
}

// An example graph
// const g = new Graph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");

// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("D", "B");
// g.addEdge("C", "E");
// g.addEdge("D", "E");
// g.addEdge("D", "F");
// g.addEdge("E", "F");

//     A
//   /   \
//  B     C
// /       \
// D ----- E
//  \     /
//     F
