/*
 * @Author: Lqf
 * @Date: 2022-03-01 13:04:34
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-01 13:05:50
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
/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function(k, nums) {
  this.k = k
  this.heap = new Heap(false)
  for (let i = 0; i < nums.length; i++) {
    this.heap.push(nums[i])
    if (this.heap.heap.length > this.k)
      this.heap.pop()
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.heap.push(val)
  if (this.heap.heap.length > this.k)
    this.heap.pop()

  return this.heap.heap[0]
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
