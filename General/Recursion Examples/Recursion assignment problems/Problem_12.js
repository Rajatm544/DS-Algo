// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// My solution
function capitalizeWords(arr) {
    let result = [];
    function helper(helperArr) {
        if (!helperArr.length) {
            return;
        }
        result.push(helperArr[0].toUpperCase());
        return helper(helperArr.slice(1));
    }
    helper(arr);
    return result;
}

// Colt's solution
function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;
}
