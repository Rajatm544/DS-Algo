# Tree Traversal

-   This refers to the process of **visiting each node in a tree, at least once**.
-   This section is meant to work for any typr of tree, since we may not always have a BST to work with.
-   Majorly, there are two approaches to this problem:
    -   Breadth First Search or **BFS**, wherein we primarily travel **horizontally** along the tree.
    -   Depth First Search or **DFS**, wherein we primarily travel **vertically** along the tree.

## Breadth First Search (Iterative Approach)

1. Create a queue (implemented using an array), and an array hold the nodes.
2. Enqueue the **root** of the tree, and do the following as long as the queue is not empty:
    - **Dequeue** a node from the queue and **push** its value to the array.
    - If the node that was dequeued has a **left** property, then **enqueue** the **left node**.
    - If the node that was dequeued has a **right** property, then **enqueue** the **right node**.
3. Return the array, as it now has the values of the tree, stored in a breadth-first-approach.

## Depth First Search (Recursive Approach)

### Pre-order DFS

-   **Note**: In this type of DFS, We do the following to recursively traverse all nodes: add a node's value to the array -> check if there's a left node -> check if there's a right node.

1. Store the **root** of the tree in a variable called **current**.
2. Create an array called **result**, that will store the tree values in the required order.
3. Create a helper function that accepts a node as a parameter, and do the following:
    1. Push the node's value to the **result** array.
    2. If the node has a **left** property, call this **helper()** function using that **left** node.
    3. If the node has a **right** property, invoke the **helper()** function using it.
       <br>
       **Note**: The above three steps' order is what changes the type of the DFS.
4. Invoke the helper function using the **current** node.
5. Return the **result** array.

    ##

### Post-Order DFS

-   **Note**: In this type of DFS, We do the following to recursively traverse all nodes: check if there's a left node -> check if there's a right node -> add a node's value to the array.

1. Store the **root** of the tree in a variable called **current**.
2. Create an array called **result** to store the node values in the required order.
3. Create the helper function that accepts a node, and do the following:
    1. If the node has a **left** property, call the **helper()** function using it.
    2. If the node has a **right** property, call the **helper()** function using the right node.
    3. Finally, push the node's value to the **result** array
       <br>
       **Note**: The above three steps' order is what changes the type of the DFS.
4. Invoke the **helper()** function using the **current** node.
5. Return the **result** array.

    ##

### In-Order DFS

-   **Note**: In this type of DFS, We do the following to recursively traverse all nodes: check if there's a left node -> add a node's value to the array -> check if there's a right node.

1. Store the **root** of the tree in a variable called **current**.
2. Create an array called **result** to store the node values in the required order.
3. Create the helper function that accepts a node, and do the following:
    1. If the node has a **left** property, call the **helper()** function using it.
    2. Push the node's value to the **result** array.
    3. If the node has a **right** property, call the **helper()** function using the right node.
       <br>
       **Note**: The above three steps' order is what changes the type of the DFS.
4. Invoke the **helper()** function using the **current** node.
5. Return the **result** array.

## Use Cases for BFS and DFS

-   Suppose we have a very wide, but shallow tree, then it's better to go with DFS, becuase in this case BFS will use up more memory
-   Suppose we have a ver long tree, which isnt't very wide, then BFS is better becuase at any point in the process, the queue that we use to perforn BFS will not consume much space in memory.

### Use cases for the different DFS techniques

-   We can use **In-order DFS** on **Binary Search Tree** to get an array of elements in the acsending order, or the order in which they are stored in the BST.
