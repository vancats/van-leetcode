/*
 * @Author: Lqf
 * @Date: 2022-02-24 16:23:26
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 16:23:27
 * @Description: 我添加了修改
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0, right = s.length - 1
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
  return void 0
}