/*
 * @Author: Lqf
 * @Date: 2022-02-17 16:53:16
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 16:53:17
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = []
  const map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i])
    }
    else {
      if (map.get(stack[stack.length - 1]) === s[i])
        stack.pop()
      else
        return false
    }
  }
  return stack.length === 0
}
