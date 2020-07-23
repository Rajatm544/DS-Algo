// In order to implement a min binary heap, understand the logic for max binary heap and convert the logic as necessary

class MaxBinaryHeap {
    // all we need to maintain is an array that represents the binary heap
    constructor() {
        this.heap = [];
    }

    // To add an element at the correct index

    // My approach, does work
    insert(val) {
        // Push the val to the heap array
        this.heap.push(val);

        // 'Bubble up' the val to the correct index

        // Set the last index to be the 'newIndex'
        let newIndex = this.heap.length - 1;
        let parentIndex;

        // Continue to 'bubble up' until the new node reaches the correct index
        while (newIndex > 0) {
            // Set the index of the parent node using the formula deduced
            parentIndex = Math.floor((newIndex - 1) / 2);

            // Compare the values at the 2 indices and swap them if required
            if (this.heap[newIndex] > this.heap[parentIndex]) {
                // Swap them
                const temp = this.heap[newIndex];
                this.heap[newIndex] = this.heap[parentIndex];
                this.heap[parentIndex] = temp;
            } else {
                // Otherwise the new value has been added to the right index
                break;
            }
            // Set the 'newIndex' to be the current 'parentIndex' for the next iteration
            newIndex = parentIndex;
        }

        return this.heap;
    }

    // Colt's solution
    insert(value) {
        this.heap.push(value);

        // Defined a helper method to 'bubble up'
        this.bubbleUp();

        return this.heap;
    }

    // helper method to insert a new element to the heap
    bubbleUp() {
        let index = this.heap.length - 1;
        let currentElement = this.heap[index];

        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIdx];

            if (currentElement <= parent) break;

            // swap the two elements
            this.heap[index] = parent;
            this.heap[parentIdx] = currentElement;

            // set the new 'index' to be the parentIdx
            index = parentIdx;
        }
    }

    // -------------------------------------------------------------

    // To extract the max value from a max binary heap

    // My approach, doesn't work
    extractMax() {
        // Swap the first and last array elements, in order to put the latest heap value as the new root
        let values = this.heap;
        let lastIndex = values.length - 1;
        [values[0], values[lastIndex]] = [values[lastIndex], values[0]];

        // perform pop() and store the old root value
        const maxValue = values.pop();

        // store the current root value as the parent node.
        let parentIndex = 0;

        // variables to hold index for left and right child nodes
        let left, right;

        // loop as long as parentNode has child nodes
        while (parentIndex < lastIndex) {
            // Find the index of the 'left' child node and store it
            left = 2 * parentIndex + 1;
            right = 2 * parentIndex + 2;

            // Check if left and right child nodes exist, if not then break out of the loop
            if (!values[left] && !values[right]) break;

            // If both left and right child nodes are present, store the maximum of the two
            let maxChild = Math.max(left, right);

            // Suppose only one child node was present, then Math.max() would have returned undefined
            if (!maxChild) maxChild = left || right;

            // This means that the parent node is in the correct position
            if (values[maxChild] <= values[parentIndex]) break;

            // swap the parent node with the larger child node
            let temp = values[maxChild];
            values[maxChild] = values[parentIndex];
            values[parentIndex] = temp;

            // Set the new parentIndex to be that of maxChild/swapped child
            parentIndex = maxChild;
        }

        // Return the max value of the old binary heap
        return maxValue;
    }

    // Colt's solution
    extractMax() {
        // Remove root (maximum value) and replace it with the last element
        const maxValue = this.heap[0];
        const lastVal = this.heap.pop();

        // If the heap becomes empty after removing the max value then don't add back the last element to the root
        if (this.heap.length) {
            this.heap[0] = lastVal;
            // perform 'sink down' operation in this case
            this.sinkDown();
        }
        // Return the maxValue
        return maxValue;
    }

    sinkDown() {
        const length = this.heap.length;
        const parent = this.heap[0];
        // Let the starting parent index be 0
        let parentIdx = 0;
        // variable to hold the child indices
        let leftIdx, rightIdx;
        // variables to hold the value of the child nodes
        let leftChild, rightChild;

        // Loop until the new root has been placed at the right index
        while (true) {
            // calculate the left and right child indices
            leftIdx = 2 * parentIdx + 1;
            rightIdx = 2 * parentIdx + 2;

            // variable to store the index that the parent node needs to be swapped with
            let swap = null;

            // Check if these indices are not out of bounds
            if (leftIdx < length) {
                leftChild = this.heap[leftIdx];
                // Compare this child's value with its parent node
                if (leftChild > parent) {
                    swap = leftIdx;
                }
            }

            // Check if these indices are not out of bounds
            if (rightIdx < length) {
                rightChild = this.heap[rightIdx];
                // check if (rightnode > leftnode) and also check (if rightnode > parent node)
                // rightchild > leftchild || if parent < rightChild
                if (
                    (!swap && rightChild > parent) ||
                    (swap && rightChild > leftChild)
                ) {
                    swap = rightIdx;
                }
            }

            // if no swap was made, then break
            if (!swap) break;

            // actually perform the swapping
            this.heap[parentIdx] = this.heap[swap];
            this.heap[swap] = parent;

            // new parentIdx is the 'swap' index
            parentIdx = swap;
        }
    }
}
