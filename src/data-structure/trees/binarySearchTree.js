const Comparator = require('./../../utils/comparator/comparator')

class BinarySearchTree {
  constructor(compareFunc = undefined) {
    this.comparator = new Comparator(compareFunc)
  }

}