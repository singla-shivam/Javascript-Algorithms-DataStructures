# Linked List
A linked list is a linear collection of data elements, whose order is not given by their physical placement in memory.
Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.
In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. 

Linked lists are among the simplest and most common data structures.
They can be used to implement several other common abstract data types, including
lists,
stacks,
queues, and
S-expressions.

## Installation
Install with npm
```
npm i javascript-algo-ds
```

Import in your javascript file as: 
```javascript
const LinkedList = require('javascript-algo-ds/src/data-structure/linked-list/linkedList')
```

## Usage

Create empty linked list:
```javascript
const list = new LinkedList()
```

## API
#### Constructor
##### Syntax
```javascript
new LinkedList(compareFunction)
```
##### Parameters
* **compareFunction** - _function_
    * Default value - undefined
    
#### Properties
 * **head** - node of type [LinkedListNode](linkedListNode.js) pointing to head of the list
 * **tail** - node of type [LinkedListNode](linkedListNode.js) pointing to tail of the list
 * **size** - number of elements in the list
 * **compare** - comparator of type [Comparator](../../utils/comparator/comparator.js) 

##### Static properties
 * **UNDEFINED_HEAD** - _Symbol_ representing "head is not defined"
 
#### Methods
* [list.prepend(value)](#listprependvalue)
* [list.append(value)](#listappendvalue)
* [list.delete(value)](#listdeletevalue)
* [list.find(value, index)](#listfindvalue-index)
* [list.deleteHead()](#listdeletehead)
* [list.deleteTail()](#listdeletetail)
* [list.get(index)](#listgetindex)
* [list.traverse(callback)](#listtraverse)
* [list.toArray()](#listtoarray)
* [list.toString()](#listtostring)

##### Static methods
* [fromArray](#linkedlistfromarrayarray-comparefunc) 

list.prepend(value)
-----
Adds `value` at the start of the list.
 #### Parameters
* **value** - _T_
    * The value to be added.
    
 #### Returns
Returns `this` 
 
list.append(value)
----
Adds `value` at the end of the list.
 #### Parameters
* **value** - _T_
    * The value to be added.
     
 #### Returns
Returns `this` 
 
list.delete(value)
----
Deletes `value` from the list.
 #### Parameters
* **value** - _T_
    * The value to be deleted.
     
 #### Returns
Returns `this` 
 
list.find(value, [index])
----
Finds `value` in the list.
 #### Parameters
* **value** - _T_
    * Value to find.
* **index** - _boolean_
    * Default value - true
    * If true, returns the index of `value` in the list (0-indexing) if found, -1 if not found.
    * If false, returns the object itself if found, `null` if not found.
    * Optional
     
 #### Returns
Type - `number | LinkedListNode`  
Returns index or the object itself 
 
list.deleteHead()
----
Deletes head from the list.
 #### Returns
Type - `LinkedListNode | null`  
Returns removed head of the list if list is not empty or `null` otherwise. 
 
list.deleteTail()
----
Deletes tail from the list.
 #### Returns
Type - `LinkedListNode | null`  
Returns removed tail of the list if list is not empty or `null` otherwise. 
 
list.get(index)
----
Get a node at index `index`.
 #### Parameters
* **index** - _number_
    * The index of the node.
     
 #### Returns
Type - `LinkedListNode | symbol`  
Returns the node at `index`, null if `index` is greater than size of list, `LinkedList.UNDEFINED_HEAD` if list is empty  
 
list.traverse()
----
Traverses the list from head to tail.
 #### Parameters
* **callback** - _TraverseCallback_
    * The callback to which the current node and its index is passed.
    * Arguments - 
        * curr - _[LinkedListNode](linkedListNode.js)_ --- the current node
        * index - _number_ --- index of current node (0-indexing)
        * size - _number_ --- number of elements in the list
        * list - _[LinkedList](linkedList.js)_ --- the list itself
    * Throws error if callback is not defined
    
 #### Returns
Returns the object returned by the `callback` 

list.toArray()
----
Converts the list into an array and returns it.
 #### Returns
Type - Array<T> 

list.toString()
----
Converts the list into string of form "1 -> 2 -> 3" and returns it.
 #### Returns
Type - String 

LinkedList.fromArray(array, [compareFunc])
----
***@static***  
Creates the list from an array
 #### Parameters
* **array** - _T[]_
    * Array of objects
* **compareFunction** - _function_
    * Default value - undefined

 #### Returns
Type - `LinkedList`
