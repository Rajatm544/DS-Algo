// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// My solution, doesn't work
function flatten(array) {
    let resArr = [];

    function helper(helperArr) {
        if (!helperArr[0]) {
            return;
        }
        if (Array.isArray(helperArr[0])) {
            return helper(helperArr[0]);
        }
        resArr.push(helperArr[0]);
        return helper(helperArr.slice(1));
    }

    helper(array);

    return resArr;
}

// Colt's solution
function flatten(oldArr) {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}
