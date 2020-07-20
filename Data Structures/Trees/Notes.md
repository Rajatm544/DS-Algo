# Trees

-   A collection of nodes which share a **parent-child** relationship.
-   The major difference between a SLL and a Tree is that, a **SLL is linear** and a **Tree is non-linear**. Hence, we can also think of SLL to be a special case of Trees, where in each parent node has only one child node.
-   Following are some **rules** to call a tree-like data structure as a legitimate Tree:

    1. A child node cannot link to another child node in the same level. There must be only a parent-child relation, not a child-child relation.
    2. There can be only **1 parent-node** to any given child-node.

-   Some terminology used when working with trees:

    1. **Root**: The topmost node of a tree.
    2. **Child**: A node connected to a node that's one level above it.
    3. **Parent**: The converse notion of a **Child**.
    4. **Siblings**: The child nodes of the same parent node.
    5. **Leaf**: The lowermost node, or a node with no child nodes.
    6. **Edge**: The connection between a parent node and a child node.

-   Some actual applications of trees are as follows:

    -   Working with HTML DOM
    -   Network Routing
    -   In Artificial Intelligence to draft decision algorithms like the minimax algorithm for TIC-TAC-TOE.
    -   Folders in an OS.
    -   Working with JSON.

-   There are many different types of trees which can be used. Wwe shall mostly talk about **Binary Trees** and in specific, about **Binary Search Trees** or BST.

-   **Binary Tree** is a tree wherein each parent node can have **atmost 2 child nodes**.
-   **Binary Search Trees** are a special type of Binary Trees which make it easier to search for elements, due to the following properties:
    1. Every parent node must have at most 2 child nodes i.e, **it must be a binary tree**.
    2. Every child node to the **left** side of a parent node must be **lesser than the parent node**.
    3. Every child node to the **right** side of a parent node must be **greater than the parent node**.
-   Due to way in which we construct a BST, we can search for elements much quicker, because we have to search in roughly 1 half of the tree, for every level we go down the tree.

## Functions to work with Binary Search Trees

-   To implement **insert()** method to add a new node to the BST, at the correct position

    1.  Create a fn that accepts a **value** and creates a new node using that value.
    2.  Check if there is a **root** node, if not, then just set the **root** property of the list to be the new node created and return the BST.
    3.  If there is already a root node, then do the following:

        -   Store **root** node's value in a variable called **current**.
        -   If the **current node** being checked has the **same value** as that of the new node, then **return undefined**.
        -   If the **value** is greater than the current node, Check if there is a node to the **right** of the current node and do the following:
            -   If there isn't a node to the right of the current node, then just set the **right** property of the **current** node to be the **new node**.
            -   Otherwise, continue the comparisions.
        -   Otherwise, check if there is a node to the **left** of the **current** node and do the following:
            -   If there isn't a node at that position, set the **left** property of the **current** node to be the **new node**.
            -   Else, continue the comparisions.

    4.  Return the tree after inserting the node at the correct position.

    **Note**: The above process can be done either iteratively or recursively.

    ##

-   To implement **find()** method to check if a given value is present in the BST or not

    1. Create a fn which accepts a value that needs to be searched for, in out BST.
    2. Check if there's **no root**, if so, then **return false**.
    3. Otherwise, store the value of the root node in a new variable, called **current** and do the following:

        - If **current** node's value **equals the value** parameter that's passed to this method, **return true**.
        - If the value is lesser than the **current** node's value:
            - If there is no node to the **left** of the currentNode, then return false.
            - If there is node to the left of the current, then continue searching after setting this node as the new current.
        - If the value is greater than the **current** node's value:
            - If there is no node to the **right** of the **current** node, return false.
            - Otherwise, continue searching for the element after setting this as the new current node.

    4. We can also choose to return the found Node rather than always returning a boolean.

## Time Complexity of functions on BST

-   **Insertion**: It is O(log n). This is because in the _best_ and _average_ cases of a BST, we will need to down only by a level for every time we double the number of nodes in the BST. Hence, we will only ever traverse one half the BST at a time.
-   **Finding**: It is O(log n), for the same reason as stated above.
-   **NOTE**: The above time complexities become O(n), if we are dealing with a BST which only grows to the right or to the left.
