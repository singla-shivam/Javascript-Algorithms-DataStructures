const SegmentTree = require('../segmentTree')

test('should build tree for input array length of power of two', () => {
  const array = [3, 2];
  const segmentTree = new SegmentTree(Math.min, Infinity, null, array);

  expect(segmentTree.tree).toEqual([Infinity, 2, 3, 2]);
  expect(segmentTree.tree.length).toBe((2 * array.length));

  const array2 = [-1, 2, 4, 0];
  const segmentTree2 = new SegmentTree(Math.min, Infinity, null, array2);

  expect(segmentTree2.tree).toEqual([Infinity, -1, -1, 0, -1, 2, 4, 0]);
  expect(segmentTree2.tree.length).toBe((2 * array2.length));
});

test("should throw error", () => {
  try {
    const segmentTree = new SegmentTree(Math.min, Infinity)
  } catch (e) {
    expect(e.message).toBe("Size and Input array can not be null at same time")
  }

})

test("should create tree with given size", () => {
  let segmentTree = new SegmentTree(Math.min, Infinity, 5)
  expect(segmentTree.size).toBe(16)
  expect(segmentTree.inputSize).toBe(5)
  segmentTree = new SegmentTree(Math.min, Infinity, 150)
  expect(segmentTree.size).toBe(512)
  expect(segmentTree.inputSize).toBe(150)
})

test('should build tree for input array with length not of power of two', () => {
  const array = [5, 2, 3, 7, 6];
  const segmentTree = new SegmentTree(Math.min, Infinity, null, array);

  expect(segmentTree.tree).toEqual([Infinity, 2, 5, 2, Infinity, 5, 2, 6, Infinity, Infinity, Infinity, 5, 2, 3, 7, 6]);
  expect(segmentTree.tree.length).toBe(2 * 8);
});

test('should build tree for input array with length not of power of two', () => {
  const array = [-1, 3, 4, 0, 2, 1];
  const segmentTree = new SegmentTree(Math.min, Infinity, null, array);

  expect(segmentTree.tree).toEqual([Infinity, -1, -1, 0, Infinity, -1, 0, 1, Infinity, Infinity, -1, 3, 4, 0, 2, 1]);
  expect(segmentTree.tree.length).toBe(2 * 8);
});

test('should build max array', () => {
  const array = [0, 1, -1, -3, -7, 5, 6, 7, 2];
  const segmentTree = new SegmentTree(Math.max, -Infinity, null, array);

  expect(segmentTree.tree).toEqual([
    -Infinity,
    7,
    0,
    7,
    -Infinity,
    0,
    1,
    7,
    -Infinity,
    -Infinity,
    -Infinity,
    0,
    1,
    -3,
    6,
    7,
    -Infinity,
    -Infinity,
    -Infinity,
    -Infinity,
    -Infinity,
    -Infinity,
    -Infinity,
    0,
    1,
    -1,
    -3,
    -7,
    5,
    6,
    7,
    2]);
  expect(segmentTree.tree.length).toBe((2 * 16));
});

test('should build sum array', () => {
  const array = [0, 1, -1, -3, -7, 5, 6, 7, 2];
  const segmentTree = new SegmentTree((a, b) => (a + b), 0, null, array);

  expect(segmentTree.tree).toEqual([
    0,
    10,
    0,
    10,
    0,
    0,
    -10,
    20,
    0,
    0,
    0,
    0,
    0,
    -10,
    11,
    9,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    -1,
    -3,
    -7,
    5,
    6,
    7,
    2]);
  expect(segmentTree.tree.length).toBe(2 * 16);
});

test('should do sum range query', () => {
  const array = [0, 1, -1, -3, -7, 5, 6, 7, 2];
  const segmentTree = new SegmentTree((a, b) => (a + b), 0, null, array);

  expect(segmentTree.query(0, 5)).toBe(-5);
  expect(segmentTree.query(0, 1)).toBe(1);
  expect(segmentTree.query(1, 3)).toBe(-3);
  expect(segmentTree.query(4, 3)).toBe(0);
  expect(segmentTree.query(2, 3)).toBe(-4);
  expect(segmentTree.query(4, 5)).toBe(-2);
  expect(segmentTree.query(4, 4)).toBe(-7);
});

test('should do sum range query on power of two length array', () => {
  const array = [0, 1, -1, 3, -7, 5, 6, 7];
  const segmentTree = new SegmentTree((a, b) => (a + b), 0, null, array);

  expect(segmentTree.tree.length).toBe(16)

  expect(segmentTree.query(0, 5)).toBe(1);
  expect(segmentTree.query(0, 1)).toBe(1);
  expect(segmentTree.query(1, 3)).toBe(3);
  expect(segmentTree.query(6, 3)).toBe(0);
  expect(segmentTree.query(2, 3)).toBe(2);
  expect(segmentTree.query(4, 5)).toBe(-2);
  expect(segmentTree.query(4, 4)).toBe(-7);
});

test('should do min range query on power of two length array', () => {
  const array = [-1, 3, 4, 0, 2, 1];
  const segmentTree = new SegmentTree(Math.min, Infinity, null, array);

  expect(segmentTree.query(0, 5)).toBe(-1);
  expect(segmentTree.query(0, 2)).toBe(-1);
  expect(segmentTree.query(1, 3)).toBe(0);
  expect(segmentTree.query(2, 4)).toBe(0);
  expect(segmentTree.query(4, 5)).toBe(1);
  expect(segmentTree.query(2, 2)).toBe(4);
});

test('should do max range query', () => {
  const array = [0, 1, -1, -3, -7, 5, 6, 7, 2];
  const segmentTree = new SegmentTree(Math.max, -Infinity, null, array);

  expect(segmentTree.query(6, 5)).toBe(-Infinity);
  expect(segmentTree.query(6, 8)).toBe(7);
  expect(segmentTree.query(2, 4)).toBe(-1);
  expect(segmentTree.query(0, 0)).toBe(0);
  expect(segmentTree.query(0, 5)).toBe(5);
});

