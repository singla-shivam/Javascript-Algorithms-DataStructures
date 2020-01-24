const MinHeap = require('../minHeap')

class Person {
  constructor(age) {
    this.age = age
  }

  toString() {
    return `age=>${this.age}`
  }
}

test("it should create min-heap", () => {
  const minHeap = new MinHeap()

  expect(minHeap).toBeDefined()
  expect(minHeap.peek()).toBeNull()
  expect(minHeap.isEmpty()).toBe(true)
})

test("it should create min-heap", () => {
  const minHeap = new MinHeap()

  minHeap.add(5)
  expect(minHeap.peek()).toBe(5)
  expect(minHeap.isEmpty()).toBe(false)
  expect(minHeap.toString()).toBe('5')

  minHeap.add(3)
  expect(minHeap.peek()).toBe(3)
  expect(minHeap.toString()).toBe('3,5')

  minHeap.add(10)
  expect(minHeap.peek()).toBe(3)
  expect(minHeap.toString()).toBe('3,5,10')

  minHeap.add(1)
  expect(minHeap.peek()).toBe(1)
  expect(minHeap.toString()).toBe('1,3,10,5')

  minHeap.add(1)
  expect(minHeap.peek()).toBe(1)
  expect(minHeap.toString()).toBe('1,1,10,5,3')

  minHeap.add(2)
  expect(minHeap.peek()).toBe(1)
  expect(minHeap.toString()).toBe('1,1,2,5,3,10')

  minHeap.add(0)
  expect(minHeap.peek()).toBe(0)
  expect(minHeap.toString()).toBe('0,1,1,5,3,10,2')

  minHeap.add(1)
  expect(minHeap.peek()).toBe(0)
  expect(minHeap.toString()).toBe('0,1,1,1,3,10,2,5')

  expect(minHeap.poll()).toBe(0)
  expect(minHeap.toString()).toBe('1,1,2,1,3,10,5')

  expect(minHeap.poll()).toBe(1)
  expect(minHeap.toString()).toBe('1,1,2,5,3,10')

  expect(minHeap.poll()).toBe(1)
  expect(minHeap.toString()).toBe('1,3,2,5,10')

  expect(minHeap.poll()).toBe(1)
  expect(minHeap.toString()).toBe('2,3,10,5')

  expect(minHeap.poll()).toBe(2)
  expect(minHeap.toString()).toBe('3,5,10')

  expect(minHeap.poll()).toBe(3)
  expect(minHeap.toString()).toBe('5,10')

  expect(minHeap.poll()).toBe(5)
  expect(minHeap.toString()).toBe('10')

  expect(minHeap.poll()).toBe(10)
  expect(minHeap.toString()).toBe('')

  expect(minHeap.size).toBe(0)
  expect(minHeap.peek()).toBeNull()
  expect(minHeap.isEmpty()).toBe(true)
  expect(minHeap.peek()).toBeNull()

})

test("it should create min-heap from array", () => {
  const arr = [6, 1, 2, 4, 3, 1, 8, 5, 7]
  const minHeap = MinHeap.fromArray(arr)

  expect(minHeap.toString()).toBe("1,1,2,3,4,5,6,7,8")
})

test("it should add items correctly", () => {
  const minHeap = new MinHeap()

  minHeap.add(16)
  expect(minHeap.size).toBe(1)
  expect(minHeap.peek()).not.toBeNull()
  expect(minHeap.isEmpty()).toBe(false)
  expect(minHeap.toString()).toBe("16")

  minHeap.add(15)
  expect(minHeap.peek()).toBe(15)
  expect(minHeap.toString()).toBe('15,16')

  minHeap.add(14)
  expect(minHeap.peek()).toBe(14)
  expect(minHeap.toString()).toBe('14,16,15')

  minHeap.add(13)
  expect(minHeap.peek()).toBe(13)
  expect(minHeap.toString()).toBe('13,14,15,16')

  minHeap.add(12)
  expect(minHeap.peek()).toBe(12)
  expect(minHeap.toString()).toBe('12,13,15,16,14')

  minHeap.add(11)
  expect(minHeap.peek()).toBe(11)
  expect(minHeap.toString()).toBe('11,13,12,16,14,15')

  minHeap.add(10)
  expect(minHeap.peek()).toBe(10)
  expect(minHeap.toString()).toBe('10,13,11,16,14,15,12')

  minHeap.add(9)
  expect(minHeap.peek()).toBe(9)
  expect(minHeap.toString()).toBe('9,10,11,13,14,15,12,16')

  minHeap.add(8)
  expect(minHeap.peek()).toBe(8)
  expect(minHeap.toString()).toBe('8,9,11,10,14,15,12,16,13')

  minHeap.add(7)
  expect(minHeap.peek()).toBe(7)
  expect(minHeap.toString()).toBe('7,8,11,10,9,15,12,16,13,14')

  minHeap.add(6)
  expect(minHeap.peek()).toBe(6)
  expect(minHeap.toString()).toBe('6,7,11,10,8,15,12,16,13,14,9')

  minHeap.add(5)
  expect(minHeap.peek()).toBe(5)
  expect(minHeap.toString()).toBe('5,7,6,10,8,11,12,16,13,14,9,15')

  minHeap.add(4)
  expect(minHeap.peek()).toBe(4)
  expect(minHeap.toString()).toBe('4,7,5,10,8,6,12,16,13,14,9,15,11')

  minHeap.add(3)
  expect(minHeap.peek()).toBe(3)
  expect(minHeap.toString()).toBe('3,7,4,10,8,6,5,16,13,14,9,15,11,12')

  minHeap.add(2)
  expect(minHeap.peek()).toBe(2)
  expect(minHeap.toString()).toBe('2,7,3,10,8,6,4,16,13,14,9,15,11,12,5')

  minHeap.add(1)
  expect(minHeap.peek()).toBe(1)
  expect(minHeap.toString()).toBe('1,2,3,7,8,6,4,10,13,14,9,15,11,12,5,16')
})

