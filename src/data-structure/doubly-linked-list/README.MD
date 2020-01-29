# Doubly Linked List
A doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes.
Each node contains three fields: two link fields (references to the previous and to the next node in the sequence of nodes) and one data field.

The two node links allow traversal of the list in either direction.
While adding or removing a node in a doubly linked list requires changing more links than the same operations on a singly linked list,
the operations are simpler and potentially more efficient (for nodes other than first- nodes) because there is no need to keep track of the previous node during traversal or no need to traverse the list to find the previous node,
so that its link can be modified.

## Installation
Install with npm
```
npm i javascript-algo-ds
```

Import in your javascript file as: 
```javascript
const DoublyLinkedList = require('javascript-algo-ds/src/data-structure/doubly-linked-list/doublyLinkedList')
```

## Usage

Create empty doubly linked list:
```javascript
const list = new DoublyLinkedList()
```

## API
#### Constructor
##### Syntax
```javascript
new DoublyLinkedList(compareFunction)
```
##### Parameters
* **compareFunction** - _function_
    * Default value - undefined
    
#### Properties
 * **head** - node of type [DoublyLinkedListNode](doublyLinkedListNode.js) pointing to head of the list
 * **tail** - node of type [DoublyLinkedListNode](doublyLinkedListNode.js) pointing to tail of the list
 * **size** - number of elements in the list
 * **compare** - comparator of type [Comparator](../../utils/comparator/comparator.js) 

##### Static properties
 * **UNDEFINED_HEAD** - _Symbol_ representing "head is not defined"
 * **UNDEFINED_TAIL** - _Symbol_ representing "tail is not defined"
 
#### Methods
* [list.prepend(value)](#listprependvalue)
* [list.append(value)](#listappendvalue)
* [list.delete(value)](#listdeletevalue)
* [list.find(value, index)](#listfindvalue-index)
* [list.deleteHead()](#listdeletehead)
* [list.deleteTail()](#listdeletetail)
* [list.get(index)](#listgetindex)
* [list.reverse()](#listreverse)
* [list.traverse(callback, [start])](#listtraversecallback-start)
* [list.traverseFromHead()](#listtraversefromhead)
* [list.traverseFromTail()](#listtraversefromtail)
* [list.toArray()](#listtoarray)
* [list.toString()](#listtostring)

##### Static methods
* [fromArray](#doublylinkedlistfromarrayarray-comparefunc) 

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
Type - `number | DoublyLinkedListNode`  
Returns index or the object itself
 
&nbsp;</br>
 
#### list.deleteHead()
___
Deletes head from the list.
##### Returns
Type - `DoublyLinkedListNode | null`  
Returns removed head of the list if list is not empty or `null` otherwise.
 
&nbsp;</br>
 
#### list.deleteTail()
___
Deletes tail from the list.
##### Returns
Type - `DoublyLinkedListNode | null`  
Returns removed tail of the list if list is not empty or `null` otherwise.
 
&nbsp;</br>
 
#### list.get(index)
___
Get a node at index `index`.
##### Parameters
* **index** - _number_
    * The index of the node.
     
##### Returns
Type - `DoublyLinkedListNode | symbol`  
Returns the node at `index`, null if `index` is greater than size of list, `DoublyLinkedList.UNDEFINED_HEAD` if list is empty 
 
&nbsp;</br>
 
#### list.reverse()
___
Reverse the list.
##### Returns
Returns `this`
 
&nbsp;</br>
 
#### list.traverse(callback, [start])
___
Traverses the list either from head or tail.
##### Parameters
* **callback** - _TraverseCallback_
    * The callback to which the current node and its index is passed.
    * Arguments - 
        * curr - _[DoublyLinkedListNode](doublyLinkedListNode.js)_ --- the current node
        * index - _number_ --- index of current node (0-indexing)
        * size - _number_ --- number of elements in the list
        * list - _[DoublyLinkedList](doublyLinkedList.js)_ --- the list itself
    * Throws error if callback is not defined
* **start** - _0 | 1_
    * Default value - 0
    * If `0` traversal is from head, if `1` traversal is from tail in reverse direction.
    * Optional
    
 ##### Returns
 Returns the object returned by the `callback`
 
&nbsp;</br>

#### list.traverseFromHead()
___
Traverses the list from head to tail.
##### Parameters
* **callback** - _TraverseCallback_
    * The callback to which the current node and its index is passed.
    * Arguments - 
        * curr - _[DoublyLinkedListNode](doublyLinkedListNode.js)_ --- the current node
        * index - _number_ --- index of current node (0-indexing)
        * size - _number_ --- number of elements in the list
        * list - _[DoublyLinkedList](doublyLinkedList.js)_ --- the list itself
    * Throws error if callback is not defined
    
##### Returns
Returns the object returned by the `callback`

&nbsp;</br>

#### list.traverseFromTail()
___
Traverses the list from tail to head.
##### Parameters
* **callback** - _TraverseCallback_
    * The callback to which the current node and its index is passed.
    * Arguments - 
        * curr - _[DoublyLinkedListNode](doublyLinkedListNode.js)_ --- the current node
        * index - _number_ --- index of current node (0-indexing)
        * size - _number_ --- number of elements in the list
        * list - _[DoublyLinkedList](doublyLinkedList.js)_ --- the list itself
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

#### DoublyLinkedList.fromArray(array, compareFunc)
___
***@static***  
Creates the list from an array
##### Parameters
* **array** - _T[]_
    * Array of objects
* **compareFunction** - _function_
    * Default value - undefined

##### Returns
Type - `DoublyLinkedList`
