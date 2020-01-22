class SegmentTree {
  constructor(operation, operationFallBack, n = null, inputArray = null) {
    this.operation = operation
    this.operationFallback = operationFallBack

    if(n == null && inputArray == null) {
      throw "Size and Input array can not be null at same time"
    }
    else if(n == null) {
      this.inputSize = inputArray.length
      this.inputArray = inputArray
    }
    else this.inputSize = n;

    if(Math.log2(this.inputSize) % 1 === 0) this.size = 2 * this.inputSize;
    else this.size = 1 << (this.inputSize.toString(2).length + 1);

    this.auxSize = this.size - this.inputSize

    this.tree = new Array(this.size).fill(operationFallBack)

    if(n == null) this.build()
  }

  build() {
    for (let i = 0; i < this.inputSize; i ++) {
      this.update(i, this.inputArray[i])
    }
  }

  update(index, value) {
    if(index >= this.inputSize) return
    let ind = index + this.auxSize
    this.tree[ind] = value
    while(ind > 1) {
      let parent_i = ind >> 1
      this.tree[parent_i] = this.operation(this.tree[ind], this.tree[ind ^ 1])
      ind = parent_i
    }
  }

  query(left, right) {
    if(left < 0) left = 0
    if(right >= this.inputSize) right = this.inputSize - 1
    let l = left + this.auxSize, r = right + this.auxSize
    let res = this.operationFallback
    while(l <= r) {
      if((l & 1) === 1) res = this.operation(res, this.tree[l])
      if((r & 1) !== 1) res = this.operation(res, this.tree[r])

      l = (l + 1) >> 1
      r = (r - 1) >> 1
    }

    return res
  }
}

module.exports = SegmentTree
