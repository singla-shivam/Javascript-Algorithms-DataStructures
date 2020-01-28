const RedBlackTree = require('../redBlackTree')
const fs = require('fs')

describe("create and insert", () => {
  it('should create empty tree', function () {
    const tree = new RedBlackTree()

    expect(tree).toBeDefined()
    expect(tree.root.value).toBeNull()
  });

  it('should do insert correctly and do LL rotation', function () {
    const tree = new RedBlackTree()

    tree.insert(20)
    expect(tree.root.value).toBe(20)
    expect(tree.root.color).toBe(RedBlackTree.BLACK)

    tree.insert(18)
    tree.insert(22)
    expect(tree.root.value).toBe(20)
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.value).toBe(18)
    expect(tree.root.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.value).toBe(22)
    expect(tree.root.right.color).toBe(RedBlackTree.RED)

    tree.insert(16)
    expect(tree.root.value).toBe(20)
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.value).toBe(18)
    expect(tree.root.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.value).toBe(22)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.value).toBe(16)
    expect(tree.root.left.left.color).toBe(RedBlackTree.RED)

    tree.insert(14)
    expect(tree.root.value).toBe(20)
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.value).toBe(16)
    expect(tree.root.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.value).toBe(22)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.value).toBe(14)
    expect(tree.root.left.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.right.value).toBe(18)
    expect(tree.root.left.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)


    tree.insert(12)
    let s = preOrderString(tree)
    expect(s).toBe("20,16,14,12,18,22,")
    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.left.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(10)
    s = preOrderString(tree)
    expect(s).toBe("20,16,12,10,14,18,22,")
    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.left.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)
  });

  it('should do insert correctly and do RR rotation', function () {
    const tree = new RedBlackTree()

    tree.insert(-20)
    expect(tree.root.value).toBe(-20)
    expect(tree.root.color).toBe(RedBlackTree.BLACK)

    tree.insert(-18)
    tree.insert(-22)
    expect(tree.root.value).toBe(-20)
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.value).toBe(-22)
    expect(tree.root.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.value).toBe(-18)
    expect(tree.root.right.color).toBe(RedBlackTree.RED)

    tree.insert(-16)
    expect(tree.root.value).toBe(-20)
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.value).toBe(-22)
    expect(tree.root.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.value).toBe(-18)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.value).toBe(-16)
    expect(tree.root.right.right.color).toBe(RedBlackTree.RED)

    tree.insert(-14)
    expect(tree.root.value).toBe(-20)
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.value).toBe(-22)
    expect(tree.root.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.value).toBe(-16)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.value).toBe(-14)
    expect(tree.root.right.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.value).toBe(-18)
    expect(tree.root.right.left.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)


    tree.insert(-12)
    let s = preOrderString(tree)
    expect(s).toBe("-20,-22,-16,-18,-14,-12,")
    expect(tree.root.right.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(-10)
    s = preOrderString(tree)
    expect(s).toBe("-20,-22,-16,-18,-12,-14,-10,")
    expect(tree.root.right.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.right.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)
  });

  it('should do LR & RL rotations', function () {
    const tree = new RedBlackTree()

    tree.insert(1000)
    let s = preOrderString(tree)
    expect(s).toBe("1000,")
    checkParents(tree.root)

    tree.insert(500)
    tree.insert(750)
    s = preOrderString(tree)
    expect(s).toBe("750,500,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(625)
    s = preOrderString(tree)
    expect(s).toBe("750,500,625,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(575)
    s = preOrderString(tree)
    expect(s).toBe("750,575,500,625,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.left.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(550)
    s = preOrderString(tree)
    expect(s).toBe("750,575,500,550,625,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(600)
    s = preOrderString(tree)
    expect(s).toBe("750,575,500,550,625,600,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.right.left.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(610)
    s = preOrderString(tree)
    expect(s).toBe("750,575,500,550,610,600,625,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.right.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(525)
    s = preOrderString(tree)
    expect(s).toBe("750,575,525,500,550,610,600,625,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.left.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.right.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(540)
    s = preOrderString(tree)
    expect(s).toBe("575,525,500,550,540,750,610,600,625,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.right.color).toBe(RedBlackTree.BLACK)
    checkParents(tree.root)

    tree.insert(612)
    s = preOrderString(tree)
    expect(s).toBe("575,525,500,550,540,750,610,600,625,612,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.right.color).toBe(RedBlackTree.BLACK)
    checkParents(tree.root)

    tree.insert(605)
    tree.insert(620)
    tree.insert(616)
    s = preOrderString(tree)
    expect(s).toBe("575,525,500,550,540,620,610,600,605,612,616,750,625,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.left.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.right.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.right.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.right.color).toBe(RedBlackTree.BLACK)
    checkParents(tree.root)

    tree.insert(608)
    tree.insert(609)
    s = preOrderString(tree)
    expect(s).toBe("575,525,500,550,540,620,610,605,600,608,609,612,616,750,625,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.color).toBe(RedBlackTree.RED)

    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.color).toBe(RedBlackTree.BLACK)

    expect(tree.root.left.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.right.color).toBe(RedBlackTree.BLACK)

    expect(tree.root.right.left.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.right.right.color).toBe(RedBlackTree.RED)

    expect(tree.root.right.left.left.right.right.color).toBe(RedBlackTree.RED)
    checkParents(tree.root)

    tree.insert(618)
    tree.insert(619)
    tree.insert(613)
    tree.insert(614)
    tree.insert(615)
    s = preOrderString(tree)
    expect(s).toBe("610,575,525,500,550,540,605,600,608,609,620,616,613,612,614,615,618,619,750,625,1000,")
    expect(tree.root.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.color).toBe(RedBlackTree.RED)

    expect(tree.root.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.color).toBe(RedBlackTree.BLACK)

    expect(tree.root.left.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.left.right.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.right.right.color).toBe(RedBlackTree.BLACK)

    expect(tree.root.left.left.right.left.color).toBe(RedBlackTree.RED)
    expect(tree.root.left.right.right.right.color).toBe(RedBlackTree.RED)
    expect(tree.root.right.left.left.left.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.left.right.color).toBe(RedBlackTree.BLACK)
    expect(tree.root.right.left.right.right.color).toBe(RedBlackTree.RED)

  });

  it('should create redBlack tree from array', function () {
    const arr = [7, 6, 5, 2, 3, 8, 4, 1, 9, 10, 11, 12, 14, 13, 26, 17, 18, 29, 19, 20, 13, 21, 22, 23, 24, 2, 5, 26, 27, 28]

    const tree = RedBlackTree.fromArray(arr)
    let s = ""
    s = preOrderString(tree)
    expect(tree.toString()).toBe("1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29")
    expect(s).toBe("11,5,4,2,1,3,9,7,6,8,10,18,13,12,14,17,22,20,19,21,24,23,27,26,28,29,")
    checkParents(tree.root)

    let colors = [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1]

    let i = -1
    checkColors(tree.root)
    function checkColors(node) {
      if(node.left) checkColors(node.left)
      i++
      console.log(node.value, node.color.toString())
      if(colors[i]) expect(node.color).toBe(RedBlackTree.RED)
      else expect(node.color).toBe(RedBlackTree.BLACK)
      if(node.right) checkColors(node.right)

    }

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
