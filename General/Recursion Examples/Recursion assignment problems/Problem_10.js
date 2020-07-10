// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// My solution
function capitalizeFirst(array) {
    let tempArr = [];
    function helper(arr) {
        if (!arr.length) {
            return;
        }
        const word = arr[0].split("");
        const firstLetter = word[0].toUpperCase();
        word.splice(0, 1, firstLetter);
        tempArr.push(word.join(""));
        return helper(arr.slice(1));
    }
    helper(array);
    return tempArr;
}

// Colt's solution
function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string =
        array.slice(array.length - 1)[0][0].toUpperCase() +
        array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}
