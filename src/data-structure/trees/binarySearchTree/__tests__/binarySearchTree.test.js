const BinarySearchTree = require('../binarySearchTree')

describe("create binary search tree", () => {
  it('should create binary search tree with null value', function () {
    const tree = new BinarySearchTree()

    expect(tree).toBeDefined()
    expect(tree.root.value).toBeNull()
    expect(tree.root.left).toBeNull()
    expect(tree.root.right).toBeNull()
  })

  it('should insert values', function () {
    const tree = new BinarySearchTree()

    expect(tree).toBeDefined()
    expect(tree.root.value).toBeNull()
    expect(tree.root.left).toBeNull()
    expect(tree.root.right).toBeNull()

    tree.insert(5)
    tree.insert(7)
    tree.insert(4)
    tree.insert(6)
    tree.insert(10)
    tree.insert(9)

    expect(tree.toString()).toBe("4,5,6,7,9,10")

    expect(tree.root.value).toBe(5)
    expect(tree.root.left.value).toBe(4)
    expect(tree.root.left.left).toBeNull()
    expect(tree.root.left.right).toBeNull()

    expect(tree.root.right.value).toBe(7)

    expect(tree.root.right.left.value).toBe(6)
    expect(tree.root.right.left.left).toBeNull()
    expect(tree.root.right.left.right).toBeNull()

    expect(tree.root.right.right.value).toBe(10)
    expect(tree.root.right.right.right).toBeNull()

    expect(tree.root.right.right.left.value).toBe(9)
    expect(tree.root.right.right.left.left).toBeNull()
    expect(tree.root.right.right.left.right).toBeNull()


  });

  it('should create min-height tree from array', function () {
    const arr = [7, 6, 5, 2, 3, 8, 4, 1, 9, 10, 11, 12, 14, 13]
    const tree = BinarySearchTree.fromArray(arr)

    expect(tree.height).toBe(3)

    let res = []
    tree.traverseInOrder((a) => {
      res.push(a.value)
    })
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])

    res = []
    tree.traversePostOrder((a) => {
      res.push(a.value)
    })
    expect(res).toEqual([2, 1, 4, 6, 5, 3, 8, 10, 9, 12, 14, 13, 11, 7])

    res = []
    tree.traversePreOrder((a) => {
      res.push(a.value)
    })
    expect(res).toEqual([7, 3, 1, 2, 5, 4, 6, 11, 9, 8, 10, 13, 12, 14])
  });

  it('should insert values correctly', function () {
    const arr = [7, 6, 5, 2, 3, 8, 4, 1, 9, 10, 11, 12, 14, 13]

    const tree = BinarySearchTree.fromArray(arr)

    tree.insert(15)
    tree.insert(14)
    tree.insert(16)
    tree.insert(17)
    tree.insert(15)
    tree.insert(19)
    tree.insert(18)
    tree.insert(22)
    tree.insert(23)
    tree.insert(19)
    tree.insert(20)
    tree.insert(30)
    tree.insert(26)
    tree.insert(28)
    tree.insert(29)
    tree.insert(27)
    tree.insert(24)
    tree.insert(25)


    let res = []
    tree.traverseInOrder((a) => {
      res.push(a.value)
    })
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30])

    res = []
    tree.traversePostOrder((a) => {
      res.push(a.value)
    })
    expect(res).toEqual([2, 1, 4, 6, 5, 3, 8, 10, 9, 12, 18, 20, 25, 24, 27, 29, 28, 26, 30, 23, 22, 19, 17, 16, 15, 14, 13, 11, 7])

    res = []
    tree.traversePreOrder((a) => {
      res.push(a.value)
    })
    expect(res).toEqual([7, 3, 1, 2, 5, 4, 6, 11, 9, 8, 10, 13, 12, 14, 15, 16, 17, 19, 18, 22, 20, 23, 30, 26, 24, 25, 28, 27, 29])
  });

  it('should find values in the tree', function () {
    const arr = [7, 6, 5, 2, 3, 8, 4, 1, 9, 10, 11, 12, 14, 13, 26, 17, 18, 29, 19, 20, 13, 21, 22, 23, 24, 2, 5, 26, 27, 28]

    const tree = BinarySearchTree.fromArray(arr)

    expect(tree.contains(3)).toBe(true)
    expect(tree.contains(0)).toBe(false)
    expect(tree.contains(15)).toBe(false)
    expect(tree.contains(1)).toBe(true)
    expect(tree.contains(23)).toBe(true)
    expect(tree.contains(29)).toBe(true)
    expect(tree.contains(30)).toBe(false)
    expect(tree.contains(100)).toBe(false)

  });

})

