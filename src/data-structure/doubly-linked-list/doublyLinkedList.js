const DoublyLinkedListNode = require('./doublyLinkedListNode')
const Comparator = require('./../../utils/comparator/comparator')

/**
 * @callback TraverseCallback
 * @param {LinkedListNode} curr - current node
 * @param {number} [index] - index of current node
 * @param {number} [size] - size of the list
 * @param {LinkedList} [list] - the list itself
 * @return {[any, boolean]} returns an array whose first element is object that you want [traverse] to return
 * and second is boolean - false if you want to stop the traversal or true otherwise
 */

/**
 * @class DoublyLinkedList
 * @property {DoublyLinkedListNode} head
 * @property {DoublyLinkedListNode} tail
 * @property {number} size
 * @template T
 */
class DoublyLinkedList {
  constructor(comparatorFunc = undefined) {
    this.head = null
    this.tail = null
    this.size = 0
    this.compare = new Comparator(comparatorFunc)
  }

  /**
   * Add a value at the start of the list
   * @param value {T}
   * @return {DoublyLinkedList}
   */
  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head)

    if (this.head) {
      this.head.previous = newNode
    }
    this.head = newNode

    if (!this.tail) this.tail = newNode
    this.size++

    return this
  }

  /**
   * Add a value at the end of the list
   * @param value {T}
   * @return {DoublyLinkedList}
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return this
    }

    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode
    this.size++

    return this
  }

  /**
   * Deletes first value equal to [value] from the list
   * @param value {T}
   * @return {null|DoublyLinkedListNode}
   */
  delete(value) {
    if (!this.head) return null

    /** @type DoublyLinkedListNode*/
    let deleteNode = null
    let currentNode = this.head

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deleteNode = currentNode
        if (deleteNode === this.head) {
          this.head = deleteNode.next
          if (this.head) this.head.previous = null
          if (deleteNode === this.tail) this.tail = null
        } else if (deleteNode === this.tail) {
          this.tail = this.tail.previous
          this.tail.next = null
        } else {
          const pr = deleteNode.previous
          const next = deleteNode.next
          pr.next = next
          next.previous = pr
        }

        break
      }

      currentNode = currentNode.next
    }

    if (deleteNode) this.size--

    return deleteNode
  }

  /**
   * Return node with first matching value [value] and returns its index if [index] is true, the node otherwise
   * @param value {T} - value to find
   * @param index {boolean} - [true] if you want index or [false] if you want the matching node
   * @returns {LinkedListNode|null|number}
   */
  find(value, index = true) {
    if (value === undefined || value === null) throw "[value] can not be null or undefined"

    if (!this.head) {
      if (index) return -1
      else return null
    }
    let i = 0

    let currentNode = this.head

    while (currentNode != null) {
      if (this.compare.equal(currentNode.value, value)) {
        if (index) return i
        else return currentNode
      }
      i++
      currentNode = currentNode.next
    }

    if (index) return -1
    else return null
  }


  /**
   * Deletes head of the list
   * @returns {DoublyLinkedListNode|null}
   */
  deleteHead() {
    if (!this.head) return null
    let c = this.head
    if (c.next) {
      this.head = c.next
      this.head.previous = null
    } else {
      this.head = null
      this.tail = null
    }
    this.size--
    return c
  }

  /**
   * Deletes tail of the linked list
   * @returns {DoublyLinkedListNode|null}
   */
  deleteTail() {
    if (!this.head) return null
    const deleteNode = this.tail
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.size--
      return deleteNode
    }
    this.tail = deleteNode.previous
    this.tail.next = null
    this.size--

    return deleteNode
  }

  /**
   * Get an element at [index] (0-indexing)
   * @param index {number} - the index of the element that you want to retrieve
   * @return {symbol | boolean}
   */
  get(index) {
    return this.traverseFromHead((curr, i) => {
      if (i === index) return [curr, false]
      else return [null, true]
    })
  }

  /**
   * Reverses the linked list
   * @return {DoublyLinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      prevNode = currNode.previous;

      currNode.next = prevNode;
      currNode.previous = nextNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

  /**
   * Traverses the list with given callback function
   * @param callback {TraverseCallback}
   * @param start {number} - 0 if you want to start from head to tail; 1 if you want to start from tail to head
   */
  traverse(callback, start = 0) {
    if (!callback) throw new Error("{callback} is not defined")
    if (start === 0) return this.traverseFromHead(callback)
    else this.traverseFromTail(callback)
  }

  /**
   * Traverses the list from head to tail with given callback function
   * @param callback {TraverseCallback}
   * @return {null|symbol}
   */
  traverseFromHead(callback) {
    if (!this.head) return DoublyLinkedList.UNDEFINED_HEAD
    let curr = this.head
    let index = 0
    let object = [null, true]
    while (curr !== null && object[1]) {
      object = callback(curr, index, this.size, this) || [null, true]
      curr = curr.next
      index++
    }

    return object[0]
  }

  traverseFromTail(callback) {
    if (!this.tail) return DoublyLinkedList.UNDEFINED_TAIL
    let curr = this.tail
    let index = this.size - 1
    let object = [null, true]
    while (curr !== null && object[1]) {
      object = callback(curr, index, this.size, this) || [null, true]
      curr = curr.previous
      index--
    }

    return object[0]
  }

  /**
   * Converts linked list to array
   * @return {T[]}
   */
  toArray() {
    const s = new Array(this.size)
    let currentNode = this.head
    let i = 0
    while (currentNode) {
      s[i] = currentNode.value
      i++
      currentNode = currentNode.next
    }
    return s
  }

  toString() {
    return this.toArray().map(a => a.toString()).join(" -> ")
  }

  /**
   * Creates a linked list from an array
   * @param arr {Array<T>}
   * @param compareFunc {Function}
   * @returns {DoublyLinkedList}
   */
  static fromArray(arr, compareFunc = undefined) {
    const list = new DoublyLinkedList(compareFunc)
    arr.forEach(a => list.append(a))
    return list
  }
}

DoublyLinkedList.UNDEFINED_HEAD = Symbol("head is not defined")
DoublyLinkedList.UNDEFINED_TAIL = Symbol("tail is not defined")

module.exports = DoublyLinkedList
