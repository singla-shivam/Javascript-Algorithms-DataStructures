/**
 * @class DoublyLinkedListNode
 * @template T
 * @property value
 * @property {DoublyLinkedListNode} next
 * @property {DoublyLinkedListNode} previous
 */
class DoublyLinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value
    this.next = next
    this.previous = prev
  }

  toString() {
    return this.value.toString()
  }
}

module.exports = DoublyLinkedListNode
