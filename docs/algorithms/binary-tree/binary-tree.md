# Binary Tree

Tree Types
----------

Binary trees come in several variations, each with unique properties:

1.  **Complete Binary Tree (CBT)**: Every level is filled, except possibly the last, which is filled from left to right.
2.  **Perfect Binary Tree (PBT)**: All interior nodes have two children, and all leaf nodes are at the same level.
3.  **Full Binary Tree (FBT)**: Every node has either 0 or 2 children.
4.  **Binary Search Tree (BST)**: For each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater.

- 🟨 [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/) [[Solution](./222.%20Count%20Complete%20Tree%20Nodes.md)]
- 🟨 [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) [[Solution](./230.%20Kth%20Smallest%20Element%20in%20a%20BST.md)]
- 🟨 [285. Inorder Successor in BST](https://leetcode.com/problems/inorder-successor-in-bst/)
- 🟩 [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) [[Solution](./530.%20Minimum%20Absolute%20Difference%20in%20BST.md)]
- 🟩 [783. Minimum Distance Between BST Nodes](https://leetcode.com/problems/minimum-distance-between-bst-nodes/) [[Solution](./783.%20Minimum%20Distance%20Between%20BST%20Nodes.md)]
- 🟨 [1038. Binary Search Tree to Greater Sum Tree](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/) [[Solution](./1038.%20Binary%20Search%20Tree%20to%20Greater%20Sum%20Tree.md)]

Tree Traversal
--------------

Understanding different traversal methods is crucial for working with binary trees:

1.  **Inorder Traversal**: Left subtree, Root, Right subtree
2.  **Preorder Traversal**: Root, Left subtree, Right subtree
3.  **Postorder Traversal**: Left subtree, Right subtree, Root
4.  **Level Order Traversal**: Visit nodes level by level, from left to right

-   🟩 [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) [[Solution](./94.%20Binary%20Tree%20Inorder%20Traversal.md)]
-   🟨 [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
-   🟨 [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
-   🟨 [107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
-   🟨 [116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) [[Solution](./116.%20Populating%20Next%20Right%20Pointers%20in%20Each%20Node.md)]
-   🟨 [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) [[Solution](./117.%20Populating%20Next%20Right%20Pointers%20in%20Each%20Node%20II.md)]
-   🟩 [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) [[Solution](./144.%20Binary%20Tree%20Preorder%20Traversal.md)]
-   🟩 [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) [[Solution](./145.%20Binary%20Tree%20Postorder%20Traversal.md)]
-   🟨 [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) [[Solution](./173.%20Binary%20Search%20Tree%20Iterator.md)]
-   🟩 [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) [[Solution](./637.%20Average%20of%20Levels%20in%20Binary%20Tree.md)]

Tree Properties and Operations
------------------------------

This section covers various properties and operations on binary trees:

### Tree Depth/Width

-   🟩 [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) [[Solution](./104.%20Maximum%20Depth%20of%20Binary%20Tree.md)]
-   🟩 [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) [[Solution](./543.%20Diameter%20of%20Binary%20Tree.md)]
-   🟨 [662. Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/) [[Solution](./662.%20Maximum%20Width%20of%20Binary%20Tree.md)]

### Tree Paths

-   🟩 [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) [[Solution](./257.%20Binary%20Tree%20Paths.md)]
-   🟩 [112. Path Sum](https://leetcode.com/problems/path-sum/) [[Solution](./112.%20Path%20Sum.md)]
-   🟨 [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/)
-   🟨 [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/)
-   🟥 [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
-   🟨 [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) [[Solution](./129.%20Sum%20Root%20to%20Leaf%20Numbers.md)]

### Tree Structure Modification

-   🟩 [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) [[Solution](./226.%20Invert%20Binary%20Tree.md)]
-   🟨 [1382. Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/) [[Solution](./1382.%20Balance%20a%20Binary%20Search%20Tree.md)]
-   🟨 [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

### Tree Construction

-   🟨 [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) [[Solution](./105.%20Construct%20Binary%20Tree%20from%20Preorder%20and%20Inorder%20Traversal.md)]
-   🟨 [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
-   🟩 [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) [[Solution](./108.%20Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree.md)]
-   🟨 [889. Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)
-   🟨 [1008. Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/)
-   🟨 [2196. Create Binary Tree From Descriptions](https://leetcode.com/problems/create-binary-tree-from-descriptions/) [[Solution](./2196.%20Create%20Binary%20Tree%20From%20Descriptions.md)]

### Tree Validation

-   🟨 [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) [[Solution](./98.%20Validate%20Binary%20Search%20Tree.md)]
-   🟨 [1361. Validate Binary Tree Nodes](https://leetcode.com/problems/validate-binary-tree-nodes/)
-   🟩 [100. Same Tree](https://leetcode.com/problems/same-tree/) [[Solution](./100.%20Same%20Tree.md)]
-   🟩 [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) [[Solution](./101.%20Symmetric%20Tree.md)]
-   🟩 [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) [[Solution](./110.%20Balanced%20Binary%20Tree.md)]
-   🟩 [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

Special Problems
----------------

This section covers unique problem types related to binary trees:

### Lowest Common Ancestor

-   🟨 [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) [[Solution](./235.%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Search%20Tree.md)]
-   🟨 [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) [[Solution](./236.%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree.md)]
-   🟨 [1123. Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/) [[Solution](./1123.%20Lowest%20Common%20Ancestor%20of%20Deepest%20Leaves.md)]
-   🟨 [1740. Find Distance in a Binary Tree](https://leetcode.com/problems/find-distance-in-a-binary-tree)
-   🟨 [2096. Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/) [[Solution](./2096.%20Step-By-Step%20Directions%20From%20a%20Binary%20Tree%20Node%20to%20Another.md)]

### Tree View Problems

-   🟨 [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)

### Serialization and Deserialization

-   🟥 [297. Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

### Leaf Node Related

-   🟩 [404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/)
-   🟩 [872. Leaf-Similar Trees](https://leetcode.com/problems/leaf-similar-trees/)

### Node Deletion

-   🟨 [1110. Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/) [[Solution](./1110.%20Delete%20Nodes%20And%20Return%20Forest.md)]
-   🟨 [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

### Tree and Linked List Combination

-   🟨 [1367. Linked List in Binary Tree](https://leetcode.com/problems/linked-list-in-binary-tree/) [[Solution](./1367.%20Linked%20List%20in%20Binary%20Tree.md)]

Problem Difficulty Legend
-------------------------

-   🟩 Easy
-   🟨 Medium
-   🟧 Medium-Hard
-   🟥 Hard
-   ⬛ Very Hard

Additional Resources
--------------------

-   [Binary Search Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/BST.html)
-   [Data structures: Binary Tree (Video)](https://www.youtube.com/watch?v=H5JubkIy_p8)
