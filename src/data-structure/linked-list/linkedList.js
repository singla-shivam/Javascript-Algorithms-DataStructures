const LinkedListNode = require('./linkedListNode')
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
 * @class LinkedList
 * @template T
 * @property {LinkedListNode} head
 * @property {LinkedListNode} tail
 * @property {number} size
 */
class LinkedList {
  constructor(compareFunc = undefined) {
    this.head = null
    this.tail = null
    this.size = 0
    this.compare = new Comparator(compareFunc)
  }

  /**
   * Add new value to start of the linked list
   * @param value {T}
   * @returns {LinkedList}
   */
  prepend(value) {
    if (value === undefined || value === null) throw "[value] can not be null or undefined"

    this.head = new LinkedListNode(value, this.head)

    if (!this.tail) {
      this.tail = this.head
    }

    this.size++

    return this
  }

  /**
   * Add new value at end of the list
   * @param value {T}
   * @returns {LinkedList}
   */
  append(value) {
    if (value === undefined || value === null) throw "[value] can not be null or undefined"

    const newNode = new LinkedListNode(value)
    this.size++

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail.next = newNode
    this.tail = newNode

  }

  /**
   * Deletes first node matching [value]
   * @param value {T}
   * @returns {LinkedListNode|null}
   */
  delete(value) {
    if (value === undefined || value === null) throw "[value] can not be null or undefined"
    if (!this.head) return null

    let deleteNode = null

    if (this.head === this.tail) {
      deleteNode = this.head
      this.head = this.tail = null
      this.size--
      return deleteNode
    }

    if (this.compare.equal(this.head.value, value)) {
      deleteNode = this.head
      this.head = deleteNode.next
      this.size--
      return deleteNode
    }

    let currentNode = this.head

    while (currentNode.next != null) {
      if (this.compare.equal(currentNode.next.value, value)) {
        deleteNode = currentNode.next
        currentNode.next = deleteNode.next
        this.size--

        if (deleteNode === this.tail) this.tail = currentNode
        break
      }
      currentNode = currentNode.next
    }

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
   * @returns {LinkedListNode|null}
   */
  deleteHead() {
    if (!this.head) return null
    let c = this.head
    if (c.next) this.head = c.next
    else {
      this.head = null
      this.tail = null
    }
    this.size--
    return c
  }

  /**
   * Deletes tail of the linked list
   * @returns {LinkedListNode|null}
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
    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }
    this.tail = currentNode
    currentNode.next = null
    this.size--

    return deleteNode
  }

  /**
   * Traverses the list with given callback function
   * @param callback {TraverseCallback}
   */
  traverse(callback) {
    if (!this.head) return LinkedList.UNDEFINED_HEAD
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

  /**
   * Get an element at [index] (0-indexing)
   * @param index {number} - the index of the element that you want to retrieve
   * @return {symbol | boolean}
   */
  get(index) {
    return this.traverse((curr, i) => {
      if (i === index) return [curr, false]
      else return [null, true]
    })
  }

  /**
   * Converts linked list to array
   * @returns {T[]}
   */
  toArray() {
    let arr = new Array(this.size)
    let i = 0
    let currentNode = this.head
    while (currentNode != null) {
      arr[i] = currentNode.value
      currentNode = currentNode.next
      i++
    }

    return arr
  }

  /**
   * Returns string containing value of all nodes in form
   * 1 -> 2 -> 3 -> 4
   * @returns {String}
   */
  toString() {
    let s = new Array(2 * this.size - 1)
    s[0] = this.head.value
    let curr = this.head.next
    let i = 1
    while (curr) {
      s[i++] = "->"
      s[i++] = curr.value.toString()
      curr = curr.next
    }
    return s.join(' ')
  }

  /**
   * Creates a linked list from an array
   * @param arr {Array<T>}
   * @param compareFunc {Function}
   * @returns {LinkedList}
   */
  static fromArray(arr, compareFunc = undefined) {
    const list = new LinkedList(compareFunc)
    arr.forEach(a => list.append(a))
    return list
  }
}

LinkedList.UNDEFINED_HEAD = Symbol("head is not defined")

module.exports = LinkedList
