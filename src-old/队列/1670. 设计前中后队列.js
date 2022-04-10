/*
 * @Author: Lqf
 * @Date: 2022-02-15 16:58:37
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 16:58:40
 * @Description: 我添加了修改
 */

function Node(val, next) {
  this.val = val !== undefined ? val : null
  this.next = next !== undefined ? next : null
}

const FrontMiddleBackQueue = function() {
  this.node = new Node(-1)
  this.size = 0
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.node.next = new Node(val, this.node.next)
  this.size++
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  let num = this.size >> 1
  let temp = this.node
  while (num--)
    temp = temp.next

  temp.next = new Node(val, temp.next)
  this.size++
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  let temp = this.node
  while (temp.next)
    temp = temp.next

  temp.next = new Node(val)
  this.size++
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  if (!this.node.next)
    return -1
  const val = this.node.next.val
  this.node.next = this.node.next.next
  this.size--
  return val
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if (!this.size)
    return -1
  let num = (this.size - 1) >> 1; let temp = this.node
  while (num--)
    temp = temp.next

  const val = temp.next.val
  temp.next = temp.next.next
  this.size--
  return val
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  if (!this.size)
    return -1
  let num = this.size; let temp = this.node
  while (--num)
    temp = temp.next

  const val = temp.next.val
  temp.next = null
  this.size--
  return val
}
