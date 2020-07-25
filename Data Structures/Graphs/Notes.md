# Graphs

-   A bunch of **nodes with connections** in **no particular order or hierarchy**.
-   They are used almost in every field for various applications, some of them are listed below:
    -   Social Networks
    -   Routing Algorithms
    -   Location Mapping
    -   Visual hierarchy
    -   File System Optimization
    -   Suggestion Algorithms

## Terminology used & a few different types of graphs

-   **Vertex**: A node in a graph is aslo called as a vertex.
-   **Edge**: A connection between any two vertices.
-   **Undirected Graph**: No direction for any edges of the graph.
-   **Directed Graph**: An edge has a specific direction for it to connect two vertices.
-   **Unweighted Graph**: The edges themselves do not have any value/priority/weight assigned to them.
-   **Weighted Graph**: The edges have some value assigned with it, which indicates the weight of the edge.

## Methods to represent a Graph

### Using Adjacency Matrix

-   These are used to store both directed and undirected graphs. Wherein we define the **column and row headers** to be the **vertices**, and we represent whether or not there is an **edge conncecting** the two nodes by **either storing a 1 or 0** respectively.
-   An undirected graph will have a matrix symmetric about the major diagonal.

### Using Adjecency List

-   These can also be used to store both directed and undirected graphs.
-   **If the vertices store numbers only**, then we can store the **nodes connected to this vertex** as a **subarray at an index** representing the vertex we are referencing.
-   Otherwse, we can **use hash tables** to store the corresponding nodes(connected to the key vertex) as the values. This means that all the **vertices will act as keys**, and the **corresponding connected nodes can be the values**.

### Comparision between the two representations of graphs

-   The time complexities for the various operations in both the implementations can be [found here](https://img.techpowerup.org/200725/screenshot-165.png)
-   But in general, the trend is as follows:

    |                     Adjacency List                     |                   Adjacency Matrix                    |
    | :----------------------------------------------------: | :---------------------------------------------------: |
    |  Can take up less space in memory, for a sparse graph  | Takes up way more memory even to store a sparse graph |
    |          Faster to iterate over all the edges          |        Slower to iterate over all of the edges        |
    | Slower to check for edge between any to specific nodes |         Way faster lookup for a specific edge         |

-   We shall implement a **graph as an adjacency list** because most real-world data lends itself to being more sparce, and because it takes lesser space in memory.

## Implementing the various methods for the Graph (Adjacency List)

-   To implement a method **addVertex()** to add a new vertex to our graph:

    1. Create a new fn which **accepts a vertex** which can be a number or a string.
    2. Add a new **key-value pair** to our hash table wherein the **key is the vertex parameter** and the **value is an empty array**.

-   To implement a method **addEdge()** to add an **undirected** edge between two vertices:

    1. Create a function to accept two vertices **vertex1**, **vertex2** as its parameters.
    2. Search the adjacency list for the key of **vertex1** and push vertex2 to its value (array).
    3. Search the adjacency list for the key of **vertex2** and push vertex1 to its value (array).

-   To implement a method **removeEdge()** to remove an undirected edge betwenn two vertices:

    1. Create a funtion to accept two vertices, **vertex1** and **vertex2**.
    2. Search the adjacency list for the key of **vertex1** and remove the value of **vertex2** from the array.
    3. Search the adjacency list for the key of **vertex2** and remove the value of **vertex1** from the array.

-   To implement a method **removeVertex()** to remove a vertex:
    1. Create a function which accepts a **vertex name**.
    2. Loop through all the array elements(vertices) stored in the value of the key **vertex name**.
    3. Call the **removeEdge()** method for all the pair of vertices which was stored in the adjacencyList.
       <br
       **Note**: Here pair comprises of the **vertex name** and each of the array elements.
    4. Delete the key of the vertex.
