// A node in a BST needs to store a value, and also point to its left and right nodes.
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// The following class reprevsents the Binary Seacrh Tree Datastructure, along with the instance methods
class BinarySearchTree {
    constructor() {
        // A starting node is the only property needed to be maintained
        this.root = null;
    }

    // To insert a new node at the proper position in the BST

    // My approach, doesn't handle duplicate insertions, but very similar to Colt's solution
    insert(val) {
        // Create a new node using the value passed.
        let newNode = new Node(val);

        // Check if the root isn't present
        if (!this.root) {
            // Set the 'root' property to be the newNode
            this.root = newNode;
            // return the tree
            return this;
        } else {
            // Let the current node under consideration be the root node
            let currentNode = this.root;
            // Continuosly comapare the 'left' and 'right' nodes, until the proper position to insert the newNode is found
            while (true) {
                // If the value passed is lesser than the currentNode
                if (val < currentNode.val) {
                    // Check if there isn't a node at the 'left' position of the currentNode;
                    if (!currentNode.left) {
                        // Set currentNode's 'left' property to be the newNode and return the BST
                        currentNode.left = newNode;
                        return this;
                    }
                    // Else continue searching after setting the new currentNode to be the node to the 'left' of the currentNode.
                    currentNode = currentNode.left;
                } else if (val > currentNode.val) {
                    // This means that the value must be inserted somewhere in the right side of the BST
                    // Check if there isn't a node at the 'right' property of the current node
                    if (!currentNode.right) {
                        // Set this property to be the newNode and return the BST
                        currentNode.right = newNode;
                        return this;
                    }
                    // Else, continue searching, after setting the new currentNode to be the node to the 'right' of the currentNode.
                    currentNode = currentNode.right;
                }
            }
        }
    }

    // Colt's solution
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            // If we are adding a value equal to current, then just return undefined
            if (val === current.val) return undefined;

            // Rest of the logic remains the same
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                // We need not specify the condition of (val > current.val) as we have already handled the edge case of val === current
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // Method to find if a value is present in the BST

    // My approach, similar to Colt's approach
    find(val) {
        // Check is there is no 'root' node and return false
        if (!this.root) return false;

        let currentNode = this.root;
        while (true) {
            // Check if the currentNode's value is equal to val, and return true
            if (currentNode.val === val) return true;

            // Check if the val parameter is lesser than the currentNode's val
            if (val < currentNode.val) {
                // Check if there is no 'left' node to the currentNode, and return false
                if (!currentNode.left) return false;

                // Otherwise, continue searching after setting the new currentNode to the 'left' property of the currentNode
                currentNode = currentNode.left;
            } else {
                // If this code is executed, it means that 'val' is greater than currentNode.val

                // Check if there is no node to the 'right' of currentNode, and return false
                if (!currentNode.right) return false;

                // Otherwise, continue searching after setting the new currentNode to be the 'right' property of the currentNode
                currentNode = currentNode.right;
            }
        }
    }
}
