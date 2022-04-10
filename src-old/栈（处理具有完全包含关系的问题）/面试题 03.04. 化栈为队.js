/*
 * @Author: Lqf
 * @Date: 2022-02-17 15:59:05
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 16:05:35
 * @Description: 我添加了修改
 */
/**
 * Initialize your data structure here.
 */
const MyQueue = function() {
  this.stack1 = [], this.stack2 = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack2.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stack1.length === 0) {
    while (this.stack2.length)
      this.stack1.push(this.stack2.pop())
  }
  return this.stack1.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.stack1.length === 0) {
    while (this.stack2.length)
      this.stack1.push(this.stack2.pop())
  }
  return this.stack1[this.stack1.length - 1]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0 && this.stack2.length === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
