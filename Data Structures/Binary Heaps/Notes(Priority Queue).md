# Priority Queue

-   It is an abstarct data structure that is used to order things based on a certain priority value. The highest priority node is first removed, and so on. They can implemented using many different data structures like arrays, linked lists but more often than not, they are implemented using a binary heap.

## Implementing a priority queue using a binary heap

-   In case of priority, the lesser value is the higher priority. It's like a rank, and therefore when we need to arrange data based on a priority, it's better to **use a min binary heap**, as it automatically assigns the lowest valued priority (highest priority) as the root.
-   In this case, we need to have a seperate **Node** class to hold a **value(data)** and **a priority**, and the **MinBinaryHeap** class will **store an array of these nodes**.
-   Pseudocode is as follows:
    1. Create a Node class to store a value and a priority.
    2. Create a MinBinaryHeap class to store an array(of nodes).
    3. Create a **enqueue()** method similar to the **insert()** method, which accpets a **value** and a **priority**:
        - Create a new node. Add it to the last index and perform **bubbleUp()** but now in terms of a min binary heap (lower priority value reaches top).
    4. Create a **dequeue()** similar to the **extractMax()** method, but now it should remove the min (as it's a different binary heap) and perform the same **sinkDown()** operation with a few changes.
