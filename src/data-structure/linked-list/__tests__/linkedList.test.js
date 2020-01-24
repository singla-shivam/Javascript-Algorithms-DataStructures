const LinkedList = require('../linkedList')

class Person {
  constructor(age) {
    this.age = age
  }

  toString() {
    return "age => " + this.age
  }
}

test("should create list", () => {
  const l = new LinkedList()
  expect(l.size).toBe(0)
  expect(l.head).toBeNull()
  expect(l.tail).toBeNull()

  l.prepend(2)
  expect(l.size).toBe(1)
  expect(l.head.value).toBe(2)
  expect(l.head).toEqual(l.tail)

  l.prepend(3)
  expect(l.size).toBe(2)
  expect(l.head.value).toBe(3)
  expect(l.head).not.toEqual(l.tail)
  expect(l.head.next).toEqual(l.tail)
})

test('should support append', () => {
  const l = new LinkedList()
  expect(l.size).toBe(0)
  expect(l.head).toBeNull()
  expect(l.tail).toBeNull()

  l.append(1)
  expect(l.head).not.toBeNull()
  expect(l.tail).not.toBeNull()
  expect(l.size).toBe(1)
  expect(l.head.value).toBe(1)

  l.append(2)
  expect(l.size).toBe(2)
  expect(l.head.value).toBe(1)
  expect(l.head.next.value).toBe(2)
  expect(l.tail.value).toBe(2)

  l.append(3)
  expect(l.size).toBe(3)
  expect(l.head.value).toBe(1)
  expect(l.head.next.value).toBe(2)
  expect(l.head.next.next.value).toBe(3)
  expect(l.tail.value).toBe(3)
  expect(l.toString()).toBe("1 -> 2 -> 3")

})

test('should support prepend', () => {
  const l = new LinkedList()
  expect(l.size).toBe(0)
  expect(l.head).toBeNull()
  expect(l.tail).toBeNull()

  l.prepend(1)
  expect(l.head).not.toBeNull()
  expect(l.tail).not.toBeNull()
  expect(l.size).toBe(1)
  expect(l.head.value).toBe(1)

  l.prepend(2)
  expect(l.size).toBe(2)
  expect(l.head.value).toBe(2)
  expect(l.head.next.value).toBe(1)
  expect(l.tail.value).toBe(1)

  l.prepend(3)
  expect(l.size).toBe(3)
  expect(l.head.value).toBe(3)
  expect(l.head.next.value).toBe(2)
  expect(l.head.next.next.value).toBe(1)
  expect(l.tail.value).toBe(1)

  expect(l.toString()).toBe("3 -> 2 -> 1")

})

test("should create list from array", () => {
  const arr = [1, 2, 5, 8, 5, 6, 45, 86, -9]
  const len = arr.length
  const l = LinkedList.fromArray(arr)

  expect(l.size).toBe(len)

  let curr = l.head
  for (let i = 0; i < len; i++) {
    expect(curr).not.toBeNull()
    expect(curr.value).toBe(arr[i])
    curr = curr.next
  }

})

test("it should return array from linkedList", () => {
  const arr = [1, 2, 5, 8, 5, 6, 45, 86, -9]

  const l = new LinkedList()
  arr.forEach(a => l.append(a))
  expect(l.size).toBe(arr.length)
  const ret = l.toArray()

  for (let i = 0; i < arr.length; i++) {
    expect(ret[i]).toBe(arr[i])
  }

})

test("it should delete one node list", () => {
  const l = new LinkedList()
  l.append(2)
  expect(l.size).toBe(1)
  expect(l.head).not.toBeNull()
  expect(l.head).toBe(l.tail)

  let d = l.delete(2)
  expect(l.size).toBe(0)
  expect(l.head).toBeNull()
  expect(l.tail).toBeNull()
  expect(d.value).toBe(2)
})

test("it should delete n items", () => {
  const arr = [1, 2, 5, 8, 5, 6, 45, 86, -9]
  const len = arr.length
  let l = LinkedList.fromArray(arr)

  for (let i = 0; i < len; i++) {
    let d = l.delete(arr[i])
    expect(l.size).toBe(len - i - 1)
    if (i < len - 1) {
      expect(l.head).not.toBeNull()
      expect(l.tail).not.toBeNull()

    } else {
      expect(l.head).toBeNull()
      expect(l.tail).toBeNull()
    }
    expect(d.value).toBe(arr[i])
  }

  l = LinkedList.fromArray(arr)

  for (let i = 0; i < len; i++) {
    let d = l.delete(arr[len - 1 - i])
    expect(l.size).toBe(len - i - 1)
    if (i < len - 1) {
      expect(l.head).not.toBeNull()
      expect(l.tail).not.toBeNull()

    } else {
      expect(l.head).toBeNull()
      expect(l.tail).toBeNull()
    }
    expect(d.value).toBe(arr[len - 1 - i])
  }

  l = LinkedList.fromArray(arr)

  let d = l.delete(8)
  expect(d.value).toBe(8)
  expect(l.size).toBe(len - 1)
  let curr = l.head
  for (let i = 0; i < len && curr != null; i++) {
    if (d.value !== arr[i]) {
      expect(curr).not.toBeNull()
      expect(curr.value).toBe(arr[i])
      curr = curr.next
    }
  }

})

