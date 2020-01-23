/**
 * @class LinkedListNode
 * @template T
 */
class LinkedListNode {
  /**
   * Constructor
   * @param value {T}
   * @param next {LinkedListNode}
   */
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString() {
    return this.value.toString()
  }
}

module.exports = LinkedListNode