/*
 * @Author: Lqf
 * @Date: 2022-02-24 20:03:03
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 20:05:15
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
  const ans = [0]
  // n(奇数)的 1 的数目等于 n - 1 的 1 的数目 + 1，多了最末位的 1
  // n(偶数)的 1 的数目等于 n / 2 的 1 的数目
  for (let i = 1; i <= n; i++) {
    if (i % 2)
      ans.push(ans[i - 1] + 1)
    else
      ans.push(ans[i / 2])
  }
  return ans
}
