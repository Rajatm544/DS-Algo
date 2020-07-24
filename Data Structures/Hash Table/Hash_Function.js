// An example for a simple hash function
// It accepts a string and an array length and returs a valid array index after hashing.

const hash = (str, len) => {
    // This fn uses the ASCII value of the characters
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        value = str.charCodeAt(i) - 96; // returns a number between 1-26

        total = (total + value) % len; // % returns a number that's limited to the array length passed as a parameter
    }
    return total;
};

// problems with this hash function:
// 1. Not constant time
// 2. Works only with strings
// 3. Not unique for unique inputs at all times

// A slightly better hash function is as below
// Still the same example, but this time we are using prime numbers as th array length
// Prime numbers are proven to have a drastic affect on the number of collisions while storing a value in a hash map

function betterHash(str, len) {
    let total = 0;
    let value;
    const somePrime = 11;
    console.log(str.length);
    // limits iterations for extremely long strings
    for (let i = 0; i < Math.min(str.length, 100); i++) {
        value = str.charCodeAt(i) - 96;
        console.log(value);
        total = (total * somePrime + value) % len;
    }
    return total;
}
