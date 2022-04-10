/*
 * @Author: Lqf
 * @Date: 2022-03-01 13:54:07
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-01 14:04:25
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
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
    return this.sign
      ? this.heap[ind1][0] + this.heap[ind1][1] > this.heap[ind2][0] + this.heap[ind2][1]
      : this.heap[ind1][0] + this.heap[ind1][0] < this.heap[ind2][0] + this.heap[ind2][1]
  }

  swap(ind1, ind2) {
    [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
  }
}

const kSmallestPairs = function(nums1, nums2, k) {
  const heap = new Heap()
  for (let i = 0; i < nums1.length; i++) {
    const val1 = nums1[i]
    for (let j = 0; j < nums2.length; j++) {
      const val2 = nums2[j]
      if (heap.heap.length < k) {
        heap.push([val1, val2])
        continue
      }
      if (heap.heap[0][0] + heap.heap[0][1] <= val1 + val2)
        break
      console.log(1)
      heap.push([val1, val2])
      heap.pop()
    }
  }
  return heap.heap
}
