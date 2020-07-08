// O(n) time, O(1) space
function countUniqueValues(arr) {
    let i = 0;
    let j = 1;
    for (let k = 0; k < arr.length; k++) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i;
}
