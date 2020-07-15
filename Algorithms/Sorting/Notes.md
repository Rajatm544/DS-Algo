# Sorting

-   There ara **many** different algorithms to do this, so it's important to know what works best, and in what situation.
-   [Tool](https://www.toptal.com/developers/sorting-algorithms) to check performance of various sorting techniques.
-   The built-in JavaScript sort() sorts items based on their unicode chars. Hence it is going to treat all array items as a string, by default.
    -   But, to get it to sort numbers in ascending order, we can specify the callback function as a parameter as follows:
        <br>
        Ex 1: [2, 33, 11, 312, 4].sort((a, b) => (a - b))
        Here if the function returns -ve, then a comes before b, i.e in ascending order.
        <br>
        Ex 2: ["data", "structures", "and", "algorithms"].sort((a, b) => (a.length - b.length))
-   Visualgo is the [visualizing tool](https://visualgo.net/en/sorting).
-   The various different sorting algorithms are as follows:

## Quadratic Time Sorting Techniques

### 1) Bubble Sort

-   Start comparing 2 elements form 1 side of the array, swap if required.
-   At the end of first pass, the largest number has bubbled to the last index of the array, so ignore the last index in the next pass.
-   Complete these passes until the array is sorted.
-   **Time Complexity**: It's O(n<sup>2</sup>)

### 2) Selection Sort

-   Assumes the first element is the smallest. (Or, largest if sorting in descending order)
-   Finds the minimum value from the array, by comparing each element of the array, then swaps the min element with the first element of the array.
-   In one pass, the 1st element is fixed as the smallest.
-   This way, the sorted array is built up from the beginning of the array, as opposed to the bubble sort technique.
-   **Time Complexity**: Its O(n<sup>2</sup>)

### 3) Insertion Sort

-   Works by building up the sorted array by **inserting** the array elements into its correct position in the _sorted portion_ of the array.
-   Start by comparing the 2nd element with the 1st element, swap if necessary.
-   Iterate through the rest of the array. Then, for each element, iterate through the _sorted portion_ of the array, and _insert_ this element where it needs to be, by making comparisions.
-   Keep doing this until all the elements have been inserted into their correct positions.
-   **Time Complexity**: O(n<sup>2</sup>)

### Comparision betweeen Bubble Sort, Selection Sort and Insertion Sort

-   All of them have quadratic time complexities, but insertion sort does better when the array is _nearly_ sorted., and so does bubble sort. But selection sort is not really useful in most situations.
-   The space complexity of all 3 sorting techniques is O(1).

## More Efficient Sorting Techniques

### 1) Merge Sort

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

##

### 2) Quick Sort

-   It works by choosing a **pivot** element, and making sure that all the elements to the left of the pivot element is less than the pivot(not necessarily sorted, they just need to be less than the pivot) and that all the elements to the right of the pivot are all greater than it.

#### placing the pivot element in its correct index

-   Choose a pivot, store its index in a variable, let's say pivotIndex. Loop through the array, if the current element is less than than the pivot, then
    -   increment the pivotIndex, and swap the current element with the element present at the new pivotIndex
-   After one iteration through the array, swap the **pivot** with the element present at the pivotIndex

#### Recursively placing all pivot elements in its correct position

-   Assume **left** indicates the start of a subarray, and **right** indicates the last index of the subarray
-   Do the following only if the **left** pointer is at a lesser index than the **right** pointer
    -   Start by calling the pivot() fn on the entire array by defaulting the **left** and **right** pointers to the first and last element of the array respectively.
    -   Then store the return value in the **pivotIndex**
    -   Use this to recursively call quickSort() with the same array, but from **left** pointer up until **pivotIndex - 1**, for the left part of the array
    -   For the right part of the array, call quickSort() again, with the same array, but fromm **pointer + 1** to **right**
-   Once the base case becomes invalid, it means that **left === right**, which means that we now have a subarray of length 1, so we **return arr**

#### Time and Space Complexities

-   The best and average _time_ complexity is O(n logn). But the worst case scenario of the time complexity is O(n<sup>2</sup>).
-   The _space_ complexity is always O(log n).

##

### 3) Radix Sort

-   This is **not a comparision sort**! This is an **Integer Sort**, which means that it doesn't compare the values in the array to each other at all, it works because of a property of numbers, which is a mathematical property.
-   It starts by grouping the array elements into **10 buckets** of digits 0 to 9 (for the decimal number system). It groups the array elements by **checking the digit at the units place** first.
-   Once an iteration is complete and all the array elements are grouped into buckets such that all array elements in a bucket are all having the same digit at the units place, we reconstruct the array by placing the elements in the buckets, in the order they were filled.
    <br>
    Ex:
    <span align="center">
    | Bucket for digit **3** |
    | :----------------:|
    | 123 |
    | 3 |
    | 23 |
    | 44973|
    </span>
    Then, the array will be reconstructed as 44973, 23, 3, 123,... followed by elements from the bucket for the digit 4, and so on.

-   Continue till the all the digits in the largest number of the array have been categorized into bucket, according to the digit at the next higher place value, after which the reconstructed array **will be sorted**, even though we never compared any array elements.

#### Helper method 1) Getting the digit at a specific place in a number

-   Use dividing and modulo operations to do this.

#### Helper method 2) Returning the number of digits in a number

-   Use modulo along with a while loop.

#### Helper methos 3} Returning the maximun number of digits in any number of the given array

-   Loop through the array, use the helper method 2, and return the maximum no of digits.

#### Actual sorting pseudocode

-   Find out the most digits in any number of the array
-   Iterate from 0 up till the most number of digits
-   For each iteration
    -   Create buckets for digits 0 - 9 (an array of arrays for all digits)
    -   place each number in the corresponding bucket based on the _k_ th digit.
-   Replace original array with the reconstructed array of combination of these buckerts, staring from the 0 bucket.
-   Return the list at the end.

#### Time and Space Complexity

-   Generally it's accepted that the _best_, _average_, and _worst_ time complexity of radix sort is **O(nk)**, where n is the array size, k is the average number of digits in the array elements.
-   The space complexity of radix sort is O(n + k).
