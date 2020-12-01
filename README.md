# CS-testing-environment
In this lesson, we'll learn about the basics of tree data structures. There are actually many different kinds of tree data structures, but we will focus on a few common ones. In this lesson, we'll cover general trees. Later in this section, we'll cover binary trees and binary search trees. We will also cover graphs, tries, and heaps in future sections.

General Trees
In computer science, a tree is a data structure that looks like an upside-down tree. We could also say it looks like the root system of a tree - however, we'll see in a moment why we describe it as an upside-down tree instead. Unlike data structures such as arrays and linked lists, which store data in a linear fashion, trees are non-linear data structures.

You've probably used a tree structure before, especially if you're interested in genealogy - a family tree is an example of a tree structure. While there are key differences in the way a family tree is structured, there is also a key similarity - family trees are used to convey data about relationships between people in a family. We can always trace our way through a family tree to find the exact relationship between two people - whether that is a great-great-grandparent or a fourth cousin. In the same way, we can traverse a tree structure to find relationships between different pieces of data.

Here is an example of a general tree structure.

Image of a general tree structure

A tree consists of connected nodes. Each connection between nodes is called an edge. Parent nodes can have many child nodes, but a child node can have only one parent. A tree structure will have a single root node which is either directly or indirectly the parent of all other nodes in the tree. As you can probably guess, the root node is never a child node to other nodes. Finally, child nodes that don't have any children of their own are called leaf nodes. It should be clear how this is similar to an upside-down tree - the leaf nodes are at the bottom while the root node is at the top.

Also, the above tree has a height of 4, which we can determine by counting from the top root node all the way down to the furthest leaf node.

We can also break up a tree into a series of subtrees or smaller trees. For instance, the image below shows a subtree inside the larger general tree.

Image showing a subtree

In this image, we also show two sibling nodes. Nodes that share the same direct parent are siblings. It's important to note, however, that sibling nodes aren't connected by edges.

Why is that important? Well, we can traverse a general tree structure because all nodes are linked, either directly or indirectly. However, to traverse between sibling nodes, we need to do so indirectly via their shared parent node. We will explore traversing trees further in future lessons.

Each node also has a key.

Each node has a key.

In a general tree, nodes don't necessarily have to be ordered in any specific way. However, in other types of trees, we'll find that the way nodes are placed is very important.

Can you think of a specific example of a tree structure we use every day at Epicodus? Hint: We can use the command cd to navigate through it.

If you guessed a file structure, you are correct. Whenever we navigate through folders on a computer, we are traversing through a tree structure. We can navigate up to the root node - the root directory in our computer. We can navigate between siblings, but only if we first cd up to a shared parent node. We can navigate to any directory or file on our machines via this traversal. Just from this small example, we can see that general trees are an essential part of our daily lives as developers. However, the importance of trees in computer science extends far beyond the file structures on our machines.
In this lesson, we'll give an overview of two data structures: the binary tree and the binary search tree. They are quite similar - the main difference is that a binary search tree has additional restraints that make it better for searching.

Binary Tree
A binary tree is a type of general tree structure. As the name suggests, it's a structure where each node can have no more than two child nodes. (We can infer this from the name because binary can be defined as something that has two parts.)

Here's an example of a binary tree:

Image of a binary tree.

In the diagram above, each parent node has at most two child nodes. However, it's also fine if a parent has one or zero nodes. (In the latter case, it's technically not a parent.) By the way, don't worry about how the keys line up on the nodes. They do not need to be ordered in a specific fashion in a binary tree.

When a parent has two child nodes in a binary tree, the child nodes are referred to as the left child and the right child based on whether the node is on the left or right.

When a parent has two nodes, the nodes are referred to as the left and right child.

Binary trees have many uses. In fact, compilers often use them to build what is known as an abstract syntax tree (or AST) - an intermediate representation of the code that is not yet fully compiled. The JavaScript parser uses an AST as well, though it's a general tree, not a binary tree.

Binary Search Tree
A binary search tree is very similar to a binary tree but also has a few additional restrictions. Let's take a look at an example.

An example of a binary search tree.

In the example above, you'll see that all child nodes to the left of the root node have a value less than the root node. Meanwhile, all child nodes to the right of the root node have a value greater than the root node. This pattern continues all the way down the tree. The left-hand child always has a value less than its parent while the right-hand child always has a value greater than its parent. Based on this pattern, we automatically know a few things about a few values in a binary search tree. The bottom left leaf node will be the lowest value in the tree while the bottom right leaf node will be the greatest value in the tree.

Duplicate keys aren't allowed in a binary search tree. This should make intuitive sense - because each child node must be either less than or greater than its parent node's key, there is no possibility of repeat keys.

Over the next several lessons, we'll create a small application that makes a binary search tree from scratch. In the process, we'll also learn how to search a binary search tree.
