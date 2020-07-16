// A single node class, stores a value and a pointer to the next node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// The class for a SLL, including the instance methods for all the following functions applicable on a SLL:
// push(), pop(), unshift(), shift(), get(), set(), insert(), remove(), reverse()
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adding a node at the end of a list
    // My approach, same as Colt's
    push(val) {
        // Create a new node
        const newNode = new Node(val);
        // If it's an empty list, set the head and the tail to be the same node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the 'next' property of the current tail, to be the new node
            this.tail.next = newNode;
            // Set this new node as the new tail of the list
            this.tail = newNode;
        }
        // Increment the length of the list
        this.length++;
        return this;
    }

    // --------------------------------------------------

    // Removing an element from the end of the list

    // My approach, not completely correct
    pop() {
        let currentNode = this.head;
        let prevNode = null;
        // If it's an empty list, return undefined
        if (!this.head) {
            return undefined;
        } else {
            // Using 2 pointers to keep track of current node, and the node before this, while reaching the tail of the list
            while (currentNode.next) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            // Set prevNode's next pointer to null
            prevNode.next = null;
            // Set the prevNode as the new tail
            this.tail = prevNode;
            // Reduce length of the list by 1
            this.length--;
            // return the value stored in the tail
            return currentNode.val;
        }
    }

    // Colt's solution
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // Set new tail, and then set its 'next' property as null
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        // Case where there was only 1 element in the list, and that has been popped
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current.val;
    }

    // --------------------------------------------------------------------

    // Removing a node from the start of the list

    // My approach, same as Colt's solution
    shift() {
        // If an empty list, return undefined
        if (!this.head) return undefined;

        // Store the current head in a variable
        const prevHead = this.head;
        // Set the list's new head property as the prevHead's next node
        this.head = prevHead.next;
        // Decrement length by 1
        this.length--;

        // Case where there was only 1 element in the list, and that has been shifted
        if (this.length === 0) {
            this.tail = null;
        }

        return prevHead.val;
    }

    // --------------------------------------------------------------------

    // Adding a new node at the start of the list

    // My approach, same as Colt's solution
    unshift(val) {
        // Create a new node
        const newHead = new Node(val);

        // If empty list, make this new node both the head and the tail of the list
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            // Set the newHead's 'next' property as the present list's head
            newHead.next = this.head;
            // Set the newHead as the head of the list
            this.head = newHead;
        }
        // Increment the length of the list
        this.length++;
        // Return the list
        return this;
    }

    // ----------------------------------------------------------------

    // Accessing a node from a particular position

    // My approach
    get(index) {
        // If invalid index, then return undefined
        if (index < 0 || index > this.length - 1) {
            return undefined;
        }
        let counter = index;
        let currentNode = this.head;
        // Start traversing the list, up until that position
        while (counter > 0) {
            currentNode = currentNode.next;
            counter--;
        }
        // return the node at that position
        return currentNode;
    }

    // Colt's solution, slightly different to my approach
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // ------------------------------------------------------------

    // Setting the value of a node at a particular position

    // My approach, same as Colt's
    set(index, value) {
        // 'get()' the node
        const reqNode = this.get(index);
        // If node is found, set its value
        if (reqNode) {
            reqNode.val = value;
            return true;
        }
        return false;
    }

    // ----------------------------------------------------------------

    // To insert a node at a particular position

    // My approach, works very well, but doesn't return a boolean incase of index === 0 or index === this.length
    insert(index, val) {
        // If index is invalid, return false
        if (index < 0 || index > this.length) return false;

        // If index is 0, call the unshift() method
        if (index === 0) return this.unshift(val);

        // If index is equal to the length, call the push() method
        if (index === this.length) return this.push(val);

        // If the following is executed, it means that the index is somewhere in between the linked list
        const newNode = new Node(val);

        // Call get() method to find the node at position (index - 1)
        const prevNode = this.get(index - 1);

        // Set the 'next' property of newNode to be node at index position
        newNode.next = prevNode.next;

        // Set the 'next' property of prevNode to be the newNode
        prevNode.next = newNode;

        // Increment length and return true
        this.length++;
        return true;
    }

    // Colt's solution, is very similar to my approach, but always returns a boolean.
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        // Double negation helps convert the return value to a boolean.
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        // In case the index lies somewhere in the middle
        const newNode = new Node(val);
        const prevNode = this.get(index - 1);

        newNode.next = prevNode.next;
        prevNode.next = newNode;

        this.length++;
        return true;
    }

    // -----------------------------------------------------------------------------

    // To remove a node from the particular position

    // My approach, same as Colt's solution
    remove(index) {
        // If invalid index, return null/false/undefined
        if (index < 0 || index >= this.length) return false;

        // If index === 0, call the shift() method
        if (index === 0) return this.shift();

        // If index === length - 1, then call the pop() method
        if (index === this.length - 1) return this.pop();

        // If the following code is executed then the index is somewhere in the middle of the linked list
        // Get the node at position (index - 1)
        const prevNode = this.get(index - 1);

        // Get the node at position 'index', or the node to be removed
        const removedNode = prevNode.next;

        // Set prevNode's 'next' property to be removedNode's next
        prevNode.next = removedNode.next;

        // Decrement length and return removedNode's val
        this.length--;
        return removedNode.val;
    }

    // ---------------------------------------------------------------------------

    // To reverse the linked list, in place (meaning, without making a new linked list)

    // My approach, doesn't work
    reverse() {
        [this.head, this.tail] = [this.tail, this.head];

        let prevNode = null;
        let currentNode = this.head;

        // until we reach the tail
        while (currentNode.next) {
            // Temporarily store the node which is 'next' to the currentNode, so as to not lose the linked list
            let nextNode = currentNode.next;

            // Set the 'next' property of the currentNode, to be the prevNode
            currentNode.next = prevNode;

            // Make currentNode, the new prevNode for the next iteration
            prevNode = currentNode;

            // Make the nextNode, the new currentNode for the next iteration
            currentNode = nextNode;
        }

        return this;
    }

    // Colt's solution
    reverse() {
        // Swap the head and the tail, after string the head as the currentNode
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        // let prevNode = null in the beginning, as it is now acting as te tail of the reversed list
        let prevNode = null;
        let nextNode;

        // Loop over the list once
        for (let i = 0; i < this.length; i++) {
            // Store currentNode.next as the 'nextNode', so as to not lose the linked list
            nextNode = currentNode.next;

            // Set the currentNode's 'next' pointer to the prevNode
            currentNode.next = prevNode;

            // Change the prevNode to be the currentNode, for the next interation
            prevNode = currentNode;

            // Let the nextNode become the currentNode for the next iteration
            currentNode = nextNode;
        }

        // return the reversed list
        return this;
    }
}
