# Graph Traversal Techniques

-   Here by **traversing**, we mean that we visit evey vertex of the graph, at least once. Following are some real-world applications for graph traversal:
    1. Web Crawling
    2. Shortest path problems:
        - GPS navigatoin
        - Solving mazes

## Depth First Search/Traversal

-   In this type of traversal, we first visit the neighbour of a visited vertex, before we visit its sibling.

### Recursive Approach

1. Create a function which accepts a **starting vertex**.
2. Create an object(hash table) to keep track of the nodes we have visited.
3. Create an array called **result**, to store the vertex elements in the required order.
4. Now define a helper method which also accepts a **node**, and do the following:
    1. Add the **node** to the **result** array, also add it to the object we had created and set its value to be **true**.
    2. Iterate through the array stored in its values(in the adjacacenyList) and check if these nodes are present in our object.
    3. If the node was not visited, then recursively call this helper method using it.
    4. The base case for the recursion is that the vertex passed to it, is an empty node.
5. Invoke the helper method using the **starting vertex**.
6. Return the **result** array.

### Iterative Approach

1. Create a function which accepts a **start node**.
2. Create an empty stack (You can just use an **array with push() and pop()**).
3. Create an array called **result**.
4. Create an object to keep track of the **visited** nodes.
5. **Push** the **start node** to the stack.
6. Do the following **while the stack isn't empty**:
    1. Perform **pop()** operation on the stack, store it as the **current node**.
    2. If **current node** has not been visited yet, push it to the **result** array, and add it to the object by setting its value to **true**.
    3. Then, **push()** the **current node**'s neighbour nodes to the stack.
7. Return the **result** array.

## Breadth First Search/Traversal

-   Here we first visit all the nodes at the same **height**. Consider height to be the value which indiactes the how many nodes away a reference node is. In other words, we need to first visit nodes on the same level before visiting the neighbour nodes.

1. Create a function which accpepts a **starting vertex**.
2. Create a queue (just an **array along with push() and shift()**).
3. Create an array to store the result.
4. Create an object to store the visited nodes.
5. **Enqueue** the **starting vertex**, set it to be **visited**.
6. Do the following while the queue isn't empty
    1. Perform **Dequeue** and store it as the **current node**.
    2. **Push** current node to the result array.
    3. Loop through the nodes which are stored as **neighbours** to **current node**.
    4. If the **neighbor node** isn't visited yet, then **enqueue** it, and mark it as being visited.
7. Return the result array.

**Note: The time complexities for all the traversal techniques is O(n) itself.**
