# Queues

-   A collection of data wherein the **FIFO** order is maintained in accessing the data. This means that the data that was added **first** (in other words, _first in_) will be the the data that is removed first (in other words, _first out_).
-   This is also an abstract datastructure, meaning that we can implement them using an array or we can also a dedicated class in order to build them from scratch.

## Implementation Using Arrays

-   We can use an array along with its built-in methods, to emulate the functionality of queues by choosing one of the following two options:

    1. **Using push() and shift()**: <br>
        - We can add an element to the queue (which is nothing but an array with name _queue_) by using the **push()** method.
        - In order to remove an element in the **FIFO** manner, we will need to use the **shift()** method.
    2. **Using unshift() and pop()**: <br>
        - Add an element using the **unshift()** method.
        - Remove an element using the **pop()** method.

-   **Note**: Implementing a queue in this manner is inefficient, because no matter which pair of array methods, we use in order to implement queues from arrays, we will need to re-index the array either while adding an element (**when we use unshift()**) or when we remove an element (**when we use shift()**).

## Implemting using Singly Linked List

-   In order to keep the processes of inserting and removing elements, as constant time (**O(1)**), we need to implement the **enqueue** operation as the **push()** method on a SLL, and the **dequeue** method as the **shift()** method on the SLL.

### Functions on a queue

-   To implement the **enqueue()** method, to add an element to the queue.

    1. Create a fn which accepts a value, create a new node using this value parameter.
    2. If the queue is empty, set the **first** and the **last** properties of the queue to be the new node.
    3. Otherwise, do the following:
        1. Store the **last** node of the queue in a new variable.
        2. Set the new node to be the **last** property of the queue.
        3. Set the **next** property of the previous **last** node, to be the newly created node.
    4. Increment the size of the queue, and return it.

    ##

-   To implement the **dequeue()** method, to remove an element from the queue.

    1. If the queue is empty, return null.
    2. Store the current **first** node in the list, to a new variable, _removedNode_.
    3. If the queue has only 1 element, then set the **first** and the **last** properties of the queue to be null.
    4. Otherwise, do the following:
        1. Set the **next** property of the current **first** node, to be the new **first** property of the queue.
        2. Set the **next** property of the previous **first** node to be null.
    5. Decrement the size, return the value of the stored removedNode.

    ## Time complexities of the Queue operations

-   **Insertion**: It is O(1).
-   **Removal**: It is O(1). <br>
    (**Note**: If we implement queue using an array, both of the above operations' average time complexity is of O(n), so the linked list implementaation is the more efficient one.)
-   **Searching**: It is O(n).
-   **Accessing**: It is O(n).
    (**Note**: A queue is primarily meant to be used where we need very quick insertion and removal of data, and where FIFO order needs to be maintained).
