const BinarySearchTree = require('../binarySearchTree/binarySearchTree')

/**
 * @class RedBlackTree
 */
class RedBlackTree extends BinarySearchTree{
  /**
   * Inserts [value]
   * @param value {number}
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    let inserted = super.insert(value)

    if(inserted.value === this.root.value) this.makeNodeBlack(this.root)
    else this.makeNodeRed(inserted)

    this.balance(inserted)

    return inserted
  }

  /**
   * Makes [node] black
   * @param node {BinarySearchTreeNode}
   */
  makeNodeBlack(node) {
    node.color = RedBlackTree.BLACK
  }

  /**
   * Makes [node] red
   * @param node {BinarySearchTreeNode}
   */
  makeNodeRed(node) {
    node.color = RedBlackTree.RED
  }

  /**
   * @param node {BinarySearchTreeNode}
   * @return {boolean}
   */
  isBlack(node) {
    return node.color === RedBlackTree.BLACK
  }

  /**
   * @param node {BinarySearchTreeNode}
   * @return {boolean}
   */
  isRed(node) {
    return node.color === RedBlackTree.RED
  }

  balance(node) {
    if(node.value === this.root.value || this.isBlack(node.parent)) return

    const parent = node.parent
    const grandParent = parent.parent
    const uncle = grandParent && grandParent.left && grandParent.right
      ? (grandParent.left.value === parent.value
        ? grandParent.right
        : grandParent.left)
      : null

    if(uncle && this.isRed(uncle)) {
      this.makeNodeBlack(parent)
      this.makeNodeBlack(uncle)

      if(grandParent.value !== this.root.value) this.makeNodeRed(grandParent)
      else return

      this.balance(grandParent)
    }
    else if(!uncle || this.isBlack(uncle)) {
      if(grandParent) {
        let newGrandParent = null
        if(grandParent.left && parent.value === grandParent.left.value) {
          // Left
          if(parent.left && node.value === parent.left.value) newGrandParent = this.rotateLL(grandParent) // LL case
          else newGrandParent = this.rotateLR(grandParent) // LR case
        }
        else {
          // Right
          if(parent.right && node.value === parent.right.value) newGrandParent = this.rotateRR(grandParent) // RL case
          else newGrandParent = this.rotateRL(grandParent) // RR case
        }

        if(newGrandParent && newGrandParent.parent === null) {
          this.root = newGrandParent
          this.makeNodeBlack(this.root)
        }

        if(newGrandParent) this.balance(newGrandParent)
      }
    }

  }

  /**
   *
   * @param grandParent {BinarySearchTreeNode}
   * @return {BinarySearchTreeNode}
   */
  rotateLL(grandParent) {
    let parentOfGrandParent = grandParent.parent
    let isLeft = false
    if(parentOfGrandParent) {
      isLeft = (parentOfGrandParent.left && parentOfGrandParent.left.value === grandParent.value)
    }

    let parent = grandParent.left
    let rightOfParent = parent.right
    grandParent.left = null

    if(parentOfGrandParent) {
      if(isLeft) parentOfGrandParent.left = parent
      else parentOfGrandParent.right = parent
    }
    else {
      parent.parent = null
      this.root = parent
    }

    parent.right = grandParent
    grandParent.left = rightOfParent

    parent.color = RedBlackTree.BLACK
    grandParent.color = RedBlackTree.RED
  }

  /**
   *
   * @param grandParent {BinarySearchTreeNode}
   * @return {BinarySearchTreeNode}
   */
  rotateLR(grandParent) {
    const parent = grandParent.left
    const node = parent.right
    const leftOfNode = node.left

    node.left = null
    parent.right = leftOfNode
    grandParent.left = node
    node.left = parent

    return this.rotateLL(grandParent)
  }

  /**
   *
   * @param grandParent {BinarySearchTreeNode}
   * @return {BinarySearchTreeNode}
   */
  rotateRL(grandParent) {
    const parent = grandParent.right
    const node = parent.left
    const rightOfNode = node.right

    node.right = null
    parent.left = rightOfNode
    grandParent.right = node
    node.right = parent

    return this.rotateRR(grandParent)
  }

  /**
   *
   * @param grandParent {BinarySearchTreeNode}
   * @return {BinarySearchTreeNode}
   */
  rotateRR(grandParent) {
    let parentOfGrandParent = grandParent.parent
    let isLeft = false
    if(parentOfGrandParent) {
      isLeft = (parentOfGrandParent.left.value === grandParent.value)
    }

    let parent = grandParent.right
    let leftOfParent = parent.left
    grandParent.right = null

    if(parentOfGrandParent) {
      if(isLeft) parentOfGrandParent.left = parent
      else parentOfGrandParent.right = parent
    }
    else {
      parent.parent = null
      this.root = parent
    }

    parent.left = grandParent
    grandParent.right = leftOfParent

    parent.color = RedBlackTree.BLACK
    grandParent.color = RedBlackTree.RED

  }

  static fromArray(array) {
    return super.fromArray(array)
  }
}

RedBlackTree.RED = Symbol("red")
RedBlackTree.BLACK = Symbol("black")

module.exports = RedBlackTree
