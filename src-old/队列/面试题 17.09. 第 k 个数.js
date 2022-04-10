/*
 * @Author: Lqf
 * @Date: 2022-02-15 17:09:26
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 17:24:13
 * @Description: 我添加了修改
 */

// 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。
// 输入: k = 5   输出: 9

/**
 * @param {number} k
 * @return {number}
 */
const getKthMagicNumber = function(k) {
  let n3 = n5 = n7 = 0; const ans = [1]
  while (ans.length < k) {
    const s3 = ans[n3] * 3
    const s5 = ans[n5] * 5
    const s7 = ans[n7] * 7
    const min = Math.min(s3, s5, s7)
    if (s3 === min)
      n3++
    if (s5 === min)
      n5++
    if (s7 === min)
      n7++
    ans.push(min)
  }
  return ans.pop()
}
