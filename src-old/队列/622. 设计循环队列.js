/*
 * @Author: Lqf
 * @Date: 2022-02-15 16:01:43
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 16:11:33
 * @Description: 我添加了修改
 */

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.ans = []
  this.k = k
}

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false
  this.ans.push(value)
  return true
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false
  this.ans.shift()
  return true
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1
  return this.ans[0]
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1
  return this.ans[this.ans.length - 1]
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.ans.length === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.ans.length === this.k
}
