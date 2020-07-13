// My solution
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                // ES6 way of swapping
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}

// Colt's solution
function bubbleSort(arr) {
    // Start outer loop form the end of the array
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Colt's solution with an optimization for an almost sorted array

// If there were no swaps done in one full pass, that means that the array is already sorted, so there is no need for any more passes to be made
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                // Swap
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                // Make 'noSwaps' false
                noSwaps = false;
            }
        }
        // End the iterations if there were no swaps made in one full pass
        if (noSwaps) {
            break;
        }
    }
    return arr;
}
