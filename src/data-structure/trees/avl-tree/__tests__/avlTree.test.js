const AvlTree = require('../avlTree')

describe("create AvlTree", () => {
  it('should create empty AVL tree', function () {
    const tree = new AvlTree()

    expect(tree).toBeDefined()
    expect(tree.root).toBeDefined()
    expect(tree.root.left).toBeNull()
    expect(tree.root.right).toBeNull()
  });

  it('should create tree from array', function () {
    const arr = [7, 6, 5, 2, 3, 8, 4, 1, 9, 10, 11, 12, 14, 13, 26, 17, 18, 29, 19, 20, 13, 21, 22, 23, 24, 2, 5, 26, 27, 28]

    const tree = AvlTree.fromArray(arr)
    let s = ""
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("14,7,4,2,1,3,6,5,11,9,8,10,13,12,24,20,18,17,19,22,21,23,27,26,28,29,")
    checkParents(tree.root)

  });

  it('should do left-left rotation', function () {
    const tree = new AvlTree()

    tree.insert(10)
    tree.insert(9)
    tree.insert(8)
    tree.insert(7)

    let s = ""
    s = preOrderString(tree)
    expect(tree.toString()).toBe("7,8,9,10")
    expect(s).toBe("9,8,7,10,")
    checkParents(tree.root)

    tree.insert(6)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("6,7,8,9,10")
    expect(s).toBe("9,7,6,8,10,")
    checkParents(tree.root)

    tree.insert(5)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("5,6,7,8,9,10")
    expect(s).toBe("7,6,5,9,8,10,")
    checkParents(tree.root)

    tree.insert(4)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("4,5,6,7,8,9,10")
    expect(s).toBe("7,5,4,6,9,8,10,")
    checkParents(tree.root)

  });

  it('should do right-right rotation', function () {
    const tree = new AvlTree()

    tree.insert(1)
    tree.insert(2)
    tree.insert(3)
    tree.insert(4)

    tree.insert(5)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,3,4,5")
    expect(s).toBe("2,1,4,3,5,")
    checkParents(tree.root)

    tree.insert(6)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,3,4,5,6")
    expect(s).toBe("4,2,1,3,5,6,")
    checkParents(tree.root)

    tree.insert(7)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,3,4,5,6,7")
    expect(s).toBe("4,2,1,3,6,5,7,")
    checkParents(tree.root)

  });

  it('should do left-right rotation', function () {
    const tree = new AvlTree()

    tree.insert(200)
    tree.insert(100)
    tree.insert(150)

    let s = ""
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,150,200")
    expect(s).toBe("150,100,200,")
    checkParents(tree.root)

    tree.insert(105)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,105,150,200")
    expect(s).toBe("150,100,105,200,")
    checkParents(tree.root)

    tree.insert(110)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,105,110,150,200")
    expect(s).toBe("150,105,100,110,200,")
    checkParents(tree.root)

    tree.insert(108)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,105,108,110,150,200")
    expect(s).toBe("110,105,100,108,150,200,")
    checkParents(tree.root)

    tree.insert(106)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,105,106,108,110,150,200")
    expect(s).toBe("110,105,100,108,106,150,200,")
    checkParents(tree.root)

    tree.insert(107)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,105,106,107,108,110,150,200")
    expect(s).toBe("110,105,100,107,106,108,150,200,")
    checkParents(tree.root)

    tree.insert(95)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("95,100,105,106,107,108,110,150,200")
    expect(s).toBe("110,105,100,95,107,106,108,150,200,")
    checkParents(tree.root)

    tree.insert(109)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("95,100,105,106,107,108,109,110,150,200")
    expect(s).toBe("107,105,100,95,106,110,108,109,150,200,")
    checkParents(tree.root)
  });

  it('should do right-left rotation', function () {
    const tree = new AvlTree()

    tree.insert(100)
    tree.insert(200)
    tree.insert(500)

    let s = ""
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,200,500")
    expect(s).toBe("200,100,500,")
    checkParents(tree.root)

    tree.insert(400)
    tree.insert(225)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,200,225,400,500")
    expect(s).toBe("200,100,400,225,500,")
    checkParents(tree.root)

    tree.insert(210)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,200,210,225,400,500")
    expect(s).toBe("225,200,100,210,400,500,")
    checkParents(tree.root)

    tree.insert(325)
    tree.insert(310)
    tree.insert(350)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,200,210,225,310,325,350,400,500")
    expect(s).toBe("225,200,100,210,400,325,310,350,500,")
    checkParents(tree.root)

    tree.insert(340)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,200,210,225,310,325,340,350,400,500")
    expect(s).toBe("225,200,100,210,350,325,310,340,400,500,")
    checkParents(tree.root)

    tree.insert(330)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("100,200,210,225,310,325,330,340,350,400,500")
    expect(s).toBe("325,225,200,100,210,310,350,340,330,400,500,")
    checkParents(tree.root)
  });
})

describe("remove", () => {
  it('should remove nodes from tree', function () {
    const arr = [7, 6, 5, 2, 3, 8, 4, 1, 9, 10, 11, 12, 14, 13, 26, 17, 18, 29, 19, 20, 13, 21, 22, 23, 24, 2, 5, 26, 27, 28]

    const tree = AvlTree.fromArray(arr)
    let s = ""
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("14,7,4,2,1,3,6,5,11,9,8,10,13,12,24,20,18,17,19,22,21,23,27,26,28,29,")
    checkParents(tree.root)

    tree.remove(12)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,3,4,5,6,7,8,9,10,11,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("14,7,4,2,1,3,6,5,11,9,8,10,13,24,20,18,17,19,22,21,23,27,26,28,29,")
    checkParents(tree.root)

    tree.remove(26)
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,3,4,5,6,7,8,9,10,11,13,14,17,18,19,20,21,22,23,24,27,28,29")
    expect(s).toBe("14,7,4,2,1,3,6,5,11,9,8,10,13,24,20,18,17,19,22,21,23,28,27,29,")
    checkParents(tree.root)

  });
})


function preOrderString(tree) {
  let s = ""
  tree.traversePreOrder((a) => {
    s += a.value + ","
  })
  return s
}

function checkParents(node, v = 0) {
  if (v) expect(node.parent).not.toBeNull()
  // try {
  //   if(v) expect(node.parent).not.toBeNull()
  // }
  // catch (e) {
  //   console.log(node.value)
  // }
  if (node.left) checkParents(node.left, 1)
  if (node.right) checkParents(node.right, 1)
}
