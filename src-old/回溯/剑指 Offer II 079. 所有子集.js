/*
 * @Author: Lqf
 * @Date: 2022-03-09 10:37:59
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-09 10:38:02
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const ans = []; const cur = []
  function dp(cnt) {
    if (cnt === nums.length) {
      ans.push(cur.slice())
      return
    }
    cur.push(nums[cnt])
    dp(cnt + 1)
    cur.pop()
    dp(cnt + 1)
  }
  dp(0)
  return ans
}
