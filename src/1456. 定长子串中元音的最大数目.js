/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:11:14
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:03:26
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let res = 0, arr = [], max = 0, asset = new Set(['a', 'e', 'i', 'o', 'u'])
  // 滑动窗口
  for (let i = 0; i < s.length; i++) {
    let tmp
    // 窗口开始滑动
    if (arr.length >= k) {
      // 剔除第一个元素，如果第一个元素是原因，res--
      tmp = arr.shift()
      if (asset.has(tmp)) res--
    }
    // 值是元音，res++
    if (asset.has(s[i])) res++
    // 比较
    max = Math.max(res, max)
    arr.push(s[i])
  }
  return max
}