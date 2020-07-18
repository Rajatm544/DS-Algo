// Implementing using arrays

const queue = [];

// 1st method

// Using push() to add new queue elements
queue.push("1"); // ["1"]
queue.push("2"); // ["1", "2"]
queue.push("3"); // ["1" ,"2", "3"]
console.log(queue);

// Using shift() to remove the queue elements
queue.shift(); // "1"
queue.shift(); // "2"
queue.shift(); // "3"
console.log(queue);

// 2nd method

// Using unshift() to add new queue elements
queue.unshift("1"); // ["1"]
queue.unshift("2"); // ["2", "1"]
queue.unshift("3"); // ["3", "2", "1"]
console.log(queue);

// Using pop() to remove the queue elements
queue.pop(); // "1"
queue.pop(); // "2"
queue.pop(); // "3"
console.log(queue);

// -----------------------------------------------------------------------

// Implementing using Singly Linked List

// The node class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Class to represent the queue datastructure along with its enqueue() and dequeue() methods
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = null;
    }

    // To add an element to the queue

    // My approach, same as Colt's solution
    enqueue(val) {
        // Create a new node
        let newNode = new Node(val);

        // If the queue is empty, set the newNode to be the 'first' and the 'last' node of the queue
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // Store the current 'last' node in a new variable
            const prevLast = this.last;

            // Set prevLast's 'next' property to be the newNode
            prevLast.next = newNode;

            // Set newNode to be the new 'last' node
            this.last = newNode;
        }

        // Increment the size and return it
        this.size++;
        return this.size;
    }

    // To remove an element from the queue

    // My approach, similar to Colt's solution
    dequeue() {
        // Check if the queue is empty, return null
        if (!this.size) return null;

        // Store the current 'first' node
        const removedNode = this.first;

        // Check if the queue has only 1 element
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removedNode.next;
            removedNode.next = null;
        }

        // Decrement size and return the value of the removedNode
        this.size--;
        return removedNode.val;
    }
}
