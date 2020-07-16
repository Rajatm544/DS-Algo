# Singly Linked Lists

-   They are a bunch of **nodes** connected to each other in a single direction, strating from the **head** (starting node) all the way up to the **tail** (last node). Each node **points** to the next node in the linked list.
-   Comparisions between SLL and Array :

    |                     Singly Linked List                     |                            Arrays                             |
    | :--------------------------------------------------------: | :-----------------------------------------------------------: |
    | Do not have indexing,Connected to next node using pointers |                       Indexed in order                        |
    |  Insertion and deletion at the start or end is very easy   | Insertion and deletion can be expensive, when comapred to SLL |
    |            Random access of data isn't allowed             |            Can access elements at a specific index            |

-   We define a class for a **Node** and use that to define a class for our SLL.

## Various operations applicable on a Singly Linked List

-   To implement the **push** function as an instance method:

    1. Define a fn that accepts a value.
    2. Create a new node using the value passed to the push() fn.
    3. If there's no head property on the list, set the head and the tail to the new node created.
    4. Otherwise, set the **next** property on the tail, to be the newly created node, and set the tail property of the list to be the newly created node.
    5. Increment the length property of the SLL.
    6. Return the linked list.

    ###

-   To implement the **pop** function as an instance method:

    1. Define a fn to remove the last node. If it's an empty list, return _undefined_.
    2. Loop through the entire list, keeping track of the present node and the node before this.
    3. This is becuase there's no other way of figuring out what the **2<sup>nd</sup>-to-last** node is.
    4. Once we reach the last node, set the **next** property of the **2<sup>nd</sup>-to-last** node as null.
    5. Set the **tail** of the list to be the **2<sup>nd</sup>-to-last** node.
    6. Return value of the previous tail, reduce length of the list by 1.

    ###

-   To implement the **shift** function, which removes a node from the start of the linked list:

    1. If there's no nodes, return undefined
    2. Store the **current head** in a variable
    3. Set the list's **head** property as the **current head's _next_ node**
    4. Decrement the length of the list by 1.
    5. Return the stored variable

    ###

-   To implement the **unshift** function, which adds a node at the start of the linked list:

    1. Create a fn which accepts a value, and create a new node using that value
    2. If it was an empty list, make this newly created node, both the **head** and the **tail**
    3. Otherwise, **point the newly created node's _next_ property to be the present head**
    4. Set the list's **head** property to be this newly created node.
    5. Increase the length of the list by 1.
    6. Return the list.

    ###

-   To implement the **get** function, which retrieves the node from a particular position:

    1. Create a fn that accepts an index.
    2. If this index is less than 0, or greater than the length of the linked list, return undefined
    3. Otherwise, traverse the list _index_ times, and return the node at that position.

    ###

-   To implement the **set** function which sets the value of a node at a particular position

    1. Create a function that accepts **a value**, and **an index**.
    2. Use get() method, to get that node using the index
    3. If get() returns a node, set it's **value** property to the new value, and return true.
    4. Otherwise, if get() returns null, then set() will return false.

    ###

-   To implement the **insert** function, which inserts a new node at the specified index

    1. Create a fn which accepts a index and a value.
    2. Create a node with the value provided.
    3. If **index < 0 or index > length** (Note: index can be equal to length, as it's the same as **push**), then return false.
    4. If index is 0, then call the unshift() method using the value. If index is equal to the list length, then call push().
    5. Otherwise, call the **get() method using the position (index - 1)**, then set the **next** property of the returned node to the newly created node.
    6. Then, set the **next** property of the newly created node, to the node at the **index** position of the list.
    7. Increment the length, and return true.

    ###

-   To implement the **remove** function, which removes a node from the specified index

    1. Create a fn which accepts the index.
    2. If **index < 0 or index >= length** , then return undefined.
    3. If **index === 0**, then call the **shift()** method. If **index === length - 1**, then call the **pop()** method.
    4. Otherwise, use the **get()** method to get the node at position **(index - 1)**. Then set the **next** property of this node, to be the node **after** the node at **position _index_**.
    5. Decrement length and return value of the removed node.

    ###

-   To implement the **reverse** function, which reverses the linked list in its place, which means that we don't create a new list

    1. Swap the head and the tail, after saving the head as the **currentNode**.
    2. Make varibles called **prevNode** which **must be null**, in the beginning. Make another variable **nextNode**.
    3. Iterate through the list once, and during each iteration, do the following:
        - Set the nextNode to be the node indicated by the **_next_ property of the currentNode**
        - Set the _next_ property of **currentNode** to be the **prevNode**.
        - Set **prevNode** to be the **currentNode**
        - Set new **currentNode** to be the **nextNode**
    4. Return the list.

    ###

## Time Complexities for all these operations

-   **Insertion**: The complexity is always O(1), no matter where we are adding the new node.
-   **Accessing**: It is O(n), because we have no ordered indexing, like that of arrays.
-   **Removal**: It can depend on what position we are removing the node from, since if we are _shifting_ it's O(1), but if we are _popping_ then it's O(n). The average is still O(n).
-   **Searching**: It is O(n).
