// Implement using arrays

// We can either use push() and pop(), or we can also use shift() and unshift(). Since they both give us the LIFO aproach
// But if we are implementing stacks using arrays, it is more efficient to do so using the push() and pop() methods

const stack = [];

// add new elements to the stack, using push()
stack.push("1"); // ["1"]
stack.push("2"); // ["1", "2"]
stack.push("3"); // ["1", "2", "3"]
console.log(stack);

// Removing the stack elements, using pop()
stack.pop(); // "3"
stack.pop(); // "2"
stack.pop(); // "1"
console.log(stack);

// We can also use unshift(), to add the elements to the stack
stack.unshift("1"); // ["1"]
stack.unshift("2"); // ["2", "1"]
stack.unshift("3"); // ["3", "2", "1"]
console.log(stack);

// Removing stack elements using shift(), will now still be a LIFO approach
stack.shift(); // "3"
stack.shift(); // "2"
stack.shift(); // "1"
console.log(stack);

// -------------------------------------------------------------------------------------

// Implementation using the singly linked list.

// The node class
class Node {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = null;
    }

    // To add a new node at the beginning of the stack

    // My approach, same as Colt's solution
    push(val) {
        // create a new node
        const newNode = new Node(val);

        // If the stack is empty, set the newnode as both the first and the last node
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // set the newNode as the new 'first' node, and connect to the rest of the stack elements
            let currentFirst = this.first;
            newNode.next = currentFirst;
            this.first = newNode;
        }
        // increment size and return it
        this.size++;
        return this.size;
    }

    // Method to remove a node from the beginning of the stack, in LIFO manner

    // My approach
    pop() {
        // If stack is empty, return null
        if (!this.size) return null;

        // Store the current 'first' node
        const poppedNode = this.first;

        // If the size is 1, set the 'first' and the 'last' properties to null
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            // Set the new 'first' node of the stack
            this.first = poppedNode.next;
            // Set the 'next' property of the poppedNode to be null
            poppedNode.next = null;
        }
        // Decrement the size, and return the value stored in the poppedNode
        this.size--;
        return poppedNode.val;
    }
}

const stack = new Stack();
