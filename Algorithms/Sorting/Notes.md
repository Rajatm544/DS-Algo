# Sorting

-   There ara **many** different algorithms to do this, so it's important to know what works best, and in what situation.
-   [Tool](https://www.toptal.com/developers/sorting-algorithms) to check performance of various sorting techniques.
-   The built-in JavaScript sort() sorts items based on their unicode chars. Hence it is going to treat all array items as a string, by default.
    -   But, to get it to sort numbers in ascending order, we can specify the callback function as a parameter as follows:
        Ex: [2, 33, 11, 312, 4].sort((a, b) => (a - b))
        Here if the function returns -ve, then a comes before b, i.e in ascending order.
        Ex 2: ["data", "structures", "and", "algorithms"].sort((a, b) => (a.length - b.length))
-   Visualgo is the [visualizing tool](https://visualgo.net/en/sorting).
-   The various different sorting algorithms are as follows:

## Quadratic Time Sorting Techniques

### Bubble Sort

-   Start comparing 2 elements form 1 side of the array, swap if required.
-   At the end of first pass, the largest number has bubbled to the last index of the array, so ignore the last index in the next pass.
-   Complete these passes until the array is sorted.
-   **Time Complexity**: It's O(n<sup>2</sup>)

### Selection Sort

-   Assumes the first element is the smallest. (Or, largest if sorting in descending order)
-   Finds the minimum value from the array, by comparing each element of the array, then swaps the min element with the first element of the array.
-   In one pass, the 1st element is fixed as the smallest.
-   This way, the sorted array is built up from the beginning of the array, as opposed to the bubble sort technique.
-   **Time Complexity**: Its O(n<sup>2</sup>)

### Insertion Sort

-   Works by building up the sorted array by **inserting** the array elements into its correct position in the _sorted portion_ of the array.
-   Start by comparing the 2nd element with the 1st element, swap if necessary.
-   Iterate through the rest of the array. Then, for each element, iterate through the _sorted portion_ of the array, and _insert_ this element where it needs to be, by making comparisions.
-   Keep doing this until all the elements have been inserted into their correct positions.
-   **Time Complexity**: O(n<sup>2</sup>)

### Comparision betweeen Bubble Sort, Selection Sort and Insertion Sort

-   All of them have quadratic time complexities, but insertion sort does better when the array is _nearly_ sorted., and so does bubble sort. But selection sort is not really useful in most situations.
-   The space complexity of all 3 sorting techniques is O(1).

## More Efficient Sorting Techniques

### Merge Sort

-   Works by dividing an array into halves continuosly until we end up with arrays of size 0 or 1. This sorting technique works based on the trick that an array with size 0 or 1 are inherently _sorted_
-   Once we have such arrays, we **merge** them in a way so as to result in a larger but still sorted array.
-   We continue merging these sorted subarrays until the entire array is sorted.

#### Merging the smaller sorted sub arrays

-   we start by making an empty array. Compare the first elements if the 2 subarrays, and _push_ the smaller of the two to the first position of the new array. Suppose 1st element of 1st array is smaller, then push that to the new array, and now compare the 2nd element of the first array to the 1st element of the 2nd array, and so on. If we have exhausted the array elements in any of the 2 subarrays, then just push the other subarray to the new array we had created.

#### Dividing the array into halves

-   We use recursion to do this.
-   Use slice to half the array, and do do until the base case of arr.length <= 1
-   Then call merge() on these subarrays, until the original length of the array is reached.

#### Time And Space Complexities

-   The average, best and worst _time complexity_ of merge sort is **O(n log n)**
    -   _log n_ as in log<sub>2</sub>n because, we are halving the array until it's of length 1. Which is essentially the power of 2 for which answer is n, which is nothing but log n.
    -   _n_ because we make rougly n comparisions in the merge() fn.
-   The _space complexity_ is O(n).
