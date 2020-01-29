const MinHeap = require('../heap/minHeap')
const Comparator = require('../../utils/comparator/comparator')

/**
 * Class that implements Priority Queue using [MinHeap].
 * The element with priority 0 have highest priority among all the elements.
 * The priorities decreases from 0 to n.
 * @class PriorityQueue
 * @property {Map<number, number>} priorities
 */
class PriorityQueue extends MinHeap {
  constructor() {
    super()
    this.priorities = new Map()
    this.comparator = new Comparator(this.comparePriority.bind(this))
  }

  /**
   * Enqueues the item
   * @param item
   * @param priority
   * @return {PriorityQueue}
   */
  enqueue(item, priority = 0) {
    this.priorities.set(item, priority)
    super.add(item)
    return this
  }

  /**
   * Removes the element with highest priority
   * @return {number}
   */
  dequeue() {
    return this.poll()
  }

  /**
   * Returns the first element in the queue with highest priority without deleting it
   * @return {number}
   */
  peek() {
    return super.peek();
  }

  /**
   * Adds item with default priority 0
   * @param item {number}
   * @return {PriorityQueue}
   */
  add(item) {
    return this.enqueue(item, 0);
  }

  /**
   * Checks if the [item] is in queue
   * @param item {number}
   */
  has(item) {
    return this.find(item).length > 0
  }

  comparePriority(a, b) {
    if (this.priorities.get(a) === this.priorities.get(b)) return 0
    else return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1
  }

  /**
   * Creates priority queue from a 2-D array
   * @param arr {Array<number, number>[]}
   */
  static fromArray(arr) {
    const p = new PriorityQueue()
    arr.forEach(a => p.priorities.set(a[0], a[1]))
    super.fromArray(arr.map(a => a[0]), undefined, p)
    arr.forEach(a => p.priorities.set(a[0], a[1]))
    return p
  }

}

module.exports = PriorityQueue