test("it should give indices of items in heap tree", () => {
  const minHeap = MinHeap.fromArray([10, 11, 12, 13, 14, 15, 16])
  minHeap.add(3).add(10).add(4).add(3).add(1).add(5).add(1).add(4).add(11).add(12)
    .add(10).add(3).add(4).add(6).add(5).add(7).add(10)

  expect(minHeap.toString()).toBe("1,3,1,3,4,5,3,11,10,4,5,10,12,16,4,13,12,11,10,14,6,10,7,15")

  expect(minHeap.find(3)).toEqual([1,3,6])
  expect(minHeap.find(1)).toEqual([0,2])
  expect(minHeap.find(4)).toEqual([4,9,14])
  expect(minHeap.find(0)).toEqual([])
  expect(minHeap.find(5)).toEqual([5,10])
  expect(minHeap.find(6)).toEqual([20])
  expect(minHeap.find(7)).toEqual([22])
  expect(minHeap.find(10)).toEqual([8,11,18,21])
  expect(minHeap.find(11)).toEqual([7,17])
  expect(minHeap.find(12)).toEqual([12,16])
  expect(minHeap.find(13)).toEqual([15])
  expect(minHeap.find(14)).toEqual([19])
  expect(minHeap.find(15)).toEqual([23])
  expect(minHeap.find(16)).toEqual([13])
})

test('should be possible to remove items from heap with heapify down', () => {
  const minHeap = new MinHeap();

  minHeap.add(3);
  minHeap.add(12);
  minHeap.add(10);
  minHeap.add(11);
  minHeap.add(11);

  expect(minHeap.toString()).toBe('3,11,10,12,11');

  expect(minHeap.remove(3).toString()).toEqual('10,11,11,12');
  expect(minHeap.remove(3).peek()).toEqual(10);
  expect(minHeap.remove(11).toString()).toEqual('10,12');
  expect(minHeap.remove(3).peek()).toEqual(10);
})

test('should be possible to remove items from heap with heapify up', () => {
  const minHeap = new MinHeap();

  minHeap.add(3);
  minHeap.add(10);
  minHeap.add(5);
  minHeap.add(6);
  minHeap.add(7);
  minHeap.add(4);
  minHeap.add(6);
  minHeap.add(8);
  minHeap.add(2);
  minHeap.add(1);

  expect(minHeap.toString()).toBe('1,2,4,6,3,5,6,10,8,7');
  expect(minHeap.remove(8).toString()).toEqual('1,2,4,6,3,5,6,10,7');
  expect(minHeap.remove(7).toString()).toEqual('1,2,4,6,3,5,6,10');
  expect(minHeap.remove(1).toString()).toEqual('2,3,4,6,10,5,6');
  expect(minHeap.remove(2).toString()).toEqual('3,6,4,6,10,5');
  expect(minHeap.remove(6).toString()).toEqual('3,5,4,10');
  expect(minHeap.remove(10).toString()).toEqual('3,5,4');
  expect(minHeap.remove(5).toString()).toEqual('3,4');
  expect(minHeap.remove(3).toString()).toEqual('4');
  expect(minHeap.remove(4).toString()).toEqual('');
})

test('should remove values from heap and correctly re-order the tree', () => {
  const minHeap = new MinHeap();

  minHeap.add(1);
  minHeap.add(2);
  minHeap.add(3);
  minHeap.add(4);
  minHeap.add(5);
  minHeap.add(6);
  minHeap.add(7);
  minHeap.add(8);
  minHeap.add(9);

  expect(minHeap.toString()).toBe('1,2,3,4,5,6,7,8,9');

  minHeap.remove(2);
  expect(minHeap.toString()).toBe('1,4,3,8,5,6,7,9');

  minHeap.remove(4);
  expect(minHeap.toString()).toBe('1,5,3,8,9,6,7');
})

test("should build heap with custom object type", () => {
  const arr = [6, 1, 2, 4, 3, 1, 8, 5, 7]
  const heap = new MinHeap((a, b) => {
    if(a.age === b.age) return 0
    else return a.age - b.age
  })
  arr.forEach(a => heap.add(new Person(a)))
  expect(heap.toString()).toBe("age=>1,age=>3,age=>1,age=>5,age=>4,age=>2,age=>8,age=>6,age=>7")
})
