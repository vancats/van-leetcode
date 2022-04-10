/*
 * @Author: Lqf
 * @Date: 2022-02-17 16:54:50
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 18:34:19
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  const stack = []; const arr = []
  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      arr.push(i)
      stack.push(s[i])
    }
    else if (s[i] === '(') {
      stack.push(s[i])
    }
    else if (stack.length === 1) {
      arr.push(i)
      stack.pop()
    }
    else {
      stack.pop()
    }
  }
  s = s.split('')
  for (let i = arr.length - 1; i >= 0; i--)
    s.splice(arr[i], 1)

  return s.join('')
}

var removeOuterParentheses = function(s) {
  let str = ''
  for (let i = 0, pre = 0, cnt = 0; i < s.length; i++) {
    if (s[i] === '(')
      cnt++
    else cnt--
    if (!cnt) {
      str += s.slice(pre + 1, i)
      pre = i + 1
    }
  }
  return str
}
