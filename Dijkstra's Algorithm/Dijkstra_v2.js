// All the code for implementing the Dijkstra's algorithm is exactly the same
// just that we are now using a priority queue we defined in the other section

// Class for a priority queue
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.nodes = [];
    }

    // To implement the 'enqueue' operation
    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.nodes.push(newNode);
        if (this.nodes.length > 1) this.bubbleUp();
        return this.nodes;
    }

    // the helper method 'bubbleUp'
    bubbleUp() {
        let childIndex = this.nodes.length - 1;
        let childNode = this.nodes[childIndex];
        let parentIndex, parentNode;
        while (childIndex > 0) {
            parentIndex = Math.floor((childIndex - 1) / 2);
            parentNode = this.nodes[parentIndex];
            if (childNode.priority >= parentNode.priority) break;
            this.nodes[parentIndex] = childNode;
            this.nodes[childIndex] = parentNode;
            childIndex = parentIndex;
        }
    }
    // To dequeue the highest priority node, or the root node
    dequeue() {
        const maxPriority = this.nodes[0];
        const newRoot = this.nodes.pop();
        if (this.nodes.length) {
            this.nodes[0] = newRoot;
            this.sinkDown();
        }
        return maxPriority;
    }

    sinkDown() {
        const length = this.nodes.length;
        const parentNode = this.nodes[0];
        let parentIdx = 0;
        let leftIdx, rightIdx;
        let leftChild, rightChild;
        while (true) {
            leftIdx = 2 * parentIdx + 1;
            rightIdx = 2 * parentIdx + 2;

            let swap = null;
            if (leftIdx < length) {
                leftChild = this.nodes[leftIdx];
                if (leftChild.priority < parentNode.priority) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                rightChild = this.nodes[rightIdx];
                if (
                    (!swap && parentNode.priority > rightChild.priority) ||
                    (swap && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightIdx;
                }
            }

            if (!swap) break;
            this.nodes[parentIdx] = this.nodes[swap];
            this.nodes[swap] = parentNode;

            parentIdx = swap;
        }
    }
}

// A weighted graph is required
class WeightedGraph {
    constructor() {
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

    // ---------------------------------------------
    // DIJKSTRA'S ALGORITHM STARTS FROM HERE ONWARDS
    // ---------------------------------------------

    // My approach, does work
    // dijkstra(startVertex, endVertex) {
    //     // Create an object to store the shortest distances for each vertex from the startVertex
    //     let distances = {};
    //     // Store all the vertices in the adjacencyList as keys, set all the values to Infinity except the startVertex, whose value will be et to 0
    //     for (let key in this.adjacencyList) {
    //         distances[key] = key === startVertex ? 0 : Infinity;
    //     }

    //     // Create a priority queue to access the node with the next shortest distance from the startVertex, for each iteration
    //     // Set initial elements of the queue to be similar to the 'distances' object
    //     const priorityQ = new PriorityQueue();
    //     for (let key in distances) {
    //         priorityQ.enqueue(key, distances[key]);
    //     }

    //     // Create an object to store the node accessed previous to all the vertices in the adjacencyList, to form the shortest path
    //     let previous = {};
    //     // Store all the vertices in the adjacencyList as keys. Set all the values to be null
    //     for (let key in this.adjacencyList) {
    //         previous[key] = null;
    //     }

    //     // varible to store the dequeued vertex
    //     let currentVertex;

    //     // variable to store distance between a node and the startVertex
    //     let distance = 0;

    //     // Loop as long as the queue isn't empty
    //     while (priorityQ.nodes.length) {
    //         // Dequeue and store it
    //         currentVertex = priorityQ.dequeue().node; // becuase the dequeue() returs {node: "", prioirity}

    //         // break if currentVertex is same as the endVertex
    //         if (currentVertex === endVertex) break;

    //         // Otherwise, loop through the neighbor vertices of currentVertex
    //         this.adjacencyList[currentVertex].forEach((neighbor) => {
    //             // Calculate distance between neighbor and startNode
    //             distance = neighbor.weight + distances[currentVertex];

    //             // Check if this distance is less than the one stored in the 'distances' object
    //             if (distance < distances[neighbor.node]) {
    //                 // update the 'distances' object with the new distance
    //                 distances[neighbor.node] = distance;

    //                 // update the 'previous' object to set neighbor's value to be currentVertex
    //                 previous[neighbor.node] = currentVertex;

    //                 // Enqueue the neighbor with its new distance as its priority
    //                 priorityQ.enqueue(neighbor.node, distance);
    //             }
    //         });
    //     }

    //     // To return an array of the path in terms of nodes in the required order
    //     // We can do this by tracing the previous nodes from the 'previous' object
    //     const result = [];
    //     // To keep track of current node
    //     let resNode = endVertex;

    //     // Keep looping until we reach a null node (startVertex)
    //     while (resNode) {
    //         // Store the resNode in the array
    //         result.push(resNode);
    //         // Set the new resNode to be the value corresponding to resNode in the 'previous' object
    //         resNode = previous[resNode];
    //     }
    //     result.reverse(); // Because our shortest path currently goes from endVertex -> startVertex
    //     const shortestPathWeight = distances[endVertex];
    //     return { result, shortestPathWeight };
    // }

    // Colt's solution
    dijkstra(start, finish) {
        // Create all the required datastructures
        const nodes = new PriorityQueue();
        let distances = {};
        let previous = {};

        // Initial state setup
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // variable to store dequeued node
        let smallest;
        // variable to hold temporary distance of node from start
        let candidate;
        // variable to hold current neighbor
        let currentNeighbor;
        const path = [];

        while (nodes.nodes.length) {
            smallest = nodes.dequeue().node;

            if (smallest === finish) {
                // Build up the path to return and break
                let currentNode = finish;
                while (currentNode) {
                    path.push(currentNode);
                    currentNode = previous[currentNode];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                // Loop through smallest's neighbors
                for (let neighbor in this.adjacencyList[smallest]) {
                    currentNeighbor = this.adjacencyList[smallest][neighbor];
                    let current = currentNeighbor.node;
                    candidate = currentNeighbor.weight + distances[smallest];
                    if (candidate < distances[current]) {
                        distances[current] = candidate;
                        previous[current] = smallest;
                        nodes.enqueue(current, candidate);
                    }
                }
            }
        }
        return path.reverse();
    }
}

const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("B", "E", 3);
wg.addEdge("F", "E", 1);
wg.addEdge("F", "D", 1);
wg.addEdge("D", "E", 3);

//  Example graph
//            -----A-----
//           /            \
//       (2)/              \(4)
//         /                \
//        C---(2)---D        B
//         \      /  \      /
//       (4)\ (1)/    \(3) /(3)
//           \  /      \  /
//            F---(1)---E
