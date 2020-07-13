# Sorting

-   There ara **many** different algorithms to do this, so it's important to know what works best, and in what situation.
-   The built-in JavaScript sort() sorts items based on their unicode chars. Hence it is going to treat all array items as a string, by default.
    -   But, to get it to sort numbers in ascending order, we can specify the callback function as a parameter as follows:
        Ex: [2, 33, 11, 312, 4].sort((a, b) => (a - b))
        Here if the function returns -ve, then a comes before b, i.e in ascending order.
        Ex 2: ["data", "structures", "and", "algorithms"].sort((a, b) => (a.length - b.length))
-   Visualgo is the ![visualizing tool](https://visualgo.net/en/sorting).
-   The various different sorting algorithms are as follows:

## Bubble Sort

### Pseudocode

-   Start comparing 2 elements form 1 side of the array, swap if required.
-   At the end of first pass, the largest number has bubbled to the last index of the array, so ignore the last index in the next pass.
-   Complete these passes until the array is sorted.
-   **Time Complexity**: It's O(n<sup>2</sup>)
