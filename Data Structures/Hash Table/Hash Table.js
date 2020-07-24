// We implement a HashTable class using an array to implement the hash map
class HashTable {
    // default hash table's size to 53(a prime number)
    constructor(size = 53) {
        // create an array to store the key-value pairs
        this.keyValue = new Array(size);
    }

    // a hash function we created in the other file, modified to be used as an instance method
    _hash(key) {
        let total = 0;
        let value;
        const somePrime = 37;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            value = key.charCodeAt(i) - 96;
            total = (total * somePrime + value) % this.keyValue.length;
        }
        return total;
    }

    // To add a new key-value pair to the hash table

    // My approach, similar to Colt's solution
    set(key, value) {
        // hash the key
        const hashIndex = this._hash(key);
        // Check if the 'keyValue' array has an element(nested array of key-value pairs) stored at hashIndex already
        if (this.keyValue[hashIndex]) {
            this.keyValue[hashIndex].push([key, value]); // seperate chaining
        } else {
            this.keyValue[hashIndex] = []; // create an array at that index, in order to store multiple key-value pairs if need be
            this.keyValue[hashIndex].push([key, value]);
        }
        // return the hash table
        return true;
    }

    // Colt's solution
    set(key, value) {
        const index = this._hash(key);

        if (!this.keyValue[index]) {
            this.keyValue[index] = [];
        }

        this.keyValue[index].push([key, value]);
    }

    // -----------------------------------------------
    // To access a key-value pair

    // My approach, same as Colt's solution
    get(key) {
        // hash the key
        const hashIndex = this._hash(key);
        let foundPairs = null;

        // Access the hashIndex and loop through the entries to retrieve the required pair
        foundPairs = this.keyValue[hashIndex];
        if (foundPairs) {
            for (let i = 0; i < foundPairs.length; i++) {
                // checking the first index of all the pairs for comparing the key
                if (foundPairs[i][0] === key) {
                    // return the corresponding value
                    return foundPairs[i][1];
                }
            }
        }

        // Otherwise, if no key-value pair was found, then return undefined
        return undefined;
    }

    // ---------------------------------------------------------------

    // To return a list of all keys

    // My approach, same as Colt's solution
    keys() {
        const result = [];
        let pairs, currentPair;
        // iterate through the hash table
        for (let i = 0; i < this.keyValue.length; i++) {
            // store all the pairs at a given index
            pairs = this.keyValue[i];
            if (pairs) {
                // Iterate through all the pairs stored due to seperate chaining
                for (let j = 0; j < pairs.length; j++) {
                    currentPair = pairs[j];
                    result.push(currentPair[0]); // key is stored at the 0th index
                }
            }
        }
        return result;
    }

    // -------------------------------------------------------------------

    // To return a list of all unique values

    // My approach, same as Colt's solution
    values() {
        const result = [];
        let pairs, currentPair;
        // iterate through the hash table
        for (let i = 0; i < this.keyValue.length; i++) {
            // store all the pairs at a given index
            pairs = this.keyValue[i];
            if (pairs) {
                // Iterate through all the pairs stored due to seperate chaining
                for (let j = 0; j < pairs.length; j++) {
                    currentPair = pairs[j];
                    // check if this 'value' isn't already added to 'result'
                    if (result.indexOf(currentPair[1]) === -1) {
                        result.push(currentPair[1]); // value is stored at the 1st index
                    }
                }
            }
        }
        return result;
    }
}

const hashTable = new HashTable(11);
hashTable.set("pink", "#009a3e");
hashTable.set("red", "#ad3471");
hashTable.set("green", "#0f0");
hashTable.set("maroon", "#98df38");
hashTable.set("grey", "#001001");
hashTable.set("white", "#fff");
hashTable.set("salmon", "#efefef");
hashTable.set("coral", "#ed56ed");
hashTable.set("violet", "#f45df7");
hashTable.set("indigo", "#f27cf7");
