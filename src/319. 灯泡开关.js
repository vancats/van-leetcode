/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:11:33
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-14 09:43:54
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  // 对于第 k 个灯泡，它被切换的次数恰好就是 k 的约数个数。
  return Math.floor(Math.sqrt(n + 0.5))
}