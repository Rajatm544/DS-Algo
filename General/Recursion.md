# Recursion

-   It's essentially a function making a call to itself over and over until some base case is met.
-   It's used as an alterantive to an iterative solution, most times as it presents a _clear_ code.
-   The **Call Stack** is reponsilble for storing the functions invoked, in the form of a Stack. Generally, the call stack consists of various diffrtent function calls stacked on one another.
-   A function is _pushed_ to the call stack when it's invoked and it is _popped_ when it the return statament is executed or if all the lines of code in the function are executed.
-   But in recursion, the same function is stacked until and base case is satisfied.
-   Base case is a condition that _returns_ something, such that there are no more recursive function calls.
-   All recursive functions need to have the following two parts for it work correctly:
    -   A base case
    -   Function call to itself, with a different input passed as arguments everytime.
-   **NOTE**:Find examples for recursion in the folder of name _Recursion Examples_
-   **Pitfalls encountered while writing a recursive function**
    -   No base case / Incorrect base case.
    -   No return statement / Incorrect return statement
        _These pitfalls will eventually result in the **call stack** size limit being reached, or in better terms, it leads to stack overflow (pun very much intended)._
-   There's two ways of using recursion to solve a problem:
    -   **Helper method** recursion:
        Where there is an outer function, which has a helper method defined within it. The outer function then invokes the helpre function recursively, after which it finally returns something.
    -   **Pure** recursion:
        There are no helper methods nested within the recursive function.
