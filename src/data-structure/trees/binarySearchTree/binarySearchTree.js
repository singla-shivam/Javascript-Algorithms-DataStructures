const BinaryTreeNode = require('../binaryTreeNode')

/**
 * @class BinarySearchTree
 */
class BinarySearchTree {
  constructor(value = null) {
    this.root = new BinarySearchTreeNode(value)
  }

  get height() {
    return this.root.height
  }

  /**
   * Inserts [value] to the tree
   * @param value {number}
   * @return {BinarySearchTreeNode}
   */
  insert(value,) {
    return this.root.insert(value)
  }

  /**
   * Checks if [value] is in the tree or not
   * @param value {number}
   * @return {boolean}
   */
  contains(value) {
    return this.root.contains(value);
  }

  /**
   * Removes [value] from the tree if it is there
   * @param value {number}
   * @return {boolean}
   */
  remove(value) {
    return this.root.remove(value)
  }

  /**
   * In order traversal of tree
   * @param {TraversalCallback} [callback]
   * @return BinarySearchTree
   */
  traverseInOrder(callback = undefined) {
    this.root.traverseInOrder(callback)
    return this
  }

  /**
   * Pre order traversal of tree
   * @param {TraversalCallback} [callback]
   * @return BinarySearchTree
   */
  traversePreOrder(callback = undefined) {
    this.root.traversePreOrder(callback)
    return this
  }

  /**
   * Post order traversal of tree
   * @param {TraversalCallback} [callback]
   * @return BinarySearchTree
   */
  traversePostOrder(callback = undefined) {
    this.root.traversePostOrder(callback)
    return this
  }

  /**
   * Creates min-height tree from an array
   * @param arr {number[]}
   * @return {BinarySearchTree}
   */
  static fromArray(arr) {
    const tree = new this()
    arr.sort((a, b) => a - b)

    i(0, arr.length - 1)

    function i(l, r) {
      if (l > r) return
      let m = Math.floor((l + r) / 2)
      tree.insert(arr[m])
      i(l, m - 1)
      i(m + 1, r)
    }

    return tree
  }

  toString() {
    return this.root.toString()
  }

}

/**
 * @class BinarySearchTreeNode
 * @extends BinaryTreeNode
 * @property {BinarySearchTreeNode} left
 * @property {BinarySearchTreeNode} right
 * @property {BinarySearchTreeNode} parent
 */
class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value) {
    super(value)
  }

  /**
   * @return {BinarySearchTreeNode}
   */
  get min() {
    if (!this.left) return this
    else return this.left.min
  }

  /**
   * @return {BinarySearchTreeNode}
   */
  get max() {
    if (!this.right) return this
    else return this.right.max
  }

  /**
   * Inserts the value to current node
   * @param value {number}
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    if (this.value == null) {
      this.value = value
      return this
    }

    if (value < this.value) {
      if (this.left) return this.left.insert(value)

      const node = new BinarySearchTreeNode(value)
      this.left = node
      return node
    } else if (value > this.value) {
      if (this.right) return this.right.insert(value)

      const node = new BinarySearchTreeNode(value)
      this.right = node
      return node
    }

    return this
  }

  /**
   * Finds [value]
   * @param value {number}
   * @return {BinarySearchTreeNode}
   */
  find(value) {
    if (value === this.value) return this
    if (this.left && value < this.value) return this.left.find(value)
    else if (this.right && value > this.value) return this.right.find(value)
    return null
  }

  /**
   * Checks if the node or its left|right subtrees contains [value]
   * @param value {number}
   * @return {boolean}
   */
  contains(value) {
    return !!this.find(value)
  }

  /**
   * Removes node having [value] in left or subtree of the calling node
   * @param value {number}
   * @return {boolean}
   */
  remove(value) {
    const node = this.find(value)

    if (!node) return false

    let parent = node.parent

    if (!(node.left || node.right)) {
      if (parent) {
        parent.removeChild(node)
      } else node.value = undefined
    } else if (node.left && node.right) {
      const replacement = node.right.min
      if (replacement.value === node.right.value) {
        // the right of node to be replaced is node to be replaced with
        node.value = replacement.value
        node.right = replacement.right
      } else {
        // right of [node] has left subtree
        node.value = replacement.value
        node.right.remove(replacement.value)
      }
    } else {
      // [node] has one child
      const child = node.right || node.left

      if (parent) parent.replaceChild(node, child)
      else {
        node.value = child.value
        node.left = child.left
        node.right = child.right
      }
    }

    // node.parent = null

    return true

  }

}

module.exports = BinarySearchTree
