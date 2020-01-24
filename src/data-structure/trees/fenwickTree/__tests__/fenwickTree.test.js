const FenwickTree = require('../fenwickTree')

test("should create fenwick tree of correct size", () => {
  const f = new FenwickTree(5)
  expect(f.size).toBe(5 + 1)

  for (let i = 0; i < 5; i += 1) {
    expect(f.treeArray[i]).toBe(0)
  }

  const f2 = new FenwickTree(499)
  expect(f2.size).toBe(499 + 1)

})

describe("create and insert", () => {
  it('should create correct tree', function () {
    const inputArray = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3];
    const f = new FenwickTree(inputArray.length)
    expect(f.size).toBe(inputArray.length + 1)

    inputArray.forEach((value, index) => {
      f.increase(index + 1, value)
    })

    expect(f.toString()).toBe("0,3,5,-1,10,5,9,-3,19,7,9,3")

    expect(f.query(1)).toBe(3)
    expect(f.query(2)).toBe(5)
    expect(f.query(3)).toBe(4)
    expect(f.query(4)).toBe(10)
    expect(f.query(5)).toBe(15)
    expect(f.query(6)).toBe(19)
    expect(f.query(7)).toBe(16)
    expect(f.query(8)).toBe(19)
    expect(f.query(9)).toBe(26)
    expect(f.query(10)).toBe(28)
    expect(f.query(11)).toBe(31)

    expect(f.queryRange(1, 1)).toBe(3)
    expect(f.queryRange(1, 2)).toBe(5)
    expect(f.queryRange(2, 4)).toBe(7)
    expect(f.queryRange(6, 9)).toBe(11)

    f.increase(3, 1)

    expect(f.query(1)).toBe(3)
    expect(f.query(2)).toBe(5)
    expect(f.query(3)).toBe(5)
    expect(f.query(4)).toBe(11)
    expect(f.query(5)).toBe(16)
    expect(f.query(6)).toBe(20)
    expect(f.query(7)).toBe(17)
    expect(f.query(8)).toBe(20)
    expect(f.query(9)).toBe(27)
    expect(f.query(10)).toBe(29)
    expect(f.query(11)).toBe(32)

    expect(f.queryRange(1, 1)).toBe(3)
    expect(f.queryRange(1, 2)).toBe(5)
    expect(f.queryRange(2, 4)).toBe(8)
    expect(f.queryRange(6, 9)).toBe(11)
  })
  it('should correctly execute queries', () => {
    const tree = new FenwickTree(5)

    tree.increase(1, 4)
    tree.increase(3, 7)

    expect(tree.query(1)).toBe(4)
    expect(tree.query(3)).toBe(11)
    expect(tree.query(5)).toBe(11)
    expect(tree.queryRange(2, 3)).toBe(7)

    tree.increase(2, 5)
    expect(tree.query(5)).toBe(16)

    tree.increase(1, 3)
    expect(tree.queryRange(1, 1)).toBe(7)
    expect(tree.query(5)).toBe(19)
    expect(tree.queryRange(1, 5)).toBe(19)
  })

  it("should create tree from array", () => {
    const inputArray = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3];
    const f = FenwickTree.fromArray(inputArray)
    expect(f.size).toBe(inputArray.length + 1)

    expect(f.toString()).toBe("0,3,5,-1,10,5,9,-3,19,7,9,3")

    expect(f.query(1)).toBe(3)
    expect(f.query(2)).toBe(5)
    expect(f.query(3)).toBe(4)
    expect(f.query(4)).toBe(10)
    expect(f.query(5)).toBe(15)
    expect(f.query(6)).toBe(19)
    expect(f.query(7)).toBe(16)
    expect(f.query(8)).toBe(19)
    expect(f.query(9)).toBe(26)
    expect(f.query(10)).toBe(28)
    expect(f.query(11)).toBe(31)

    expect(f.queryRange(1, 1)).toBe(3)
    expect(f.queryRange(1, 2)).toBe(5)
    expect(f.queryRange(2, 4)).toBe(7)
    expect(f.queryRange(6, 9)).toBe(11)

    f.increase(3, 1)

    expect(f.query(1)).toBe(3)
    expect(f.query(2)).toBe(5)
    expect(f.query(3)).toBe(5)
    expect(f.query(4)).toBe(11)
    expect(f.query(5)).toBe(16)
    expect(f.query(6)).toBe(20)
    expect(f.query(7)).toBe(17)
    expect(f.query(8)).toBe(20)
    expect(f.query(9)).toBe(27)
    expect(f.query(10)).toBe(29)
    expect(f.query(11)).toBe(32)

    expect(f.queryRange(1, 1)).toBe(3)
    expect(f.queryRange(1, 2)).toBe(5)
    expect(f.queryRange(2, 4)).toBe(8)
    expect(f.queryRange(6, 9)).toBe(11)

  })

  it('should throw exceptions', () => {
    const tree = new FenwickTree(5)

    const increaseAtInvalidLowIndex = () => {
      tree.increase(0, 1)
    };

    const increaseAtInvalidHighIndex = () => {
      tree.increase(10, 1)
    };

    const queryInvalidLowIndex = () => {
      tree.query(0)
    };

    const queryInvalidHighIndex = () => {
      tree.query(10)
    };

    const rangeQueryInvalidIndex = () => {
      tree.queryRange(3, 2)
    };

    expect(increaseAtInvalidLowIndex).toThrowError()
    expect(increaseAtInvalidHighIndex).toThrowError()
    expect(queryInvalidLowIndex).toThrowError()
    expect(queryInvalidHighIndex).toThrowError()
    expect(rangeQueryInvalidIndex).toThrowError()
  })
})