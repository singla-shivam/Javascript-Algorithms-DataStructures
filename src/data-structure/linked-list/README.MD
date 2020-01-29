# Linked List
A linked list is a linear collection of data elements, whose order is not given by their physical placement in memory.
Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.
In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. 

Linked lists are among the simplest and most common data structures.
They can be used to implement several other common abstract data types, including
[lists](https://en.wikipedia.org/wiki/List_(abstract_data_type\)),
[stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type\)),
[queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type\)), and
[S-expressions](https://en.wikipedia.org/wiki/S-expression).

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

#### list.prepend(value)
___
Adds `value` at the start of the list.
##### Parameters
* **value** - _T_
    * The value to be added.
    
##### Returns
Returns `this`

&nbsp;</br>
 
#### list.append(value)
___
Adds `value` at the end of the list.
##### Parameters
* **value** - _T_
    * The value to be added.
     
##### Returns
Returns `this`
 
&nbsp;</br>
 
#### list.delete(value)
___
Deletes `value` from the list.
##### Parameters
* **value** - _T_
    * The value to be deleted.
     
##### Returns
Returns `this`
 
&nbsp;</br>
 
#### list.find(value, [index])
___
Finds `value` in the list.
##### Parameters
* **value** - _T_
    * Value to find.
* **index** - _boolean_
    * Default value - true
    * If true, returns the index of `value` in the list (0-indexing) if found, -1 if not found.
    * If false, returns the object itself if found, `null` if not found.
    * Optional
     
##### Returns
Type - `number | LinkedListNode`  
Returns index or the object itself
 
&nbsp;</br>
 
#### list.deleteHead()
___
Deletes head from the list.
##### Returns
Type - `LinkedListNode | null`  
Returns removed head of the list if list is not empty or `null` otherwise.
 
&nbsp;</br>
 
#### list.deleteTail()
___
Deletes tail from the list.
##### Returns
Type - `LinkedListNode | null`  
Returns removed tail of the list if list is not empty or `null` otherwise.
 
&nbsp;</br>
 
#### list.get(index)
___
Get a node at index `index`.
##### Parameters
* **index** - _number_
    * The index of the node.
     
##### Returns
Type - `LinkedListNode | symbol`  
Returns the node at `index`, null if `index` is greater than size of list, `LinkedList.UNDEFINED_HEAD` if list is empty 
 
&nbsp;</br>
 
#### list.traverse()
___
Traverses the list from head to tail.
##### Parameters
* **callback** - _TraverseCallback_
    * The callback to which the current node and its index is passed.
    * Arguments - 
        * curr - _[LinkedListNode](linkedListNode.js)_ --- the current node
        * index - _number_ --- index of current node (0-indexing)
        * size - _number_ --- number of elements in the list
        * list - _[LinkedList](linkedList.js)_ --- the list itself
    * Throws error if callback is not defined
    
##### Returns
Returns the object returned by the `callback`

&nbsp;</br>

#### list.toArray()
___
Converts the list into an array and returns it.
##### Returns
Type - Array<T>

&nbsp;</br>

#### list.toString()
____
Converts the list into string of form "1 -> 2 -> 3" and returns it.
##### Returns
Type - String

&nbsp;</br>

#### LinkedList.fromArray(array, [compareFunc])
___
***@static***  
Creates the list from an array
##### Parameters
* **array** - _T[]_
    * Array of objects
* **compareFunction** - _function_
    * Default value - undefined

##### Returns
Type - `LinkedList`
