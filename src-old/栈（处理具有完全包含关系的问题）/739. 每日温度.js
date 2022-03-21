/*
 * @Author: Lqf
 * @Date: 2022-02-22 09:14:12
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-22 09:14:18
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let ans = new Array(temperatures.length).fill(0), stack = []
  for (let i = 0; i < temperatures.length; i++) {
    while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let val = stack.pop()
      ans[val] = i - val
    }
    stack.push(i)
  }
  return ans
}