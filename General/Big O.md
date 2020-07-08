# Big O

-   We need a way to measure the efficiency of an algorithm, and timing an algorithm isn't always the best option as it can vary based on a lot a variables.
-   So, it is better to count the number of operations needed by the computer to finish that algorithm, and grasping the general trend is sufficient to find the time and space complexities.
-   Algorithm's Big O visualizer [can be found here](https://rithmschool.github.io/function-timer-demo/)
-   For the time complexity notation, consider the worst case sceanrio to find out the big O notation
-   Following some rules of thumb to simplify the big O notation.
    1. **Constants do not matter**.
       Examples: O(500) = O(1), O(2n) = O(n), O(13 n<sup>2</sup>) = O(n <sup>2</sup>)
    2. **Smaller terms don't matter**.
       Examples: O(200n + 50) = O(n), O(n<sup>2</sup> + 100n + 9) = O(n<sup>2</sup>)
-   **Space Complexity**: It is represented using the same notation as the time complexity, but we only consider the memory / space used up by the algorithm. Suppose, we are using an array of _n_ items, then the space complexity is going to be O(n)

## Big O NOTATIONS FOR SOME COMMON JS IN-BUILT STUFF

### <u>Objects:</u>

-   Objects in JS have time Complexity of O(1) for accessing, retrieving, adding new _key: value_ pairs. But it is O(n) for searching a specific value like an array, for example.
-   In-built Object functions like Obj.keys, Obj.values, Obj.entries have a space complexity of O(n) as they typically return an array.

### <u>Arrays:</u>

-   Accessing an array element is constant time. _push_ and _pop_ is also O(1). But adding aor removing from the beginning of the array is always O(n), as the entire array needs to be re-indexed in this case.
-   Searching an array is O(n) time.
-   Array methods' time complexities:
    -   push(), pop(): O(1) as they add/remove from the end of an array.
    -   shift(), unshift(): O(n) as explained above.
    -   concat(): technically it's O(n + m) for the 2 arrays we are working with, but can genralise to O(n)
    -   splice(), slice(): O(n) time, as that's the worst case scenario.
    -   Higher order array methods like map(), filter(), reduce(), forEach(), and so on: O(n), as they need to perform a task _for each item of the array_.
