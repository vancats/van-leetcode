/*
 * @Author: Lqf
 * @Date: 2022-02-17 20:23:13
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-18 09:23:04
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
const exclusiveTime = function(n, logs) {
  const stack = []; const ans = new Array(n).fill(0)
  for (let i = 0; i < logs.length; i++) {
    const arr = logs[i].split(':')
    if (arr[1] === 'start') {
      if (stack.length)
        ans[stack[stack.length - 1][0]] += arr[2] - stack[stack.length - 1][2]

      stack.push(arr)
    }
    else {
      ans[arr[0]] += arr[2] - stack.pop()[2] + 1
      if (stack.length)
        stack[stack.length - 1][2] = Number(arr[2]) + 1
    }
  }
  return ans
}
