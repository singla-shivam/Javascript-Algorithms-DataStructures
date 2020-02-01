# Binary Search Tree
Binary Search Tree is a node-based binary tree data structure which has the following properties:

* The left subtree of a node contains only nodes with keys lesser than the node’s key.
* The right subtree of a node contains only nodes with keys greater than the node’s key.
* The left and right subtree each must also be a binary search tree.

They allow fast lookup, addition and removal of items,
and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key.

## Installation
Install with npm
```
npm i javascript-algo-ds
```

Import in your javascript file as: 
```javascript
const BinarySearchTree = require('javascript-algo-ds/src/data-structure/binarySearchTree/binarySearchTree')
```

## API
#### Constructor
##### Syntax
```javascript
const bst = new BinarySearchTree([value])
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
* [bst.insert(value)](#bstinsertvalue)
* [bst.contains(value)](#bstcontainsvalue)
* [bst.remove(value)](#bstremovevalue)
* [bst.traverseInOrder([callback])](#bsttraverseinordercallback)
* [bst.traversePreOrder([callback])](#bsttraversepreordercallback)
* [bst.traversePostOrder([callback])](#bsttraversepostordercallback)
* [bst.toString()](#bsttostring)

##### Static methods
* [fromArray(arr)](#binarysearchtreefromarrayarray) 

## bst.insert(value)
#### Parameters
* **value** - _number_
    * value to be added
    
 #### Returns
Type - `BinarySearchTreeNode`  
Returns reference to inserted node 

## bst.contains(value)
Checks if `value` is contained in the bst or not.
#### Parameters
* **value** - _number_
    * The number to be checked.
#### Returns
Type - `boolean`

## bst.remove(value)
#### Parameters
* **value** - _number_
    * value to be removed
    
 #### Returns
Type - `boolean`  
True if removed successfully, false otherwise. 

## bst.traverseInOrder([callback])
#### Parameters
* **callback** - _TraversalCallback_
    * Default value - undefined
    * Arguments - 
        * node - _BinarySearchTreeNode_ --- the current node
    * Optional
    
 #### Returns
Type - `number[]`  
Array of traversed nodes in in-order.

## bst.traversePreOrder([callback])
#### Parameters
* **callback** - _TraversalCallback_
    * Default value - undefined
    * Arguments - 
        * node - _BinarySearchTreeNode_ --- the current node
    * Optional
    
 #### Returns
Type - `number[]`  
Array of traversed nodes in pre-order.

## bst.traversePostOrder([callback])
#### Parameters
* **callback** - _TraversalCallback_
    * Default value - undefined
    * Arguments - 
        * node - _BinarySearchTreeNode_ --- the current node
    * Optional
    
 #### Returns
Type - `number[]`  
Array of traversed nodes in post-order. 

## bst.toString()
Converts the tree in sorted array in ascending order and returns it
#### Returns
Type - `String`

## BinarySearchTree.fromArray(array)
***@static***  
Creates BST from an array
 #### Parameters
* **array** - _number[]_
    * Array containing elements to be added.

 #### Returns
Type - `BinarySearchTree`