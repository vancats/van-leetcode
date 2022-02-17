/*
 * @Author: Lqf
 * @Date: 2022-02-17 16:54:50
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 17:07:46
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [], arr = []
  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      arr.push(i)
      stack.push(s[i])
    } else if (s[i] === '(') {
      stack.push(s[i])
    } else if (stack.length === 1) {
      arr.push(i)
      stack.pop()
    } else {
      stack.pop()
    }
  }
  s = s.split('')
  for (let i = arr.length - 1; i >= 0; i--) {
    s.splice(arr[i], 1)
  }
  return s.join('')
}
