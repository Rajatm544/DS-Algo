// I shall be using an adjacencyList along with the other instance methods defined in the 'Graphs' section, to implement BFS
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
    // BFS Starts Here Onwards
    // -----------------------

    // My approach, does work, is similar to Colt's solution
    BFS(startVertex) {
        // Create a queue
        const q = [];

        // Create an array to store the result
        const result = [];

        // Create an object to keep track of the visited vertices
        const visited = {};

        // Enqueue the startVertex and set it as being visited
        q.push(startVertex);
        visited[startVertex] = true;

        // Variable to store the current node
        let currentNode;

        // Loop until queue becomes empty
        while (q.length) {
            // Perform dequeue() and store it as currentNode
            currentNode = q.shift();

            // Push currentNode to the result array
            result.push(currentNode);

            // Loop through the neighbor nodes of currentNode
            this.adjacencyList[currentNode].forEach((neighbor) => {
                // Check if neighbor has not been visited
                if (!visited[neighbor]) {
                    // Set it to be visited
                    visited[neighbor] = true;

                    // Enqueue the neighbor
                    q.push(neighbor);
                }
            });
        }

        // Return result array
        return result;
    }

    // Colt's solution
    BFS(start) {
        const q = [start];
        const visited = {};
        const result = [];

        visited[start] = true;
        let currentNode;

        while (q.length) {
            currentNode = q.shift();
            result.push(currentNode);

            // Note: To reverse the order in which the nodes of the same level are traversed, just reverse the values subarray as follows:
            // this.adjacencyList[currentNode].reverse().forEach(.....)
            this.adjacencyList[currentNode].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
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
