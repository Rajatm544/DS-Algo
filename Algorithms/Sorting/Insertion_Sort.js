// My approach, doesn't work
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (arr[i] < arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]];
                break;
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
