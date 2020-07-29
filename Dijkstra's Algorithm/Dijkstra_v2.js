// All the code for implementing the Dijkstra's algorithm is exactly the same
// just that we are now using a priority queue implemented using a min binary heap

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        if (this.values.length > 1) this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let childIndex = this.values.length - 1;
        let childNode = this.values[childIndex];
        let parentIndex, parentNode;
        while (childIndex > 0) {
            parentIndex = Math.floor((childIndex - 1) / 2);
            parentNode = this.values[parentIndex];
            if (childNode.priority >= parentNode.priority) break;
            this.values[parentIndex] = childNode;
            this.values[childIndex] = parentNode;
            childIndex = parentIndex;
        }
    }

    dequeue() {
        const maxPriority = this.values[0];
        const newRoot = this.values.pop();
        if (this.values.length) {
            this.values[0] = newRoot;
            this.sinkDown();
        }
        return maxPriority;
    }

    sinkDown() {
        const length = this.values.length;
        const parentNode = this.values[0];
        let parentIdx = 0;
        let leftIdx, rightIdx;
        let leftChild, rightChild;
        while (true) {
            leftIdx = 2 * parentIdx + 1;
            rightIdx = 2 * parentIdx + 2;
            let swap = null;
            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (leftChild.priority < parentNode.priority) {
                    swap = leftIdx;
                }
            }
            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if (
                    (!swap && parentNode.priority > rightChild.priority) ||
                    (swap && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightIdx;
                }
            }
            if (!swap) break;
            this.values[parentIdx] = this.values[swap];
            this.values[swap] = parentNode;
            parentIdx = swap;
        }
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this.adjacencyList;
    }

    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({ node: vertex2, weight });
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
            return this.adjacencyList;
        }
    }

    dijkstra(start, finish) {
        const pq = new PriorityQueue();
        let distances = {};
        let previous = {};

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                pq.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                pq.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        let smallest;
        let candidate;
        let currentNeighbor;
        const path = [];

        while (pq.values.length) {
            smallest = pq.dequeue().val;

            if (smallest === finish) {
                let currentNode = finish;
                while (currentNode) {
                    path.push(currentNode);
                    currentNode = previous[currentNode];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    currentNeighbor = this.adjacencyList[smallest][neighbor];
                    let current = currentNeighbor.node;
                    candidate = currentNeighbor.weight + distances[smallest];
                    if (candidate < distances[current]) {
                        distances[current] = candidate;
                        previous[current] = smallest;
                        pq.enqueue(current, candidate);
                    }
                }
            }
        }
        return path.reverse();
    }
}

// const wg = new WeightedGraph();
// wg.addVertex("A");
// wg.addVertex("B");
// wg.addVertex("C");
// wg.addVertex("D");
// wg.addVertex("E");
// wg.addVertex("F");

// wg.addEdge("A", "B", 4);
// wg.addEdge("A", "C", 2);
// wg.addEdge("C", "D", 2);
// wg.addEdge("C", "F", 4);
// wg.addEdge("B", "E", 3);
// wg.addEdge("F", "E", 1);
// wg.addEdge("F", "D", 1);
// wg.addEdge("D", "E", 3);

// //  Example graph
// //            -----A-----
// //           /            \
// //       (2)/              \(4)
// //         /                \
// //        C---(2)---D        B
// //         \      /  \      /
// //       (4)\ (1)/    \(3) /(3)
// //           \  /      \  /
// //            F---(1)---E
