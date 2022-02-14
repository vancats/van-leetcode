/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:22:24
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:59:27
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let ans = [], map = new Map()
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (gcd(i, j) === 1) {
        ans.push(j + '/' + i)
      }
    }
  }
  return ans
}

// gcd算法，可以算出两数最大公约数
function gcd (a, b) {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}