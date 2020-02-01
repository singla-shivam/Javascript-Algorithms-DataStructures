# AVL Tree
An AVL tree (named after inventors Adelson-Velsky and Landis) is a self-balancing binary search tree.

In an AVL tree, the heights of the two child subtrees of any node differ by at most one;
if at any time they differ by more than one, rebalancing is done to restore this property.
Lookup, insertion, and deletion all take **O(log n)** time in both the average and worst cases, where **n** is the number of nodes in the tree prior to the operation.
Insertions and deletions may require the tree to be rebalanced by one or more tree rotations.

## Installation
Install with npm
```
npm i javascript-algo-ds
```

Import in your javascript file as: 
```javascript
const AvlTree = require('javascript-algo-ds/src/data-structure/avl-tree/avlTree')
```

## API
#### Constructor
##### Syntax
```javascript
const avl = new AvlTree([value])
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
* [avl.insert(value)](#avlinsertvalue)
* [avl.contains(value)](#avlcontainsvalue)
* [avl.remove(value)](#avlremovevalue)
* [avl.traverseInOrder([callback])](#avltraverseinordercallback)
* [avl.traversePreOrder([callback])](#avltraversepreordercallback)
* [avl.traversePostOrder([callback])](#avltraversepostordercallback)
* [avl.toString()](#avltostring)

##### Static methods
* [fromArray(arr)](#avltreefromarrayarray) 

## avl.insert(value)
Inserts value in the tree followed by balancing if required.
#### Parameters
* **value** - _number_
    * value to be added
    
 #### Returns
Type - `BinarySearchTreeNode`  
Returns reference to inserted node 

## avl.contains(value)
Checks if `value` is contained in the tree or not.
#### Parameters
* **value** - _number_
    * The number to be checked.
#### Returns
Type - `boolean`

## avl.remove(value)
Removes value from tree followed by balancing if required.
#### Parameters
* **value** - _number_
    * value to be removed
    
 #### Returns
Type - `boolean`  
True if removed successfully, false otherwise. 

## avl.traverseInOrder([callback])
#### Parameters
* **callback** - _TraversalCallback_
    * Default value - undefined
    * Arguments - 
        * node - _BinarySearchTreeNode_ --- the current node
    * Optional
    
 #### Returns
Type - `number[]`  
Array of traversed nodes in in-order.

## avl.traversePreOrder([callback])
#### Parameters
* **callback** - _TraversalCallback_
    * Default value - undefined
    * Arguments - 
        * node - _BinarySearchTreeNode_ --- the current node
    * Optional
    
 #### Returns
Type - `number[]`  
Array of traversed nodes in pre-order.

## avl.traversePostOrder([callback])
#### Parameters
* **callback** - _TraversalCallback_
    * Default value - undefined
    * Arguments - 
        * node - _BinarySearchTreeNode_ --- the current node
    * Optional
    
 #### Returns
Type - `number[]`  
Array of traversed nodes in post-order. 

## avl.toString()
Converts the tree in sorted array in ascending order and returns it
#### Returns
Type - `String`

## AvlTree.fromArray(array)
***@static***  
Creates AVL tree from an array
 #### Parameters
* **array** - _number[]_
    * Array containing elements to be added.

 #### Returns
Type - `AvlTree`