// This program uses a BST to implement this algorithm, but th logic remains the same for any other tree as well
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

    // ----------------------------------------------------------
    // The code for the DFS(Post-Order) starts from here onwards
    // ----------------------------------------------------------

    // My approach, Same as Colt's solution
    DFS() {
        // Store the 'root' node
        const current = this.root;

        // Create a new array to store the result
        const result = [];

        // Helper() function to recursively perform DFS in the post-order form
        function traverse(node) {
            // The order in which we perform the next three steps is what makes it a Post-order DFS

            // If the node has a 'left' property, recursively call the traverse() method using it
            if (node.left) traverse(node.left);

            // If the node has a 'right' property, recursively call the traverse() method using it
            if (node.right) traverse(node.right);

            // Push the node's value to the result array
            result.push(node.val);
        }

        // Invoke the helper function using the 'current' node
        traverse(current);

        // return the result;
        return result;
    }
}
