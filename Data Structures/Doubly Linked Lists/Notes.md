# Doubly Linked List

-   It is similar to a SLL, but each node now also has a pointer to the previous node.
-   Due to this, though there is more flexibilty in the functions that can be performed on the linked list, we do need more memory in order to store the extra pointer.

## Following are the different methods that can be performed on the DLL

-   To implement **push()**, which adds a new node at the end of a DLL:

    1. Create a fn which accepts a value, and create a new node using this value.
    2. If the DLL is empty, make this **newly created node** both the head and the tail.
    3. Otherwise, set the **next** property of the current tail, to be the new node.
    4. Then, set the **prev** property of the new node to be the old tail.
    5. Set the new node as the tail of the DLL.
    6. Increment the length, return the DLL.

    ##

-   To implement **pop()**, which removes a node from the end of the linked list

    1. Check if list is empty, and if so then return undefined.
    2. Store the **current** tail into a new variable.
    3. If the length is 1, set the **head** and the **tail** to be null. Otherwise, do the following:
        1. Set the **tail** property of the list, to be the **prev** node to the current tail.
        2. Now, set the **next** property of the **new tail** to be null.
        3. Also, set the **prev** property of the **old tail**, to be null.
    4. Now decrement the length, and return the old tail stored in the variable.

    ##

-   To implement **shift()**, which removes a node from the beginning of the list

    1. Check if the list is empty, return undefined if it is.
    2. Store the **head** of the list in a variable.
    3. If the length is 1, set the **head** and the **tail** to be null. Otherwise, do the following:
        1. Set the **head** to be 'next' property of the old head.
        2. Set the **prev** property of the **new head** to be null.
        3. Set the **next** property of the **old head** to be null.
    4. Decrement the length and return the stored variable of the old head.

    ##

-   To implement **unshift()** which adds a new node at the beginning of the list

    1.  Create a fn which accepts a value, create a new node using this value.
    2.  If the list is empty, set both the **head** and the **tail** to be the new node.
    3.  Otherwise, do the following:
        1. Set the new node's **next** property to be the **current head**
        2. Set the current head's **prev** property to be the new node.
        3. Set the **head** property of the list to be the new node.
    4.  Increment the length, return list.

    ##

-   To implement **get()** which returns the value of a node at a specific position

    1. Create a fn which accepts an index.
    2. If the (**index < 0 or index >= length**), then return null.
    3. We can optimize the seraching by checking if the index is **less than half the length**, then we **start at the head** and access the **next** node until we reach the required index.
    4. Otherwise, if the index is **greater than half the length**, we should start a counter from the last node and access the **prev** node, until we reach the required index.
    5. Return the node, once we reach the required index.

    ##

-   To implement **set()**, which sets the value of the node at a particular index

    1. Create a fn which accepts an **index** and a **value**
    2. Call the **get()** method using the index, and store the returned node in a variable.
    3. If a valid node was returned, set the _val_ of the node to be the new **value**, and return true.
    4. Otherwise, return false.

    ##

-   To implement **insert()**, which inserts a new node at the particular index

    1. Create a fn which accepts **an index**, and a **value**
    2. If this **(index < 0 or index > length)** return false. **Note**: index can be equal to the length.
    3. If the **index === 0**, then call the **unshift()** method using the passed **value** parameter.
    4. If the **index === length**, then call the **push()** method.
    5. Otherwise, do the following:
        1. Call the **get()** method to get the node at **(index - 1)**, and store it in a new variable.
        2. Create a new node using the **value** parameter
        3. Set the **next** property of the new node to be the **next** property of the stored variable.
        4. Set the **next** property of the stored variable to be the new Node.
        5. Set the **prev** property of the new node, to be the stored variable.
        6. Set the **prev** property of the new node's **next** node, to be the new node itself.
    6. Increment the length and return true.

    ##

-   To implement **remove()**, which removes a node from the particular index

    1. Create a fn which accepts **an index**.
    2. If **(index < 0 or index >= length)** return false.
    3. If **(index === 0)**, then call **shift()** method.
    4. If **(index === length - 1)**, then call **pop()** method.
    5. Otherwise, do the following:
        1. Call **get()** method, to get the node at the position **index**, and store it to a new variable _removedNode_.
        2. Set the **next** property of removedNode's previous node to be **removedNode.next**.
        3. Set the **prev** property of **removedNode.next** to be **removedNode.prev**.
        4. Set the **prev** and **next** properties of the removedNode to be **null**.
    6. Decrement the length of the list, return true.

    ##

## Time Complexity of the operations on DLL

-   **Insertion**: It is O(1).
-   **Removal**: It is always O(1), unlike in SLL.
-   **Accessing**: It is O(n).
-   **Searching**: Technically, it is O(n/2), since we have implemented it as such. But it simplifies to being O(n) itself.
