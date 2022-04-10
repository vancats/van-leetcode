/*
 * @Author: Lqf
 * @Date: 2022-02-17 18:36:44
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 18:44:40
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function(s) {
  const ans = []; const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (stack.length)
        stack.pop()
      else ans.push(i)
    }
    if (s[i] === '(')
      stack.push(i)
  }
  while (stack.length)
    ans.push(stack.pop())

  ans.sort((a, b) => b - a)
  s = s.split('')
  for (let i = 0; i < ans.length; i++)
    s.splice(ans[i], 1)

  return s.join('')
}
