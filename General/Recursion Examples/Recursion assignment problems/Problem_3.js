//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// My solution
function productOfArray(array) {
    function helper(arr) {
        if (!arr.length) {
            return 1;
        }
        return arr[0] * helper(arr.splice(1));
    }

    let product = helper(array);
    return product;
}

// Colt's solution
// function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }
