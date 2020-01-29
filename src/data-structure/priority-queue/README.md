# Priority Queue
A priority queue is an abstract data type which is like a regular queue or stack data structure,
but where additionally each element has a "priority" associated with it.
In a priority queue, an element with high priority is served before an element with low priority.

While priority queues are often implemented with heaps, they are conceptually distinct from heaps.
A priority queue is a concept like "a list" or "a map"; just as a list can be implemented with a linked list or an array,
a priority queue can be implemented with a heap or a variety of other methods such as an unordered array.

## Installation
Install with npm
```
npm i javascript-algo-ds
```

Import in your javascript file as: 
```javascript
const PriorityQueue = require('javascript-algo-ds/src/data-structure/priority-queue/priorityQueue')
```

## API
#### Constructor
##### Syntax
```javascript
const queue = new PriorityQueue()
```

#### Properties
 * **heap** - array of numbers in ordered way
 * **size** - number of elements in the heap
 * **priorities** - a map which contains priority of each item

#### Methods
* [queue.enqueue(value, [priority])](#queueenqueuevalue-priority)
* [queue.dequeue()](#queuedequeue)
* [queue.peek()](#queuepeek)
* [queue.add(value)](#queueaddvalue)
* [queue.has(value)](#queuehasvalue)
* [queue.toString()](#queuetostring)

##### Static methods
* [fromArray()](#priorityqueuefromarray) 

## queue.enqueue(value, [priority])
#### Parameters
* **value** - _number_
    * value to be added
* **priority** - _number_
    * Default value - 0
    * Priority of `value`
    * Optional
    
 #### Returns
Returns `this`

## queue.dequeue()    
 #### Returns
Returns `number`

## queue.peek()
Returns the element at front of the queue.
#### Returns
Type - `number | null`

## queue.add(value)
Adds `value` to the queue with priority 0.
#### Parameters
* **value** - _number_
    * The value to be added.
#### Returns
Returns `this`

## queue.has(value)
Checks if `value` is contained in the queue or not.
#### Parameters
* **value** - _number_
    * The number to be checked.
#### Returns
Type - `boolean`
    
## queue.toString()
Converts the heap in array and returns it
#### Returns
Type - `String`

## PriorityQueue.fromArray()
***@static***  
Creates the queue from an array
 #### Parameters
* **array** - _number[][]_
    * 2-D array containing elements to be added in first column and their priorities in second column

 #### Returns
Type - `PriorityQueue`