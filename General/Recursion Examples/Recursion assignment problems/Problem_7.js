// Check for palindrome

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// My solution
function isPalindrome(str) {
    let revStr = [];

    function helper(helperStr) {
        if (!helperStr.length) {
            return;
        }
        revStr.unshift(helperStr[0]);
        return helper(helperStr.slice(1));
    }
    helper(str);

    revStr = revStr.join("");
    return revStr === str;
}

// Colt's solution
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}
