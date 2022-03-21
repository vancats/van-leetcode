/*
 * @Author: Lqf
 * @Date: 2022-02-14 16:35:47
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-14 16:35:51
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @return {boolean}
 */

function analyze (num) {
  let ans = 0
  while (num) {
    ans += Math.pow(num % 10, 2)
    num = Math.floor(num / 10)
  }
  return ans
}

var isHappy = function (n) {
  let prev = analyze(n), cur = analyze(analyze(n))
  while (cur !== prev) {
    prev = analyze(prev)
    cur = analyze(analyze(cur))
  }
  return cur === 1
}