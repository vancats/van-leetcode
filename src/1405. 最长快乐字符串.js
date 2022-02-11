/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:18:36
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:48:16
 * @Description: 我添加了修改
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let s = '', arr = [[a, 'a'], [b, 'b'], [c, 'c']]
  while (true) {
    // 每次只将剩余最多的放入，如果前面已经放入两个，就放入次多的
    arr.sort((a, b) => b[0] - a[0])
    if (arr[0][0] === 0) return s
    if (s[s.length - 1] === arr[0][1] && s[s.length - 2] === arr[0][1]) {
      if (arr[1][0] === 0) return s
      s += arr[1][1]
      arr[1][0] -= 1
    }
    s += arr[0][1]
    arr[0][0] -= 1
  }
}