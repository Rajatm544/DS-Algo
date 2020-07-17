// The node in a DLL has 2 pointers, and also stores a value
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// The class for the doubly linked list, along with the following instance methods that are applicable on the DLL:
// push(), pop(), unshift(), shift(), get(), set(), insert(), remove()
class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // To add a new node at the end of the DLL

    // My approach, Same as Colt's solution
    push(val) {
        // Create a new node using this val
        const newNode = new Node(val);

        // If it's an empty list, set newNode to be the 'head' and the 'tail'
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the 'next' property of the tail, to be the newNode
            this.tail.next = newNode;

            // Set the 'prev' property of the newNode, to be the tail
            newNode.prev = this.tail;

            // Set the newNode to be the 'tail' of the DLL
            this.tail = newNode;
        }

        // Increment the length and return the list
        this.length++;
        return this;
    }

    // ------------------------------------------------------------------------

    // To remove an element from the end of the DLL

    // My approach, not completely correct as it won't work for length === 1
    pop() {
        // If list is empty, return undefined
        if (!this.head) return undefined;

        // Store the current tail in a new variable
        const oldTail = this.tail;

        // Set the 'tail' to be the node 'prev' to oldTail
        this.tail = oldTail.prev;

        // Set new tail's 'next' property to be null
        this.tail.next = null;

        // Set the oldTail's 'prev' property to be null
        oldTail.prev = null;

        // Decrement tail, and check if the list is now empty
        this.length--;

        // If the list is now empty, set the 'head' and the 'tail' to be null, to reflect the same
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        // return the oldTail
        return oldTail;
    }

    // Colt's solution
    pop() {
        if (!this.head) return undefined;
        const poppedNode = this.tail;

        // Check if length is 1, now itself
        if (this.length === 1) {
            // Set the head and the tail to be null
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    // ---------------------------------------------------

    // To remove the node at the beginning of the list

    // My approach, same as Colt's solution
    shift() {
        // Check is list is empty, return undefined
        if (!this.head) return undefined;

        // Store the current head
        const oldHead = this.head;

        // Check if this was the only node in the list
        if (this.length === 1) {
            // Set the head and the tail to be null
            this.head = null;
            this.tail = null;
        } else {
            // Otherwise, go ahead and set the new head to be oldHead's 'next' property
            this.head = oldHead.next;

            // Set new head's 'prev' property to be null
            this.head.prev = null;

            // Set oldHead's 'next' property to be null
            oldHead.next = null;
        }

        // Decrement length and return the oldHead
        this.length--;
        return oldHead;
    }

    // ------------------------------------------------------------------------------------

    // To add a new node at the beginning of the list

    // My approach, same as Colt's solution
    unshift(val) {
        // Create a new node using the val
        const newNode = new Node(val);

        // If it's an empty list, then set the 'head' and the 'tail' to be the newNode
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the 'next' property of the newNode to be the current head
            newNode.next = this.head;

            // Set the 'prev' property of the current head to be the newNode
            this.head.prev = newNode;

            // Set the 'head' property of the list to be the newNode
            this.head = newNode;
        }

        // Increment the length and return the list
        this.length++;
        return this;
    }

    // --------------------------------------------------------

    // To access a node at a particular index

    // My approach, same as Colt's solution
    get(index) {
        // Check for invalid index
        if (index < 0 || index >= this.length) return null;

        // set the middle index of the linked list
        const middle = Math.floor(this.length / 2);
        let currentNode;

        // Check if index is less than or equal to the middle
        if (index <= middle) {
            // Start a counter from 0, up until the index
            let counter = 0;

            // Accessing the nodes starting from the 'head'
            currentNode = this.head;
            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }
        } else {
            // Start a counter from the last node's position
            let counter = this.length - 1;

            // Accessing the nodes, staring from the 'tail'
            currentNode = this.tail;
            while (counter !== index) {
                currentNode = currentNode.prev;
                counter--;
            }
        }

        // Either way, the currentNode will be the node at the position 'index'
        return currentNode;
    }

    // --------------------------------------------------------------------------

    // To set a new value to the node at a particular node

    // My approach, same as Colt's solution
    set(index, value) {
        // Call the get() method using this index
        const foundNode = this.get(index);

        // If a valid node was returned, set its new value and return true
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        // Otherwise, return false
        return false;
    }

    // --------------------------------------------------------------------------------

    // To insert a new node at a particular position

    // My approach, doesn't always return a boolean
    insert(index, val) {
        // If invalid index, return false
        if (index < 0 || index > this.length) return false;

        // If index === 0, call unshift() method
        if (index === 0) return this.unshift(val);

        // If index === length, call push() method
        if (index === this.length) return this.push(val);

        // If the following is executed, it means that the index is somewhere in the middle of the list

        // Call get() method to return the node at position (index - 1)
        const prevNode = this.get(index - 1);

        // Create a new node
        const newNode = new Node(val);

        // Make all the necessary pointer changes
        // Set newNode's 'next' property to prevNode's 'next'
        newNode.next = prevNode.next;

        // Set prevNode's 'next' property to be the newNode
        prevNode.next = newNode;

        // Set newNode's 'prev' property to be the prevNode
        newNode.prev = prevNode;

        // Last pointer correction
        newNode.next.prev = newNode;

        // Increment the length and return true
        this.length++;
        return true;
    }

    // Colt's solution, very similar to my approach
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        // Double negation returns a boolean
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        // Patching the 4 pointers, done more verbosely
        const newNode = new Node(val);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        newNode.next = afterNode;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }
    // ----------------------------------------------------------------

    // To remove a node from the particular position

    // My approach, same as Colt's solution
    remove(index) {
        // If invalid index, return false
        if (index < 0 || index >= this.length) return false;

        // If index === 0, call shift() method
        if (index === 0) return this.shift();

        // If index === length - 1, call the pop() method
        if (index === this.length - 1) return this.pop();

        // If the following code is being executed, then the index is somewhere in between.

        // Get the node at the position 'index'
        const removedNode = this.get(index);

        // Patch the pointers around removedNode.
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        // Set the 'prev' and the 'next' properties of removedNode to be null
        removedNode.next = null;
        removedNode.prev = null;

        // Decrement the length and return true;
        this.length--;
        return true;
    }
}
