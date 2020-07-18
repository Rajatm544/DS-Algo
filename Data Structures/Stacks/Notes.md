# Stacks

-   It is a collection of data, wherein the data that's added last, is the ine that's removed (or, accessed) first. In other words, it is also called as a LIFO datastructure.
-   Imagine it as a pile of books, and the topmost book being the one we retrieve first.
-   They are sort of absrtact, in the sense that we do not need to create a new class to define and use them. We can implement them in a number of ways like:
    -   Using Arrays
    -   Using Singly Linked Lists

## Implementation using Arrays

-   We can just create an array called _stack_ and use the built-in array methods to emulate the working of an array in the **LIFO** manner.
-   We can either use the **push()** and **pop()** methods to implement stacks using an array, or we can use **unshift()** and **shift()** to do so.
-   Both these approaches can work, as we are still abiding by the **LIFO** rule.
-   But in terms of efficiency, it is better to use the **push()** and **pop()** array methods to implement stacks, as that operation is **O(1)**, when compared to the complexity of O(n) when using unshift() and shift().

## Implementation using Linked List

-   We can define a new class, that works very similarly to a singly linked list. But we **cannot** just use the **push() and pop()** we defined inside the SLL class, as the stack operations are meant to have a **time complexity of O(1)**, but our implementation of pop() in a SLL is O(n).
-   Instead we just perform the **adding** and **removing** from the **beginning of the linked list**, as they are **constant time** operations, and name the respevtive functions as push() and pop().

### Functions performed on a Stack

-   Implementing the **push()** function, to add an element to the stack:

    1.  Create a fn which accepts a value, create a new node using this value.
    2.  If there are no nodes in the stack, set the **first** and the **last** properties to be the new node.
    3.  Otherwise, do the following:
        1. Store the **first** node of the stack, in a variable.
        2. Set the **next** property of the new node to be this first node.
        3. Set the **first** property of the stack, to be the new node.
    4.  Increment the size, and return the new length.

    ##

-   Implementing the **pop()** function, to remove a node from the beginning of the stack:
    1. If the stack is empty, return null.
    2. If there's only 1 node in the stack, set the **first** and **last** property of the stack to null, after returning the **first** node's value.
    3. Otherwise, store the **first** node in the stack in a new varible.
    4. Set the new **first** property of the Stack to be the **next** property of the stored variable.
    5. Decrement the size, and return the value stored in that variable.

## Time complexities of the stack operation

-   **Insertion**: It is O(1).
-   **Removal**: It is O(1).
-   **Searching**: It is O(n).
-   **Accessing**: It is O(n).
    (**Note**: A stack is primarily meant to be used where we need very quick insertion and removal of data, and where LIFO order needs to be maintained).
