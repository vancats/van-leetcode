/*
 * @Author: Lqf
 * @Date: 2022-03-01 12:56:42
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-01 12:56:44
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} stones
 * @return {number}
 */

class Heap {
  constructor(sign = true) {
    this.heap = []
    // true 是大顶堆，false 是小顶堆
    this.sign = sign
  }
  push (val) {
    this.heap.push(val)
    let ind = this.heap.length - 1
    // 向上整理
    while (ind > 0 && this.compare(ind, Math.floor((ind - 1) / 2))) {
      this.swap(ind, Math.floor((ind - 1) / 2))
      ind = Math.floor((ind - 1) / 2)
    }
    return this.heap.length
  }

  pop () {
    if (!this.heap.length) return console.log('full')
    // 堆顶元素出堆，尾部元素放到顶部
    let val = this.heap.shift()
    this.heap.length && this.heap.unshift(this.heap.pop())

    // 向下整理
    let ind = 0, tempInd, leftInd, rightInd
    while (true) {
      tempInd = ind
      leftInd = ind * 2 + 1
      rightInd = ind * 2 + 2
      if (this.heap[leftInd] !== undefined && this.compare(leftInd, tempInd)) tempInd = leftInd
      if (this.heap[rightInd] !== undefined && this.compare(rightInd, tempInd)) tempInd = rightInd
      if (tempInd === ind) break
      this.swap(ind, tempInd)
      ind = tempInd
    }
    return val
  }

  compare (ind1, ind2) {
    return this.sign ? this.heap[ind1] > this.heap[ind2] : this.heap[ind1] < this.heap[ind2]
  }
  swap (ind1, ind2) {
    [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
  }
}

var lastStoneWeight = function (stones) {
  let heap = new Heap()
  for (let i = 0; i < stones.length; i++) {
    heap.push(stones[i])
  }
  console.log(heap.heap)
  while (heap.heap.length > 1) {
    let s1 = heap.pop(), s2 = heap.pop()
    if (s1 === s2) continue
    heap.push(Math.abs(s1 - s2))
  }
  return heap.heap[0] || 0
}