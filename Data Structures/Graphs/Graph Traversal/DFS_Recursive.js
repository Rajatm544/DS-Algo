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
        // Create an array to store result
        const result = [];

        // Store this adjacencyList temporarily, to access it within the helper method
        // We do this becuase the context for 'this' changes within the helper fn
        const graph = this.adjacencyList;

        // Create an object to keep track of visited vertices
        const visitedVertices = {};

        // Define helper method for recursive DFS
        function helperDFS(node) {
            // Store the node's neighbours in an new variable
            const currentNode = graph[node];

            // Base case is that the node is empty
            if (!node) return;

            // Otherwise, push the node to the result array
            result.push(node);
            // Add it to visitedVertices and set its value to true
            visitedVertices[node] = true;

            // iterate through nodes which are neighbours to the currentNode
            for (let neighbourNode of currentNode) {
                // If this neighbourNode isn't visited, call this helperDFS() method recursively using it
                if (!visitedVertices[neighbourNode]) helperDFS(neighbourNode);
            }
        }

        // Invoke the helperDFS() method using the startVertex
        helperDFS(startVertex);

        // return the result array
        return result;
    }

    // Colt's solution
    DFS(start) {
        const result = [];
        const visited = {};

        // store this.adjacencyList in this scope as well
        const adjacencyList = this.adjacencyList;

        // Invoke the helper funtion immediately, using 'start'
        (function helperDFS(node) {
            if (!node) return;

            result.push(node);
            visited[node] = true;

            // He has used a forEach to iterate
            adjacencyList[node].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    return helperDFS(neighbour);
                }
            });
        })(start);

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
