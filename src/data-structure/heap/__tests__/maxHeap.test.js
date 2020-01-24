const MaxHeap = require('../maxHeap')

class Person {
  constructor(age) {
    this.age = age
  }

  toString() {
    return `age=>${this.age}`
  }
}

test("it should create max-heap", () => {
  const maxHeap = new MaxHeap()

  expect(maxHeap).toBeDefined()
  expect(maxHeap.peek()).toBeNull()
  expect(maxHeap.isEmpty()).toBe(true)
})

test("it should create max-heap", () => {
  const maxHeap = new MaxHeap()

  maxHeap.add(5)
  expect(maxHeap.peek()).toBe(5)
  expect(maxHeap.isEmpty()).toBe(false)
  expect(maxHeap.toString()).toBe('5')

  maxHeap.add(3)
  expect(maxHeap.peek()).toBe(5)
  expect(maxHeap.toString()).toBe('5,3')

  maxHeap.add(10)
  expect(maxHeap.peek()).toBe(10)
  expect(maxHeap.toString()).toBe('10,3,5')

  maxHeap.add(4)
  expect(maxHeap.peek()).toBe(10)
  expect(maxHeap.toString()).toBe('10,4,5,3')

  maxHeap.add(5)
  expect(maxHeap.peek()).toBe(10)
  expect(maxHeap.toString()).toBe('10,5,5,3,4')

  maxHeap.add(11)
  expect(maxHeap.peek()).toBe(11)
  expect(maxHeap.toString()).toBe('11,5,10,3,4,5')

  maxHeap.add(12)
  expect(maxHeap.peek()).toBe(12)
  expect(maxHeap.toString()).toBe('12,5,11,3,4,5,10')

  maxHeap.add(10)
  expect(maxHeap.peek()).toBe(12)
  expect(maxHeap.toString()).toBe('12,10,11,5,4,5,10,3')

  expect(maxHeap.poll()).toBe(12)
  expect(maxHeap.toString()).toBe('11,10,10,5,4,5,3')

  expect(maxHeap.poll()).toBe(11)
  expect(maxHeap.toString()).toBe('10,10,5,5,4,3')

  expect(maxHeap.poll()).toBe(10)
  expect(maxHeap.toString()).toBe('10,5,5,3,4')

  expect(maxHeap.poll()).toBe(10)
  expect(maxHeap.toString()).toBe('5,5,4,3')

  expect(maxHeap.poll()).toBe(5)
  expect(maxHeap.toString()).toBe('5,3,4')

  expect(maxHeap.poll()).toBe(5)
  expect(maxHeap.toString()).toBe('4,3')

  expect(maxHeap.poll()).toBe(4)
  expect(maxHeap.toString()).toBe('3')

  expect(maxHeap.poll()).toBe(3)
  expect(maxHeap.toString()).toBe('')

  expect(maxHeap.size).toBe(0)
  expect(maxHeap.peek()).toBeNull()
  expect(maxHeap.isEmpty()).toBe(true)
  expect(maxHeap.peek()).toBeNull()

})

test("it should create max-heap from array", () => {
  const arr = [6, 1, 2, 4, 3, 1, 8, 5, 7]
  const maxHeap = MaxHeap.fromArray(arr)

  expect(maxHeap.toString()).toBe("8,7,6,5,4,3,2,1,1")
})

test("it should add items correctly - max-heap", () => {
  const maxHeap = new MaxHeap()

  maxHeap.add(1)
  expect(maxHeap.size).toBe(1)
  expect(maxHeap.peek()).not.toBeNull()
  expect(maxHeap.isEmpty()).toBe(false)
  expect(maxHeap.toString()).toBe("1")

  maxHeap.add(2)
  expect(maxHeap.peek()).toBe(2)
  expect(maxHeap.toString()).toBe('2,1')

  maxHeap.add(3)
  expect(maxHeap.peek()).toBe(3)
  expect(maxHeap.toString()).toBe('3,1,2')

  maxHeap.add(4)
  expect(maxHeap.peek()).toBe(4)
  expect(maxHeap.toString()).toBe('4,3,2,1')

  maxHeap.add(5)
  expect(maxHeap.peek()).toBe(5)
  expect(maxHeap.toString()).toBe('5,4,2,1,3')

  maxHeap.add(6)
  expect(maxHeap.peek()).toBe(6)
  expect(maxHeap.toString()).toBe('6,4,5,1,3,2')

  maxHeap.add(7)
  expect(maxHeap.peek()).toBe(7)
  expect(maxHeap.toString()).toBe('7,4,6,1,3,2,5')

  maxHeap.add(8)
  expect(maxHeap.peek()).toBe(8)
  expect(maxHeap.toString()).toBe('8,7,6,4,3,2,5,1')

  maxHeap.add(9)
  expect(maxHeap.peek()).toBe(9)
  expect(maxHeap.toString()).toBe('9,8,6,7,3,2,5,1,4')

  maxHeap.add(10)
  expect(maxHeap.peek()).toBe(10)
  expect(maxHeap.toString()).toBe('10,9,6,7,8,2,5,1,4,3')

  maxHeap.add(11)
  expect(maxHeap.peek()).toBe(11)
  expect(maxHeap.toString()).toBe('11,10,6,7,9,2,5,1,4,3,8')

  maxHeap.add(12)
  expect(maxHeap.peek()).toBe(12)
  expect(maxHeap.toString()).toBe('12,10,11,7,9,6,5,1,4,3,8,2')

  maxHeap.add(13)
  expect(maxHeap.peek()).toBe(13)
  expect(maxHeap.toString()).toBe('13,10,12,7,9,11,5,1,4,3,8,2,6')

  maxHeap.add(14)
  expect(maxHeap.peek()).toBe(14)
  expect(maxHeap.toString()).toBe('14,10,13,7,9,11,12,1,4,3,8,2,6,5')

  maxHeap.add(15)
  expect(maxHeap.peek()).toBe(15)
  expect(maxHeap.toString()).toBe('15,10,14,7,9,11,13,1,4,3,8,2,6,5,12')

  maxHeap.add(16)
  expect(maxHeap.peek()).toBe(16)
  expect(maxHeap.toString()).toBe('16,15,14,10,9,11,13,7,4,3,8,2,6,5,12,1')
})

