# Hash Table

-   It is a collection of **key-value** pairs, and is readily available to us in most programming languages. In JS, they are implemented in **Objects** and **Maps**.
-   The **key** is first fed to a **hash function** which returns the index (or the address) for the **value**.
-   A hash function is responsible for providing a unique address for unique keys, but the same address for any previously stored key.
-   A good hash function has the following properties:
    1. It is **fast**, ideally O(1).
    2. **Distributes data uniformly**, and doesn't clutter up data in a specific part of the datastructure.
    3. It should be **deterministic**, i.e, same input always yields the same output.
-   There are teo methods to deal with **collisions** (multiple data arriving at the same hashed index) :
    1. **Seperate Chaining**: Stores all the data at the same index, but in a nested array/list.
    2. **Linear Probing**: If 2 values have the same hashed index, then the 2nd data is stored in the nest free index.

## Implementing a hash table using an array

-   Create a class whose constructor stores an array of the **size** passed to it. The array shall store the **key-value** pairs.
-   Create a hash function as an instance method, which accepts a key and returns a hashed index.
-   **Note**: We shall use seperate chaining to deal with collisions.

## Adding a new key-value pair to the hash table

1. Create a fn called **set()** which accepts a key and a value.
2. Use the hash() method to hash the key.
3. **Store the key-value pair** in the constructor array, but **as a nested array** becuase we are dealing with collisions using seperate chaining.

## Accessing the key-value pair from the hash table

1. Create a fn called **get()** which accepts a key.
2. Hash the key.
3. Retreive the key-value pair from the hashed index, after searching the nested array, and return the value.
4. Return **undefined** if the key isn't found at the hashed index.

## Returning an array of all the keys, and of all the values

-   **To return a list of keys**:
    1. Iterate through the hash table elements and push all the keys to a new array.
    2. Return the array.
-   **To return the list of values**:
    1. Iterate through the hash table and push all the **unique** values to a new array.
    2. Return the array.

## Time Complexity

-   **Inserting**: It is O(1), in the average and best cases.
-   **Removing**: It is O(1), in the average and best cases.
-   **Accessing**: It is O(1), in the average and best cases.