describe("remove nodes", () => {
  it('should remove nodes', function () {
    const arr = [7, 6, 5, 2, 3, 8, 4, 1, 9, 10, 11, 12, 14, 13, 26, 17, 18, 29, 19, 20, 13, 21, 22, 23, 24, 2, 5, 26, 27, 28]

    const tree = BinarySearchTree.fromArray(arr)

    let s = ""
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("13,5,2,1,4,3,9,7,6,8,11,10,12,22,18,14,17,20,19,21,26,24,23,28,27,29,")
    checkParents(tree.root)

    tree.remove(3)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("13,5,2,1,4,9,7,6,8,11,10,12,22,18,14,17,20,19,21,26,24,23,28,27,29,")
    checkParents(tree.root)

    tree.remove(1)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("2,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("13,5,2,4,9,7,6,8,11,10,12,22,18,14,17,20,19,21,26,24,23,28,27,29,")
    checkParents(tree.root)

    tree.remove(4)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("2,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("13,5,2,9,7,6,8,11,10,12,22,18,14,17,20,19,21,26,24,23,28,27,29,")
    checkParents(tree.root)

    tree.remove(7)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("2,5,6,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("13,5,2,9,8,6,11,10,12,22,18,14,17,20,19,21,26,24,23,28,27,29,")
    checkParents(tree.root)

    tree.remove(8)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("2,5,6,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("13,5,2,9,6,11,10,12,22,18,14,17,20,19,21,26,24,23,28,27,29,")
    checkParents(tree.root)

    tree.remove(9)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("2,5,6,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("13,5,2,10,6,11,12,22,18,14,17,20,19,21,26,24,23,28,27,29,")
    checkParents(tree.root)

    tree.remove(10)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("2,5,6,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("13,5,2,11,6,12,22,18,14,17,20,19,21,26,24,23,28,27,29,")
    checkParents(tree.root)

    tree.remove(22)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("2,5,6,11,12,13,14,17,18,19,20,21,23,24,26,27,28,29")
    expect(s).toBe("13,5,2,11,6,12,23,18,14,17,20,19,21,26,24,28,27,29,")
    checkParents(tree.root)

    tree.remove(13)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("2,5,6,11,12,14,17,18,19,20,21,23,24,26,27,28,29")
    expect(s).toBe("14,5,2,11,6,12,23,18,17,20,19,21,26,24,28,27,29,")
    checkParents(tree.root)

    tree.remove(12)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("2,5,6,11,14,17,18,19,20,21,23,24,26,27,28,29")
    expect(s).toBe("14,5,2,11,6,23,18,17,20,19,21,26,24,28,27,29,")
    checkParents(tree.root)

    tree.remove(6)
    s = preOrderString(tree, 1)
    expect(tree.toString()).toBe("2,5,11,14,17,18,19,20,21,23,24,26,27,28,29")
    expect(s).toBe("14,5,2,11,23,18,17,20,19,21,26,24,28,27,29,")
    checkParents(tree.root)

    tree.remove(14)
    s = preOrderString(tree, 1)
    expect(tree.toString()).toBe("2,5,11,17,18,19,20,21,23,24,26,27,28,29")
    expect(s).toBe("17,5,2,11,23,18,20,19,21,26,24,28,27,29,")
    checkParents(tree.root)
  });

  it('should set value undefined when only one node', function () {
    const tree = new BinarySearchTree()
    tree.insert(5)

    expect(tree.root.value).toBe(5)
    expect(tree.root.find(5)).toBe(tree.root)

    expect(tree.remove(6)).toBeFalsy()

    tree.remove(5)
    expect(tree.root.value).toBe(undefined)
    expect(tree.root.find(5)).toBeNull()
    checkParents(tree.root)
  });

  it('should remove root when it has only one child', function () {
    const tree = new BinarySearchTree()
    tree.insert(5)
    tree.insert(10)
    tree.insert(12)
    tree.insert(7)
    tree.insert(6)

    let s = ""
    s = preOrderString(tree)
    expect(s).toBe("5,10,7,6,12,")
    checkParents(tree.root)

    tree.remove(5)
    s = preOrderString(tree)
    expect(s).toBe("10,7,6,12,")
    checkParents(tree.root)


  });

  it('should replace right of some node', function () {
    const tree = new BinarySearchTree()
    tree.insert(5).insert(10).insert(8)

    let s = ""
    s = preOrderString(tree)
    expect(s).toBe("5,10,8,")
    checkParents(tree.root)

    tree.remove(10)
    s = preOrderString(tree)
    expect(s).toBe("5,8,")
    checkParents(tree.root)

  });

})

describe("min-max", () => {
  it('should find min of some node', function () {
    const arr = [7, 6, 5, 2, 3, 8, 4, 1, 9, 10, 11, 12, 14, 13, 26, 17, 18, 29, 19, 20, 13, 21, 22, 23, 24, 2, 5, 26, 27, 28]

    const tree = BinarySearchTree.fromArray(arr)

    expect(tree.root.min.value).toBe(1)
    expect(tree.root.find(5).min.value).toBe(1)
    expect(tree.root.right.min.value).toBe(14)
    expect(tree.root.right.find(20).min.value).toBe(19)
  });

  it('should find max of some node', function () {
    const arr = [7, 6, 5, 2, 3, 8, 4, 1, 9, 10, 11, 12, 14, 13, 26, 17, 18, 29, 19, 20, 13, 21, 22, 23, 24, 2, 5, 26, 27, 28]

    const tree = BinarySearchTree.fromArray(arr)

    expect(tree.root.max.value).toBe(29)
    expect(tree.root.find(5).max.value).toBe(12)
    expect(tree.root.right.max.value).toBe(29)
    expect(tree.root.right.find(20).max.value).toBe(21)
    expect(tree.root.right.find(24).max.value).toBe(24)
  });
})

function preOrderString(tree, t) {
  let s = ""
  tree.traversePreOrder((a) => {
    s += a.value + ","
  })
  return s
}

function checkParents(node, v = 0) {
  if(v) expect(node.parent).not.toBeNull()
  if(node.left) checkParents(node.left, 1)
  if(node.right) checkParents(node.right, 1)
}
