// Since Dijkstra's algorithm only works with a weighted graph, I shall define a class for it
class WeightedGraph {
    constructor() {
        // implementing a graph as an adjacency list
        this.adjacencyList = {};
    }

    // To add new vertices
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this.adjacencyList;
    }

    // To add a new undirected weighted edge between two vertices
    addEdge(vertex1, vertex2, weight) {
        // Check if the two vertices are valid
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            // Store an object storing the keys for the node as well as the weight of that edge
            this.adjacencyList[vertex1].push({ node: vertex2, weight });
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
            return this.adjacencyList;
        }
    }
}

const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");

wg.addEdge("A", "B", 12);
wg.addEdge("C", "B", 2);
wg.addEdge("A", "C", 36);
wg.addEdge("D", "C", 92);
