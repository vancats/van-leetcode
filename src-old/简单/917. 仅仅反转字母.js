/*
 * @Author: Lqf
 * @Date: 2022-02-23 09:27:39
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 09:27:44
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = function(s) {
  let left = 0; let right = s.length - 1
  s = [...s]
  while (left < right) {
    while (!/[a-zA-Z]/.test(s[left])) {
      left++
    }
    while (!/[a-zA-Z]/.test(s[right])) {
      right--
    }
    if (left >= right)
      break
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
  return s.join('')
}
