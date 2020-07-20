// Create a new tree to work with
// I shall use a BST here, but this apprach works the same for all other types of trees.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;

            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // -----------------------------------------------
    // The code for the BFS starts from here onwards
    // -----------------------------------------------

    BFS() {
        // Create a queue and an array
        const q = []; // Array implementation of a queue
        const result = [];

        // Temporary variable to store a node that's dequeued
        let tempNode;

        // Enqueue the 'root' node of the tree
        q.push(this.root);

        // Loop until the queue has at least one node in it
        while (q.length) {
            // Perform dequeue operation and store it to a temporary variable
            tempNode = q.shift();

            // push tempNode's value to the 'result' array
            result.push(tempNode.val);

            // Check if tempNode has a 'left' property and enqueue the same
            if (tempNode.left) q.push(tempNode.left);

            // Check if tempNode has a 'right' property and enqueue the same
            if (tempNode.right) q.push(tempNode.right);
        }

        // return the result
        return result;
    }
}
