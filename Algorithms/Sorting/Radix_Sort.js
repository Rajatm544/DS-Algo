// Helper method to get digit at a particular place in a number
// Assuming units place as index 0, and counting up as move to the higher place values

// My approach
function getDigit(num, place) {
    let count = 0;
    let digit;
    while (count <= place) {
        digit = parseInt(num % 10);
        count++;
        num = parseInt(num / 10);
    }
    return digit;
}

// Colt's solution
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// -----------------------------------------------------------------

// Helper method to return the number of digits in a number

// My approach
function digitCount(num) {
    let res = 0;

    // To deal with negetive numbers
    let n = Math.abs(num);

    while (n > 0) {
        res++;
        n = parseInt(n / 10);
    }
    return res;
}

// Colt's solution
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// ------------------------------------------------------------------

// Helper method that returns the number of digits in the largest element of the array, by calling digitCount()

// My approach
function mostDigits(arr) {
    let maxDigits = digitCount(arr[0]);
    for (let num of arr) {
        let currentDigits = digitCount(num);
        if (currentDigits > maxDigits) {
            maxDigits = currentDigits;
        }
    }
    return maxDigits;
}

// Colt's solution
function mostDigits(arr) {
    let mostDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        mostDigits = Math.max(mostDigits, digitCount(arr[i]));
    }
    return mostDigits;
}

// ----------------------------------------------------------------

// Actual sorting!

// My approach
function radixSort(arr) {
    const maxDigits = mostDigits(arr);
    const len = arr.length;

    const buckets = [];
    for (let i = 0; i < 10; i++) {
        buckets[i] = new Array();
    }

    for (let i = 0; i < maxDigits; i++) {
        for (let j = 0; j < len; j++) {
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        arr = [];
        for (let j = 0; j < 10; j++) {
            arr = arr.concat(buckets[j]);
            buckets[j] = [];
        }
    }
    return arr;
}

// Colt's solution
function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);

    for (let i = 0; i < maxDigitCount; i++) {
        // Make the digit buckets
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }

        // Combine all the buckets' elements into a new arr using the spread operator
        arr = [].concat(...digitBuckets);
    }

    return arr;
}
