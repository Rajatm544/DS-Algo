# Tree Traversal

-   This refers to the process of **visiting each node in a tree, at least once**.
-   This section is meant to work for any typr of tree, since we may not always have a BST to work with.
-   Majorly, there are two approaches to this problem:
    -   Breadth First Search or **BFS**, wherein we primarily travel **horizontally** along the tree.
    -   Depth First Search or **DFS**, wherein we primarily travel **vertically** along the tree.

## Breadth First Search

### Iterative Approach

1. Create a queue (implemented using an array), and an array hold the nodes.
2. Enqueue the **root** of the tree, and do the following as long as the queue is not empty:
    - **Dequeue** a node from the queue and **push** its value to the array.
    - If the node that was dequeued has a **left** property, then **enqueue** the **left node**.
    - If the node that was dequeued has a **right** property, then **enqueue** the **right node**.
3. Return the array, as it now has the values of the tree, stored in a breadth-first-approach.
