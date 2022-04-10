/*
 * @Author: Lqf
 * @Date: 2022-03-09 10:49:41
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-09 10:49:45
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  const ans = []; const cur = []
  function dp(cnt) {
    if (cur.length === k) {
      ans.push(cur.slice())
      return
    }
    if (cnt > n)
      return
    cur.push(cnt)
    dp(cnt + 1)
    cur.pop()
    dp(cnt + 1)
  }
  dp(1)
  return ans
}
