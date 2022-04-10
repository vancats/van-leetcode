/*
 * @Author: Lqf
 * @Date: 2022-02-15 16:14:01
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 16:19:05
 * @Description: 我添加了修改
 */

/**
 * @param {number} k
 */
const MyCircularDeque = function(k) {
  this.k = k
  this.ans = []
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull())
    return false
  this.ans.unshift(value)
  return true
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull())
    return false
  this.ans.push(value)
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty())
    return false
  this.ans.shift()
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty())
    return false
  this.ans.pop()
  return true
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty())
    return -1
  return this.ans[0]
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty())
    return -1
  return this.ans[this.ans.length - 1]
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.ans.length === 0
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.ans.length === this.k
}
