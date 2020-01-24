const Comparator = require('./../../utils/comparator/comparator')

/**
 * @class Heap
 * @template T
 * @property {T[]} heap
 */
class Heap {
  constructor(compareFunc = undefined) {
    this.comparator = new Comparator(compareFunc)
    this.heap = []
  }

  get size() {
    return this.heap.length
  }

  /**
   * @param parentIndex {number}
   * @return {number}
   */
  getLeftChildIndex(parentIndex) {
    return (parentIndex << 1) | 1
  }

  /**
   * @param parentIndex {number}
   * @return {number}
   */
  getRightChildIndex(parentIndex) {
    return (parentIndex + 1) << 1
  }

  /**
   * @param childIndex {number}
   * @return {number}
   */
  getParentIndex(childIndex) {
    return (childIndex - 1) >> 1
  }

  /**
   * @param parentIndex {number}
   * @return {boolean}
   */
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.size
  }

  /**
   * @param parentIndex {number}
   * @return {boolean}
   */
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.size
  }

  /**
   * @param childIndex {number}
   * @return {boolean}
   */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0
  }

  /**
   * Returns the left child of given parent index in the heap array(container)
   * @param parentIndex {number}
   * @return {T}
   */
  leftChild(parentIndex) {
    return this.heap[this.getLeftChildIndex(parentIndex)]
  }

  /**
   * Returns the right child of given parent index in the heap array(container)
   * @param parentIndex {number}
   * @return {T}
   */
  rightChild(parentIndex) {
    return this.heap[this.getRightChildIndex(parentIndex)]
  }

  /**
   * Returns the parent of given child index in the heap array(container)
   * @param childIndex {number}
   * @return {T}
   */
  parent(childIndex) {
    return this.heap[this.getParentIndex(childIndex)]
  }

  /**
   * Checks if the heap container is empty or not
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0
  }

  swap(ind1, ind2) {
    const tmp = this.heap[ind1]
    this.heap[ind1] = this.heap[ind2]
    this.heap[ind2] = tmp
  }

  /**
   * Heapify the heap from top to bottom.
   * Starts from 0 (root) if [customIndex] is not defined.
   * The function assumes that the left and right sub trees are OK if their parent is OK with them.
   * @param customIndex {number}
   * @return {Heap}
   */
  heapifyDown(customIndex = 0) {
    let currentIndex = customIndex
    let nextIndex = null

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex)
        && this.isPairInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex)
      } else nextIndex = this.getLeftChildIndex(currentIndex)

      if (this.isPairInCorrectOrder(this.heap[currentIndex], this.heap[nextIndex])) break

      this.swap(currentIndex, nextIndex)
      currentIndex = nextIndex
    }

    return this

  }

  /**
   * Heapify the heap from bottom to up.
   * Starts from n - 1 (last element) if [customIndex] is not defined
   * The function assumes that the tree above the current node is OK if it is OK with its parent.
   * @param [customIndex] {number}
   * @return {Heap}
   */
  heapifyUp(customIndex) {
    let currentIndex = customIndex || this.heap.length - 1

    while (
      this.hasParent(currentIndex)
      && !this.isPairInCorrectOrder(this.parent(currentIndex), this.heap[currentIndex])
      ) {
      let parentIndex = this.getParentIndex(currentIndex)
      this.swap(parentIndex, currentIndex)
      currentIndex = parentIndex
    }

    return this
  }

  /**
   * Adds item at the last of the heap and then heapifies it upward
   * @param item {T}
   * @return {Heap}
   */
  add(item) {
    this.heap.push(item)
    this.heapifyUp()
    return this
  }

  /**
   * Returns the root element of the heap
   * @return {null|T}
   */
  peek() {
    if (this.size === 0) return null
    return this.heap[0]
  }

  /**
   * Removes the root element and returns it
   * @return {null|T}
   */
  poll() {
    if (this.size === 0) return null
    if (this.size === 1) return this.heap.pop()

    const item = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown()

    return item

  }

  remove(item) {
    let itemsToRemove = this.find(item)

    for (let i = 0, len = itemsToRemove.length; i < len; i++) {
      let indexToRemove = itemsToRemove.pop()
      if (indexToRemove === this.size - 1) this.heap.pop()
      else {
        this.heap[indexToRemove] = this.heap.pop()
        let parent = this.parent(indexToRemove)

        if (this.hasLeftChild(indexToRemove) && (!this.hasParent(indexToRemove) || this.isPairInCorrectOrder(parent, this.heap[indexToRemove]))) {
          this.heapifyDown(indexToRemove)
        } else this.heapifyUp(indexToRemove)
        itemsToRemove = this.find(item)
      }
    }

    return this
  }

  /**
   * Finds all the indices matching [item]
   * @param item {T}
   * @return {number[]}
   */
  find(item) {
    const found = []

    for (let i = 0; i < this.size; i++) {
      if (this.comparator.equal(item, this.heap[i])) found.push(i)
    }

    return found
  }

  /**
   * Checks if the [a] is in correct order with [b]
   * @param a {T}
   * @param b {T}
   * @return boolean
   */
  isPairInCorrectOrder(a, b) {
    throw new Error("Comparison method not implemented")
  }

  toString() {
    return this.heap.toString()
  }

  /**
   * Creates a heap from the given array.
   * It first sorts the array and then adds all elements one by one to the heap
   * @param arr {T[]}
   * @param heap {Heap}
   * @param compareFunc {Function}
   * @return {Heap}
   */
  static fromArray(arr, heap = undefined, compareFunc = undefined) {
    let ar = new Array(arr.length)
    arr.forEach((a, i) => ar[i] = a)
    ar.sort((a, b) => {
      return heap.isPairInCorrectOrder(a, b) === true ? -1 : 1
    })

    ar.forEach(a => heap.add(a))
    return heap
  }
}

module.exports = Heap
