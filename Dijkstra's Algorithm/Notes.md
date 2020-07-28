# Dijkstra's Alogorithm

-   It is a very popular algorithm to find the **shortest path** between any two vertices in **a weighted graph**.
-   It has applications in many fields other than computer science, as follows:

    1. **GPS**: It can be used to find the fastest path between teo places.
    2. **Biology**: It can be used to map the spread of viruses.
    3. **Airlines**: The algorithms can help fix a desired route.
    4. **Network Routing**: It can be used to find the shortest path for sending data.

-   The rough pseudocode for implementing this algorithm is as follows:

    1. Everytime we look to visit a node, we pick the node with the smallest known distance to visit first.
    2. Once we've moved to the node we're going to visit, we look at each of its neighbours.
    3. For each eighbouring node, we calculate the distance by summing the total edges that lead to the node we're checking, **from the starting node**.
    4. If the new total distance to a node is less than than the previous total, we store the new shorter distance for that node.

-   We use a priority queue (implemented from a min binary heap / implemented _naively_ as a sorted array) to follow the step wherein we have to decide which node to look at, such that it has the shortest path from the starting node.

**NOTE**: To implement a priority queue without using a min binary heap, just sort the nodes stored in an array in ascending order based on its priority.

## Pseudocode for Dijkstra's Path Finding Algorithm

1. Create a funtion that accepts a **start vertex** and an **end vertex**.
2. Create an object called **distance** to store the distances of each vertex in the adjacency list, from the **start vertex**. Set the values of all the vertices to be **Infinity** in the beginning, **except for the start vertex** whose value will be **zero**.
3. In order to access the **vertex with the least distance** (from the start vertex) from the **distance** object, we need to **create a priority queue**. Store the value, and the distance as a single node in the priority queue. Set the priority of **start vertex** to be zero. Other nodes can have a priority of Infinty.
4. Create an object called **previous**. Store all the vertices as keys. The values will be the **node which is the shortest distance neighbor** previous to the **key**. Initially, set all the values to be **null**.
5. Start looping as long as there are nodes in the priority queue:
    1. Dequeue a vertex from the priority queue.
    2. If **this vertex** is the same as the **end vertex**, then break out of the loop.
    3. Otherwise, **loop** through the **subarray stored as the value** in the adjacency list, for the key of **this vertex**, and do the following:
        1. Calculate the distance from each **neighbour vertex** to the **start vertex**. Do this by adding the value for the weight of this edge and the **distance** value for **the vertex whose values we are looping through**.
        2. If this distance **value** for the neighbour vertex **is less** than the value in the **distance** object, then do the following:
            - Update the **distance** object with the correct value of distance for the key corresponding to the current neighbour node.
            - Update the **previous** object, so that the value corresponding to the **current neighbour node** is the **key** for the _subarray of neighbour nodes_ we are looping through.
            - **Enqueue** the **current neighbour vertex**, with the **new distance value** to the priority queue.
6. Return an array having the vertices in the same order as the shortest path. Also, return the weight of the shortest path.
