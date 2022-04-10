/*
 * @Author: Lqf
 * @Date: 2022-02-24 19:31:20
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 19:31:24
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let ans = 0; let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] >= min)
      ans = Math.max((prices[i] - min), ans)
    else
      min = prices[i]
  }
  return ans
}
