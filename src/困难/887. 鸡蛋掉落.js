/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:10:50
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:29:15
 * @Description: 我添加了修改
 */

/**
 * @param {number} k 鸡蛋
 * @param {number} n 楼层
 * @return {number}
 */
var superEggDrop = function (k, n) {
  const memo = new Map()
  return dp(k, n)
  function dp (k, n) {
    if (!memo.has(n * 100 + k)) {
      let ans = null
      if (k === 0 || n === 0) {
        ans = 0
      } else if (k === 1) {
        ans = n
      } else if (n === 1) {
        ans = 1
      } else {
        let low = 1, high = n, ans1, ans2
        while (low + 1 < high) {
          let x = (low + high) >> 1
          ans1 = dp(k - 1, x - 1)
          ans2 = dp(k, n - x)
          if (ans1 < ans2) low = x
          else if (ans1 > ans2) high = x
          else low = high = x
        }
        ans1 = Math.max(dp(k - 1, low - 1), dp(k, n - low))
        ans2 = Math.max(dp(k - 1, high - 1), dp(k, n - high))
        ans = Math.min(ans1, ans2) + 1
      }
      memo.set(n * 100 + k, ans)
    }
    return memo.get(n * 100 + k)
  }
}