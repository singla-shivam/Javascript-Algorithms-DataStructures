const Heap = require('./heap')

class MaxHeap extends Heap {
  isPairInCorrectOrder(a, b) {
    return this.comparator.moreThanOrEqual(a, b)
  }

  static fromArray(arr, compareFunc = undefined) {
    const heap = new MaxHeap(compareFunc)
    return super.fromArray(arr, heap)
  }
}

module.exports = MaxHeap
