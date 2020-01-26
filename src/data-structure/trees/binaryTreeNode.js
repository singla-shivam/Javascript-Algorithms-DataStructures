/**
 * @callback TraversalCallback
 * @param {BinaryTreeNode|BinarySearchTreeNode} node
 */
/**
 * @class BinaryTreeNode
 * @property {number} value
 * @property {BinaryTreeNode} left
 * @property {BinaryTreeNode} right
 * @property {BinaryTreeNode} parent
 */
class BinaryTreeNode {
  constructor(value = null) {
    this.value = value
    this._left = null
    this._right = null
    this.parent = null
  }

  /**
   * Height of the tree from the node
   * @return {number}
   */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  /**
   * Height of left subtree of the node
   * @return {number}
   */
  get leftHeight() {
    if (!this._left) return 0
    else return this._left.height + 1
  }

  /**
   * Height of right subtree of the node
   * @return {number}
   */
  get rightHeight() {
    if (!this._right) return 0
    else return this._right.height + 1
  }

  /**
   * Balance factor of the node
   * @return {number}
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight
  }

  /**
   * @param node {BinaryTreeNode}
   */
  set left(node) {
    if (this._left) this._left.parent = null
    this._left = node

    if (this._left) this._left.parent = this
  }

  /**
   * @param node {BinaryTreeNode}
   */
  set right(node) {
    if (this._right) this._right.parent = null
    this._right = node

    if (this._right) this._right.parent = this
  }

  /**
   * @return {BinaryTreeNode}
   */
  get left() {
    return this._left
  }

  /**
   * @return {BinaryTreeNode}
   */
  get right() {
    return this._right
  }

  /**
   * Removes one child matching with [node].
   * Returns true if [node] is found and removed or false otherwise.
   * @param node {BinaryTreeNode}
   * @return {boolean}
   */
  removeChild(node) {
    if (!node) return false
    if (this.left && this.left.value === node.value) {
      this.left = null
      return true
    }
    if (this.right && this.right.value === node.value) {
      this.right = null
      return true
    }
    return false
  }

  /**
   *
   * @param nodeToReplace {BinaryTreeNode}
   * @param node {BinaryTreeNode} - The replacement node
   * @return {boolean}
   */
  replaceChild(nodeToReplace, node) {
    if (!(node && nodeToReplace)) return false
    if (this.left && this.left.value === nodeToReplace.value) {
      this.left = node
      return true
    }

    if (this.right && this.right.value === nodeToReplace.value) {
      this.right = node
      return true
    }

    return false
  }

  /**
   * In order traversal of tree root as [this]
   * @param {TraversalCallback} [callback]
   * @return {number[]}
   */
  traverseInOrder(callback = undefined) {
    let traverse = []
    if (this.left) traverse = traverse.concat(this.left.traverseInOrder(callback))
    traverse.push(this.value)
    if (callback) callback(this)
    if (this.right) traverse = traverse.concat(this.right.traverseInOrder(callback))

    return traverse
  }

  /**
   * Post order traversal of tree root as [this]
   * @param {TraversalCallback} [callback]
   * @return {number[]}
   */
  traversePostOrder(callback = undefined) {
    let traverse = []
    if (this.left) traverse = traverse.concat(this.left.traversePostOrder(callback))
    if (this.right) traverse = traverse.concat(this.right.traversePostOrder(callback))
    traverse.push(this.value)
    if (callback) callback(this)

    return traverse
  }

  /**
   * Pre order traversal of tree root as [this]
   * @param {TraversalCallback} [callback]
   * @return {number[]}
   */
  traversePreOrder(callback = undefined) {
    let traverse = []
    traverse.push(this.value)
    if (callback) callback(this)
    if (this.left) traverse = traverse.concat(this.left.traversePreOrder(callback))
    if (this.right) traverse = traverse.concat(this.right.traversePreOrder(callback))

    return traverse
  }

  toString() {
    return this.traverseInOrder().toString()
  }

}

module.exports = BinaryTreeNode