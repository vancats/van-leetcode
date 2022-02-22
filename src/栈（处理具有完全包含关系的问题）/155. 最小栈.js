/*
 * @Author: Lqf
 * @Date: 2022-02-22 09:05:25
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-22 09:05:31
 * @Description: 我添加了修改
 */

var MinStack = function () {
  this.stack1 = []
  this.stack2 = []
}

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
  this.stack1.push(val)
  if (!this.stack2.length || this.stack2[this.stack2.length - 1] >= val) {
    this.stack2.push(val)
  }
}

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  const val = this.stack1.pop()
  if (val === this.stack2[this.stack2.length - 1]) {
    this.stack2.pop()
  }
}

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack1[this.stack1.length - 1]
}

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.stack2[this.stack2.length - 1]
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/