const BinarySearchTree = require('../binarySearchTree/binarySearchTree')

class AvlTree extends BinarySearchTree {
  constructor(value) {
    super(value)
  }

  insert(value) {
    super.insert(value)

    let node = this.root.find(value)
    while (node) {
      this.balance(node)
      node = node.parent
    }
    return node
  }

  remove(value) {
    let removed = super.remove(value)
    if (removed) {
      let curr = this.root
      while(curr) {
        this.balance(curr)
        if(value < curr.value) curr = curr.left
        else curr = curr.right
      }
    }
    return removed
  }

  balance(node) {
    if (node.balanceFactor > 1) {
      if (node.left.balanceFactor > 0) {
        // LL case
        this.rotateLL(node)
      } else {
        // LR case
        this.rotateLR(node)
      }
    } else if (node.balanceFactor < -1) {
      if (node.right.balanceFactor > 0) {
        // RL case
        this.rotateRL(node)
      } else {
        // RR case
        this.rotateRR(node)
      }
    }
  }

  /**
   * @param node {BinarySearchTreeNode}
   */
  rotateLL(node) {
    let parent = node.parent
    let leftOfNode = node.left
    let rightOfLeftOfNode = leftOfNode.right
    leftOfNode.right = null
    node.left = rightOfLeftOfNode

    if (parent) {
      if (parent.value > node.value) parent.left = leftOfNode
      else parent.right = leftOfNode
    } else {
      this.root = leftOfNode
      leftOfNode.parent = null
    }
    leftOfNode.right = node
  }

  /**
   * @param node {BinarySearchTreeNode}
   */
  rotateLR(node) {
    let left = node.left
    let rightOfLeft = left.right
    let leftOfRightOfLeft = rightOfLeft.left
    rightOfLeft.left = null
    left.right = leftOfRightOfLeft
    node.left = rightOfLeft
    rightOfLeft.left = left
    this.rotateLL(node)
  }

  /**
   * @param node {BinarySearchTreeNode}
   */
  rotateRR(node) {
    let parent = node.parent
    let rightNode = node.right
    let leftOfRightNode = rightNode.left
    rightNode.left = null
    node.right = leftOfRightNode

    if (parent) {
      if (node.value < parent.value) parent.left = rightNode
      else parent.right = rightNode
    } else {
      this.root = rightNode
      rightNode.parent = null
    }

    rightNode.left = null
    rightNode.left = node
  }

  /**
   * @param node {BinarySearchTreeNode}
   */
  rotateRL(node) {
    let right = node.right
    let leftOfRight = right.left
    let rightOfLeftOfRight = leftOfRight.right
    leftOfRight.right = null
    right.left = rightOfLeftOfRight
    node.right = leftOfRight
    leftOfRight.right = right

    this.rotateRR(node)
  }

  static fromArray(array) {
    return super.fromArray(array)
  }

}

module.exports = AvlTree
