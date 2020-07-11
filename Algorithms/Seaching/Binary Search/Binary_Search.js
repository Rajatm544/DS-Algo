// My Solution
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle;
    let found = false;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (arr[middle] === val) {
            found = true;
            break;
        } else if (arr[middle] < val) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return found ? middle : -1;
}

// Colt's version

// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103);
