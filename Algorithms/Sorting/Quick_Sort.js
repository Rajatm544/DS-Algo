// placing the pivot element in its correct position

// My approach
function pivot(arr) {
    // Let's choose the pivot to be the arr[0] element
    let pivotIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        // If current element is lesser than our pivot element
        if (arr[i] < arr[0]) {
            // Increment the pivot index
            pivotIndex++;
            // Swap current element with the element at the new pivot index
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    // Swap the pivot element with the element at the pivotIndex index
    [arr[0], arr[pivotIndex]] = [arr[pivotIndex], arr[0]];
    // Return the index of the pivot element after swapping
    return pivotIndex;
}

// Colt's solution
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
        }
    }
    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
    return swapIdx;
}

// --------------------------------------------------------------------
// Actual quick sort function
function quickSort(arr, left = 0, right = arr.length - 1) {
    // Base case is that the left and right pointers don't overlap, after which we'll be left with an array of 1 item
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // For left subarray, which is everything to the left of the pivot element
        quickSort(arr, left, pivotIndex - 1);
        // For the right sub array, which is everything to the right of the pivot element
        quickSort(arr, pivotIndex + 1, right);
    }
    // Return the array, when it's of length 1 i.e, left === right
    return arr;
}
