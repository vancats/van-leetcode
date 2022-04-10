/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:17:31
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:59:04
 * @Description: 我添加了修改
 */

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
  // 递归结束条件
  if (k === 0)
    return 0
  if (k === 1 || k === 2)
    return 1
  const res = [1]; let tmp = 1
  while (tmp <= k) {
    res.push(tmp)
    tmp = res[res.length - 2] + res[res.length - 1]
  }
  // 贪心算法，每次都会放入小于 k 的最大值
  return findMinFibonacciNumbers(k - res[res.length - 1]) + 1
}
