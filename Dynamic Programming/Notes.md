# Dynamic Programming

-   It is method for solving complex problems, by breaking it down to a collection of smaller subproblems. We solve these subproblems **only once** and store their results.
-   This can be used to solve problems only if the problem has the following two conditions:
    1. **Overlapping Subproblems**.
    2. **Optimal substructures**.

### Overlapping Sub-problems

-   This means that for a given complex problem, if there exists a **repeatition** in the sub problems, then we can use dynamic programming. Ex: Calculationg the nth number of a fibonacci sequence, wherein the repeated subproblem can be the repeated addition.

### Optimal sub-structure

-   This means that we should be able to arrive at the optimal solution to the bigger and complex problem, by using the most optimal solution for each of the subproblems.

-   **NOTE**: Find [slides here](https://cs.slides.com/colt_steele/dynamic-programming#/3/0/1), for a better explaination.

## Methods to implement dynamic programming

-   **Memoization**: It is a technique which still uses recursion, but we store the values for each return, so that we do not have to perform costly function calls every time we need to compute a value.

-   **Tabulation**: It is a bottom-up method of solving a problem, wherein we can use a table to store the values for solution to the overlapping subproblems.
