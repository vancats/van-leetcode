/*
 * @Author: Lqf
 * @Date: 2022-02-17 16:32:57
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 16:37:47
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let stack1 = [], stack2 = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      if (stack1.length) {
        stack1.pop()
      }
    } else {
      stack1.push(s[i])
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '#') {
      if (stack2.length) {
        stack2.pop()
      }
    } else {
      stack2.push(t[i])
    }
  }
  return stack1.join('') === stack2.join('')
}
