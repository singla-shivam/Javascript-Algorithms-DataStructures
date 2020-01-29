# Heap
A heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the heap property
:in a max heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C.
In a min heap, the key of P is less than or equal to the key of C.
The node at the "top" of the heap (with no parents) is called the root node.

## Installation
Install with npm
```
npm i javascript-algo-ds
```

Import in your javascript file as: 
```javascript
const Heap = require('javascript-algo-ds/src/data-structure/heap/heap')
const MinHeap = require('javascript-algo-ds/src/data-structure/heap/minHeap')
const MaxHeap = require('javascript-algo-ds/src/data-structure/heap/maxHeap')
```

## API
#### Constructor
##### Syntax
```javascript
const minHeap = new MinHeap(compareFunc)
const maxHeap = new MaxHeap(compareFunc)
```
 #### Parameters
* **compareFunction** - _function_
    * Default value - undefined
    
#### Properties
 * **heap** - array of objects in ordered way
 * **size** - number of elements in the heap
 * **compare** - comparator of type [Comparator](../../utils/comparator/comparator.js) 

#### Methods
* [heap.isEmpty()](#heapisempty)
* [heap.add(item)](#heapadditem)
* [heap.peek()](#heappeek)
* [heap.poll()](#heappoll)
* [heap.remove(item)](#heapremoveitem)
* [heap.find(item)](#heapfinditem)
* [heap.toString()](#heaptostring)

##### Static methods
* [fromArray()](#heapfromarray) 

## heap.isEmpty()
Checks if the heap contains at least one element or not.
    
 #### Returns
Returns `boolean`

## heap.add(item)
Adds `item` to the heap followed by heapifying.
#### Parameters
* **item** - _T_
    * The value to be added.
#### Returns
Returns `this`

## heap.peek()
Returns the element at root of the heap.
#### Returns
Type - `T | null`

## heap.poll()
Remove and returns the element at root of the heap followed by heapifying.
#### Returns
Type - `T | null`

## heap.remove(item)
#### Parameters
* **item** - _T_
    * The item to be removed.
Remove the element matching `item` using custom compare function (if passed) at root of the heap followed by heapifying.
#### Returns
Type - `this`

## heap.find(item)
Finds the element matching `item` using custom compare function (if passed) and returns their indices in `heap.heap` array.
#### Parameters
* **item** - _T_
    * The item to be found.
#### Returns
Type - `number[]`
    
## heap.toString()
Converts the heap in array and returns it
#### Returns
Type - `T[]`

## Heap.fromArray()
***@static***  
Creates the heap from an array
 #### Parameters
* **array** - _T[]_
    * Array of objects
* **compareFunction** - _function_
    * Default value - undefined

 #### Returns
Type - `MinHeap | MaxHeap | Heap`