/*
 * @Author: Lqf
 * @Date: 2022-03-01 19:54:20
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-01 20:23:05
 * @Description: 我添加了修改
 */
class Heap {
  constructor(sign = true) {
    this.heap = []
    // true 是大顶堆，false 是小顶堆
    this.sign = sign
  }

  push(val) {
    this.heap.push(val)
    let ind = this.heap.length - 1
    // 向上整理
    while (ind > 0 && this.compare(ind, Math.floor((ind - 1) / 2))) {
      this.swap(ind, Math.floor((ind - 1) / 2))
      ind = Math.floor((ind - 1) / 2)
    }
    return this.heap.length
  }

  pop() {
    if (!this.heap.length)
      return console.log('full')
    // 堆顶元素出堆，尾部元素放到顶部
    const val = this.heap.shift()
    this.heap.length && this.heap.unshift(this.heap.pop())

    // 向下整理
    let ind = 0; let tempInd; let leftInd; let rightInd
    while (true) {
      tempInd = ind
      leftInd = ind * 2 + 1
      rightInd = ind * 2 + 2
      if (this.heap[leftInd] !== undefined && this.compare(leftInd, tempInd))
        tempInd = leftInd
      if (this.heap[rightInd] !== undefined && this.compare(rightInd, tempInd))
        tempInd = rightInd
      if (tempInd === ind)
        break
      this.swap(ind, tempInd)
      ind = tempInd
    }
    return val
  }

  compare(ind1, ind2) {
    return this.sign ? this.heap[ind1] > this.heap[ind2] : this.heap[ind1] < this.heap[ind2]
  }

  swap(ind1, ind2) {
    [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
  }
}

const MedianFinder = function() {
  // 两个堆对顶
  this.leftHeap = new Heap()
  this.rightHeap = new Heap(false)
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (num > this.leftHeap.heap[0])
    this.rightHeap.push(num)
  else
    this.leftHeap.push(num)

  while (this.rightHeap.heap.length > this.leftHeap.heap.length)
    this.leftHeap.push(this.rightHeap.pop())

  while (this.leftHeap.heap.length - this.rightHeap.heap.length > 1)
    this.rightHeap.push(this.leftHeap.pop())

  console.log(this.leftHeap, this.rightHeap)
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.leftHeap.heap.length > this.rightHeap.heap.length)
    return this.leftHeap.heap[0]
  return (this.leftHeap.heap[0] + this.rightHeap.heap[0]) / 2
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
