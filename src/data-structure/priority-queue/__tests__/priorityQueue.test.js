const PriorityQueue = require('../priorityQueue')

test("it should create priority queue and add values with priority", () => {
  const p = new PriorityQueue()

  expect(p).toBeDefined()

  p.enqueue(5, 1)
  expect(p.peek()).toBe(5)
  p.enqueue(6, 0)
  expect(p.peek()).toBe(6)
  p.enqueue(7, 3)
  expect(p.peek()).toBe(6)
  p.enqueue(8, 2)
  expect(p.peek()).toBe(6)
})

test("it should create priority queue with other objects", () => {
  const p = new PriorityQueue()
  const p1 = {age: 27, salary: 1000}
  const p2 = {age: 37, salary: 2000}
  const p3 = {age: 17, salary: 3000}

  p.enqueue(p1, 2)
  expect(p.peek()).toBe(p1)

  p.enqueue(p2, 1)
  expect(p.peek()).toBe(p2)

  p.enqueue(p3, 0)
  expect(p.peek()).toBe(p3)
})

test("it should deque from wrt priorities", () => {
  const priorityQueue = new PriorityQueue()
  priorityQueue.enqueue(10, 1)
  priorityQueue.enqueue(5, 2)
  priorityQueue.enqueue(100, 0)
  priorityQueue.enqueue(200, 0)

  expect(priorityQueue.dequeue()).toBe(100);
  expect(priorityQueue.dequeue()).toBe(200);
  expect(priorityQueue.dequeue()).toBe(10);
  expect(priorityQueue.dequeue()).toBe(5);
})

test("should be able to create priority queue from an array", () => {
  const arr = [[1, 5], [2, 4], [3, 2], [4, 3], [5, 1], [6, 0]]

  const p = PriorityQueue.fromArray(arr)

  console.log(p.toString())
  expect(p.toString()).toBe("6,5,3,4,2,1")
})

test("should be able to find values", () => {
  const arr = [[1, 5], [2, 4], [3, 2], [4, 3], [5, 1], [6, 0]]

  const p = PriorityQueue.fromArray(arr)

  expect(p.has(1)).toBe(true)
  expect(p.has(7)).toBe(false)
  expect(p.has(2)).toBe(true)
  expect(p.has(3)).toBe(true)
  expect(p.has(8)).toBe(false)
  expect(p.has(6)).toBe(true)
})
