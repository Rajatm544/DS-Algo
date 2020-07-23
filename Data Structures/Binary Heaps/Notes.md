# Binary Heaps

-   They are a type of **Binary Tree** wherein the parent nodes of the tree have a special property assigned to them, which decide what type of a Biney Heap it is.
-   There are two types of Binary Heaps:
    1. **Max Binary Heap**: In this the **parent node** is always **greater than its child nodes**. (Root node being the largest)
    2. **Min Binary Heap**: In this the **parent node** is always **lesser than its child nodes**. (Root node being the smallest)
-   **Note**
    1. All binary heaps must be a valid Binary tree.
    2. A binary heap is **not** the same as a BST.
    3. While filling a binary heap, the **left** child node is filled **before** filling the **right** child node
    4. **For the rest of these notes, assume that we are discussing about a max binary heap**.

## Storing the Binary Heap

-   We can use a mathematical trick to help us store the entire binary heap using an array instead of implementing it using a seperate class.
-   Given the index of a _parent node_ **n**, the _child node_ will be at the index given by **(2n + 1)**.
-   Conversely, given the index of the _child node_ as **n**, then the _parent node_ index will be given by **Math.floor((n - 1) / 2)**.

## Inserting an element to a Binary Heap

-   **Note**: In this method we are implementing a max binary heap as an array, and we are always filling the left node before we are filling the right node.

1. Create a fn which accepts a value and **push** the new element to the array.
2. **Bubble up** this element, in order to place it at the right index, by doing the following
    1. Store the **last index** of the array (the position where we last added a new value) in a variable called **newIndex**
    2. Store the index of **Math.floor((n - 1) / 2)**, or the parent node, in another variable called **parentIndex**
    3. Check if array element at the **parentIndex** is **larger** than the element at **newIndex**, in other words check if the **parent node is larger than the child node**, and do the following:
        - **If not**, then **swap** the two elements. Then set the **newIndex** to be equal to the **parentIndex** and **start over**.
        - If parent element is larger, that means that the element has been added to the right index.

## Extracting the maximum form the Max Binary Heap

-   We remove the 'root' value, and replace it with the last value of the array(the last value added to the heap). Then we need to perform a **sink down** operation wherein we compare the new root to its child nodes and kepp swapping until the new root is inserted into its correct index.

1. Create a fn which accepts no parameters, and swap the first and last element in the array.
2. Perform **pop()** to remove the old root (which would have been the maximum in the entire binary heap).
3. Now, perform the operation of **sink down**/bubble down i.e to place the new root in its correct position:
    1. Let the **parent index** start from 0(the new root).
    2. Find the index of its **left** child node, using formula **((2 \* index) + 1)**, store it temporarily.
    3. Find the index of the **right** child node, using **((2 \* index) + 1)**, store it.
    4. **Compare** the child nodes to the parent node, and **swap** the parent node with the **bigger child node**.
    5. The **child index** that was swapped, now becomes the **new parent index**.
    6. If the parent node is already bigger than the child nodes, then the correct position has been reached, otherwise keep looping.
4. Return the old root.

## Time Complexity

-   **Insertion**: It is O(log n) because when we sink down, we only ever go down 1 level for every iteration. So even if there are 32 nodes in the binary heap, we'' need to sink down 5 levels.
-   **Removal**: It is O(log n). Reason is similar to reson for insertion's time complexity.
-   **Searching**: It is O(n).
    <br>
    **Note**: Unlike a BST, we **cannot have a worst case time complexity of O(n)** in insertion and removal as there isn't case wherein a binary heap is one-sided.
