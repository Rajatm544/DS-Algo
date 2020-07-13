// My approach
function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // Swap if new minimun value found
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

// Colt's solution is exactly the same, except he called min as lowest!