test("it should delete head & tail from linked list of size 1", () => {
  let l = new LinkedList()
  l.append(2)
  expect(l.size).toBe(1)
  expect(l.head).not.toBeNull()
  expect(l.tail).not.toBeNull()

  l.deleteHead()
  expect(l.size).toBe(0)
  expect(l.head).toBeNull()
  expect(l.tail).toBeNull()

  l.append(2)
  expect(l.size).toBe(1)
  expect(l.head).not.toBeNull()
  expect(l.tail).not.toBeNull()

  l.deleteTail()
  expect(l.size).toBe(0)
  expect(l.head).toBeNull()
  expect(l.tail).toBeNull()
})

test("it should delete head & tail from linked list of size 2", () => {
  let l = new LinkedList()
  l.append(2)
  l.append(3)
  expect(l.size).toBe(2)
  expect(l.head).not.toBeNull()
  expect(l.tail).not.toBeNull()
  expect(l.head.next).toBe(l.tail)

  l.deleteHead()
  expect(l.size).toBe(1)
  expect(l.head).not.toBeNull()
  expect(l.head).toBe(l.tail)

  l.append(2)
  expect(l.size).toBe(2)
  expect(l.head).not.toBeNull()
  expect(l.tail).not.toBeNull()

  l.deleteTail()
  expect(l.size).toBe(1)
  expect(l.head).not.toBeNull()
  expect(l.head).toBe(l.tail)
})

test("it should delete head & tail from linked list of size n", () => {
  const arr = [1, 2, 5, 8, 5, 6, 45, 86, -9]
  const len = arr.length
  let l = LinkedList.fromArray(arr)

  let d = l.deleteHead()

  expect(l.size).toBe(len - 1)
  expect(d.value).toBe(1)

  let curr = l.head
  for (let i = 0; i < len && curr != null; i++) {
    if (d.value !== arr[i]) {
      expect(curr).not.toBeNull()
      expect(curr.value).toBe(arr[i])
      curr = curr.next
    }
  }

  d = l.deleteTail()

  expect(l.size).toBe(len - 2)
  expect(d.value).toBe(-9)

  curr = l.head
  for (let i = 1; i < len && curr != null; i++) {
    if (d.value !== arr[i]) {
      expect(curr).not.toBeNull()
      expect(curr.value).toBe(arr[i])
      curr = curr.next
    }
  }


})

test("it should return valid string in calling toString", () => {
  const arr = [1, 2, 5, 8, 5, 6, 45, 86, -9]
  const l = LinkedList.fromArray(arr)

  let s = arr[0]
  for (let i = 1; i < arr.length; i++) {
    s += ` -> ${arr[i]}`
  }

  expect(l.toString()).toBe(s)
})

test("it should return find all values in linked list and return index", () => {
  const arr = [1, 2, 5, 8, 7, 6, 45, 86, -9]
  const l = LinkedList.fromArray(arr)

  for (let i = 0; i < arr.length; i++) {
    expect(l.find(arr[i])).toBe(i)
  }

  for (let i = 0; i < arr.length; i++) {
    expect(l.find(arr[i], false).value).toBe(arr[i])
  }

})

test("it should work with any object", () => {
  let arr = [12, 5, 23, 45, 35, 11, 20]
  const l = new LinkedList((a, b) => {
    if (a.age === b) return 0
    else return a.age - b
  })

  arr.forEach(a => l.append(new Person(a)))

  expect(l.toString()).toBe("age => 12 -> age => 5 -> age => 23 -> age => 45 -> age => 35 -> age => 11 -> age => 20")

  expect(l.find(12)).toBe(0)
  expect(l.find(13)).toBe(-1)

  for (let i = 0; i < arr.length; i++) {
    expect(l.find(arr[i])).toBe(i)
  }

  for (let i = 0; i < arr.length; i++) {
    expect(l.find(arr[i], false).value.age).toBe(arr[i])
  }
})

test("it should return value using get", () => {
  const arr = [1, 2, 5, 8, 5, 6, 45, 86, -9]
  const l = LinkedList.fromArray(arr)

  for (let i = 0; i < arr.length; i++) {
    expect(l.get(i).value).toBe(arr[i])
  }
})

test("it should traverse the list with given callback", () => {
  const arr = [1, 2, 5, 8, 5, 6, 45, 86, -9]
  const l = LinkedList.fromArray(arr)

  const res = []
  let times = 0

  l.traverse((curr, i, size, list) => {
    times++
    if (curr === list.head) res.push(4 * curr.value)
    else res.push(curr.value + i + Math.floor(size / 2))
  })

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) expect(res[i]).toBe(4 * arr[i])
    else expect(res[i]).toBe(arr[i] + i + Math.floor(arr.length / 2))
  }
})