test("it should give indices of items in heap tree - max-heap", () => {
  const maxHeap = MaxHeap.fromArray([1,2,3,4,5,6,7])

  maxHeap.add(13).add(10).add(14).add(3).add(6).add(5).add(10).add(14).add(13).add(12)
    .add(10).add(13).add(3).add(16).add(15).add(7).add(11)

  expect(maxHeap.toString()).toBe("16,15,14,13,14,11,10,12,13,10,13,5,5,1,6,4,7,6,10,3,3,3,7,2")

  expect(maxHeap.find(3)).toEqual([19,20,21])
  expect(maxHeap.find(1)).toEqual([13])
  expect(maxHeap.find(4)).toEqual([15])
  expect(maxHeap.find(2)).toEqual([23])
  expect(maxHeap.find(5)).toEqual([11,12])
  expect(maxHeap.find(6)).toEqual([14,17])
  expect(maxHeap.find(7)).toEqual([16,22])
  expect(maxHeap.find(10)).toEqual([6,9,18])
  expect(maxHeap.find(11)).toEqual([5])
  expect(maxHeap.find(12)).toEqual([7])
  expect(maxHeap.find(13)).toEqual([3,8,10])
  expect(maxHeap.find(14)).toEqual([2,4])
  expect(maxHeap.find(15)).toEqual([1])
  expect(maxHeap.find(16)).toEqual([0])
})

test('should be possible to remove items from heap with heapify down - max heap', () => {
  const maxHeap = new MaxHeap();

  maxHeap.add(10);
  maxHeap.add(11);
  maxHeap.add(3);
  maxHeap.add(12);
  maxHeap.add(11);

  expect(maxHeap.toString()).toBe('12,11,3,10,11');

  expect(maxHeap.remove(12).toString()).toEqual('11,11,3,10');
  expect(maxHeap.remove(11).toString()).toEqual('10,3');
})

test('should be possible to remove items from heap with heapify up - max heap', () => {
  const maxHeap = new MaxHeap();

  maxHeap.add(3);
  maxHeap.add(10);
  maxHeap.add(5);
  maxHeap.add(6);
  maxHeap.add(7);
  maxHeap.add(4);
  maxHeap.add(6);
  maxHeap.add(8);
  maxHeap.add(2);
  maxHeap.add(1);

  expect(maxHeap.toString()).toBe('10,8,6,7,6,4,5,3,2,1');
  expect(maxHeap.remove(4).toString()).toEqual('10,8,6,7,6,1,5,3,2');
  expect(maxHeap.remove(3).toString()).toEqual('10,8,6,7,6,1,5,2');
  expect(maxHeap.remove(5).toString()).toEqual('10,8,6,7,6,1,2');
  expect(maxHeap.remove(10).toString()).toEqual('8,7,6,2,6,1');
  expect(maxHeap.remove(6).toString()).toEqual('8,7,1,2');
  expect(maxHeap.remove(2).toString()).toEqual('8,7,1');
  expect(maxHeap.remove(1).toString()).toEqual('8,7');
  expect(maxHeap.remove(7).toString()).toEqual('8');
  expect(maxHeap.remove(8).toString()).toEqual('');
})

test("should build heap with custom object type max-heap", () => {
  const arr = [6, 1, 2, 4, 3, 1, 8, 5, 7]
  const heap = new MaxHeap((a, b) => {
    if(a.age === b.age) return 0
    else return a.age - b.age
  })
  arr.forEach(a => heap.add(new Person(a)))
  expect(heap.toString()).toBe("age=>8,age=>7,age=>6,age=>5,age=>3,age=>1,age=>2,age=>1,age=>4")
})
