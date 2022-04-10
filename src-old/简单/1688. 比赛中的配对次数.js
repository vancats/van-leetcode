/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:13:13
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:33:56
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function(n) {
  let ans = 0
  while (n !== 1) {
    ans += Math.floor(n / 2)
    n = (n + 1) >> 1
  }
  return ans
}
