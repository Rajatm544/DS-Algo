function sumZero(arr) {
    // First pointer
    let left = 0;
    // Second pointer
    let right = arr.length - 1;
    let sum = 0;
    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
