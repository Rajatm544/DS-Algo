// My approach
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Start comparing current element with every element before it
        for (let j = i - 1; j > -1; j--) {
            // Swap elements as required
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}

// Colt's solution
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j > -1 && arr[j] > currentVal; j--) {
            if (arr[j] > currentVal) {
                arr[j + 1] = arr[j];
            }
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}
