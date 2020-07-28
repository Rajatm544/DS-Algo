// An implementation of priority queue which doesn't involve using a min binary heap

class PriorityQueue {
    constructor() {
        // Stroing nodes in an array
        this.values = [];
    }

    // To enqueue according to the priority
    enqueue(val, priority) {
        this.values.push({ node: val, priority });
        this.values.sort((a, b) => a.priority - b.priority); // Sorting based on priority of nodes, O(n log n)
    }

    // Dequeue the highest priority
    dequeue() {
        return this.values.shift();
    }
}

const pq = new PriorityQueue();
pq.enqueue("B", 10);
pq.enqueue("E", 8);
pq.enqueue("C", 5);
pq.enqueue("D", 2);
