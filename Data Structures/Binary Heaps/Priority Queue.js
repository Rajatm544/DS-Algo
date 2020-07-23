// Implemented using a min binary heap
// Node class, to store a value and a priority
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// the minBinaryHeap class that's been changed to be called a Priority Queue
class PriorityQueue {
    constructor() {
        // Stores an array of nodes
        this.nodes = [];
    }

    // To implement the 'enqueue' operation

    // My approach, same as Colt's
    enqueue(val, priority) {
        // Create a new node
        const newNode = new Node(val, priority);

        // Add it to the last index of the 'nodes' array
        this.nodes.push(newNode);

        // If the priority queue has more than 1 node, then invoke bubbleUp()
        if (this.nodes.length > 1) this.bubbleUp();

        // return the priority queue
        return this.nodes;
    }

    // the helper method 'bubbleUp'
    bubbleUp() {
        // Store the index of the latestNode
        let childIndex = this.nodes.length - 1;

        // Store the last childNode added to the queue
        let childNode = this.nodes[childIndex];
        let parentIndex, parentNode;

        // loop until the correct position is found
        while (childIndex > 0) {
            // find the index of its parent nodes
            parentIndex = Math.floor((childIndex - 1) / 2);

            // Store the parentNode
            parentNode = this.nodes[parentIndex];

            // If childNode's priority is greater in value than the parentNode's priority, end the loop
            if (childNode.priority >= parentNode.priority) break;

            // Otherwise, swap them
            this.nodes[parentIndex] = childNode;
            this.nodes[childIndex] = parentNode;

            // Set the new childIndex to be the current parentIndex
            childIndex = parentIndex;
        }
    }
    // ----------------------------------------------------

    // To dequeue the highest priority node, or the root node

    // My approach, Same as Colt's
    dequeue() {
        // Remove the root node and replce it with the last node in the array
        const maxPriority = this.nodes[0];
        const newRoot = this.nodes.pop();

        // If they queue isn't empty, perform the sinkDown operation
        if (this.nodes.length) {
            this.nodes[0] = newRoot;
            this.sinkDown();
        }

        // return the maxPriority
        return maxPriority;
    }

    // sinkDown() helper method, similar to the logic used in max binary heaps
    sinkDown() {
        const length = this.nodes.length;

        // store node which is to be sinked down to the correct position
        const parentNode = this.nodes[0];

        // variables to keep track of current parent index
        let parentIdx = 0;

        // variables to keep track of child indices
        let leftIdx, rightIdx;

        // variable to store the left and right child nodes
        let leftChild, rightChild;

        while (true) {
            // calculate child node index
            leftIdx = 2 * parentIdx + 1;
            rightIdx = 2 * parentIdx + 2;

            let swap = null;
            // Check if lchild indices aren't out of bounds
            // Assign 'swap', the index of the childnode with a higher priority, after comparing it with parentNode's priority
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

            // terminate if no swap
            if (!swap) break;
            // otherwise, swap the parentNode with the correct childNode
            this.nodes[parentIdx] = this.nodes[swap];
            this.nodes[swap] = parentNode;

            // Set the new parentIdx to be that of the swap
            parentIdx = swap;
        }
    }
}

const pq = new PriorityQueue();
