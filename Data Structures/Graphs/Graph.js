// We are implementing graphs in the form of adjacency list
class Graph {
    constructor() {
        // We need to maintian a hash table (adjacency list)
        this.adjacencyList = {};
    }

    // To add a new vertex

    // My approach
    addVertex(vertex) {
        // add a new key-value pair to our hash table
        this.adjacencyList[vertex] = [];
        return this.adjacencyList;
    }

    // Colt's solution
    addVertex(vertex) {
        // check if there is already a key of the same name
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
    }

    // ------------------------------------------------

    // To add an undirected edge between two vertices

    // My approach, same as Colt's solution
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

    // --------------------------------------------------------

    // To remove an edge between two vertices

    // My approach
    removeEdge(vertex1, vertex2) {
        // Check if the two vertices are valid keys in the adjacencyList
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            // loop through v1Edges to remove 'vertex2'
            this.adjacencyList[vertex1].splice(
                this.adjacencyList[vertex1].indexOf(vertex2),
                1
            );

            // Search the key-value pair corresponding to vertex2
            // Remove the required vertex from the subarray v2Edges
            this.adjacencyList[vertex2].splice(
                this.adjacencyList[vertex2].indexOf(vertex1),
                1
            );

            // return the new graph
            return this.adjacencyList;
        }
    }

    // Colt's solution
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

    // ---------------------------------------------------------------

    // To remove a vertex;

    // My approach, similar as Colt's solution
    removeVertex(vertex) {
        // loop through all the elements stored in the value of key 'vertex' and call the removeEdge() method for all the pairs of vertices
        this.adjacencyList[vertex].map((v) => this.removeEdge(vertex, v));

        // delete the key of the 'vertex'
        delete this.adjacencyList[vertex];

        // return the new adjacencyList
        return this.adjacencyList;
    }
}
