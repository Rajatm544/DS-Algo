// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// My solution
function reverse(str) {
    let tempStr = [];
    function helper(helperStr) {
        if (!helperStr.length) {
            return;
        }
        tempStr.unshift(helperStr[0]);
        return helper(helperStr.slice(1));
    }
    helper(str);
    return tempStr.join("");
}

// Colt's solution
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}
