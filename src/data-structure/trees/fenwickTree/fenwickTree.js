/**
 * @class FenwickTree (1-indexing)
 * @property {number[]} treeArray
 * @property {number} size
 */
class FenwickTree {
  constructor(size) {
    this.treeArray = new Array(size + 1).fill(0)
  }

  get size() {
    return this.treeArray.length
  }

  /**
   * Increase value at index [position] (1-indexing) by index
   * @param position {number}
   * @param value {number}
   * @return {FenwickTree}
   */
  increase(position, value) {
    if (position < 1 || position >= this.size) throw  new Error("position out of range")
    for (let i = position; i < this.size; i += (i & -i)) {
      this.treeArray[i] += value
    }
    return this
  }

  /**
   * Queries between range 1 to [position]
   * @param position {number}
   * @return {number}
   */
  query(position) {
    if (position < 1 || position >= this.size) throw new Error("position out of range")
    let sum = 0
    for (let i = position; i > 0; i -= (i & -i)) {
      sum += this.treeArray[i]
    }
    return sum
  }

  /**
   * Query range between [left] and [right] (both inclusive)
   * @param left {number}
   * @param right {number}
   * @return {number}
   */
  queryRange(left, right) {
    if (left > right) throw new Error(`left: ${left} greater than right: ${right}`)
    if (left === 1) return this.query(right)
    return this.query(right) - this.query(left - 1)
  }

  toString() {
    return this.treeArray.toString()
  }

  /**
   * Creates tree from [arr]
   * @param arr {number[]}
   * @return {FenwickTree}
   */
  static fromArray(arr) {
    const f = new FenwickTree(arr.length)
    arr.forEach((a, i) => f.increase(i + 1, a))
    return f
  }

}

module.exports = FenwickTree
