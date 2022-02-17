/*
 * @Author: Lqf
 * @Date: 2022-02-17 16:40:25
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 16:45:27
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = []
  for (const item of pushed) {
    stack.push(item)
    while (stack.length > 0 && stack[stack.length - 1] === popped[0]) {
      stack.pop()
      popped.shift()
    }
  }
  return stack.length === 0
}
