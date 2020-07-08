// Write function validAnagram to check if two strings ae valid anagrams. Return a boolean value.
function validAnagram(str1, str2) {
    let freq1 = {};
    let freq2 = {};

    for (let letter of str1) {
        freq1[letter] = (freq1[letter] || 0) + 1;
    }

    for (let letter of str2) {
        freq2[letter] = (freq2[letter] || 0) + 1;
    }

    for (let key in freq1) {
        if (!freq2[key]) {
            return false;
        }
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }
    return true;
}
