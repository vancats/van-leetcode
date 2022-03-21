/*
 * @Author: Lqf
 * @Date: 2022-03-09 10:06:22
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-09 10:06:26
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let ans = [], cur = [], visited = new Array(nums.length).fill(0)
  nums.sort((a, b) => a - b)
  function dp (cnt) {
    if (cnt === nums.length) {
      ans.push(cur.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = 1
        cur.push(nums[i])
        dp(cnt + 1)
        cur.pop()
        visited[i] = 0
        while (nums[i] === nums[i + 1]) i++
      }
    }
  }
  dp(0)
  return ans
}