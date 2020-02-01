# Red Black Tree
A red–black tree is a kind of self-balancing binary search tree.

Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or black) of the node.
These color bits are used to ensure the tree remains approximately balanced during insertions and deletions.

The balancing of the tree is not perfect, but it is good enough to allow it to guarantee searching in **O(log n)** time,
where **n** is the total number of elements in the tree.
The insertion and deletion operations, along with the tree rearrangement and recoloring, are also performed in **O(log n)** time.

## Installation
Install with npm
```
npm i javascript-algo-ds
```

Import in your javascript file as: 
```javascript
const RedBlackTree = require('javascript-algo-ds/src/data-structure/red-black-tree/redBlackTree')
```

## API
#### Constructor
##### Syntax
```javascript
const redBlackTree = new RedBlackTree([value])
```
##### Parameters
* **value** - _number_
    * Default value - null
    * value of root
    * Optional
    

#### Properties
 * **root** - the root node
 * **height** - the height of the tree

#### Methods
* [redBlackTree.insert(value)](#redblacktreeinsertvalue)
* [redBlackTree.contains(value)](#redblacktreecontainsvalue)
* [redBlackTree.traverseInOrder([callback])](#redblacktreetraverseinordercallback)
* [redBlackTree.traversePreOrder([callback])](#redblacktreetraversepreordercallback)
* [redBlackTree.traversePostOrder([callback])](#redblacktreetraversepostordercallback)
* [redBlackTree.toString()](#redblacktreetostring)

##### Static methods
* [fromArray(arr)](#redblacktreefromarrayarray) 

## redBlackTree.insert(value)
Inserts value in the tree followed by balancing if required.
#### Parameters
* **value** - _number_
    * value to be added
    
 #### Returns
Type - `BinarySearchTreeNode`  
Returns reference to inserted node 

## redBlackTree.contains(value)
Checks if `value` is contained in the tree or not.
#### Parameters
* **value** - _number_
    * The number to be checked.
#### Returns
Type - `boolean` 

## redBlackTree.traverseInOrder([callback])
#### Parameters
* **callback** - _TraversalCallback_
    * Default value - undefined
    * Arguments - 
        * node - _BinarySearchTreeNode_ --- the current node
    * Optional
    
 #### Returns
Type - `number[]`  
Array of traversed nodes in in-order.

## redBlackTree.traversePreOrder([callback])
#### Parameters
* **callback** - _TraversalCallback_
    * Default value - undefined
    * Arguments - 
        * node - _BinarySearchTreeNode_ --- the current node
    * Optional
    
 #### Returns
Type - `number[]`  
Array of traversed nodes in pre-order.

## redBlackTree.traversePostOrder([callback])
#### Parameters
* **callback** - _TraversalCallback_
    * Default value - undefined
    * Arguments - 
        * node - _BinarySearchTreeNode_ --- the current node
    * Optional
    
 #### Returns
Type - `number[]`  
Array of traversed nodes in post-order. 

## redBlackTree.toString()
Converts the tree in sorted array in ascending order and returns it
#### Returns
Type - `String`

## RedBlackTree.fromArray(array)
***@static***  
Creates AVL tree from an array
 #### Parameters
* **array** - _number[]_
    * Array containing elements to be added.

 #### Returns
Type - `RedBlackTree`