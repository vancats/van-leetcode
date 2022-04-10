/*
 * @Author: Lqf
 * @Date: 2022-03-01 14:51:00
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-01 19:31:16
 * @Description: 我添加了修改
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
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
    if (this.heap[ind1][1] === this.heap[ind2][1])
      return this.heap[ind1][0] > this.heap[ind2][0]
    return this.heap[ind1][1] < this.heap[ind2][1]
  }

  swap(ind1, ind2) {
    [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
  }
}

const topKFrequent = function(words, k) {
  const heap = new Heap(false); const map = new Map()
  for (let i = 0; i < words.length; i++)
    map.set(words[i], (map.get(words[i]) || 0) + 1)

  for (const word of map) {
    heap.push(word)
    if (heap.heap.length > k)
      heap.pop()
  }
  heap.heap.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0])
        return 1
      return -1
    }
    return b[1] - a[1]
  })
  for (let i = 0; i < heap.heap.length; i++)
    heap.heap[i] = heap.heap[i][0]

  return heap.heap
}
