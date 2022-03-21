/*
 * @Author: Lqf
 * @Date: 2022-03-09 10:05:37
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-09 10:05:40
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [], arr = [], visited = {}
  function dp (cnt) {
    if (cnt === nums.length) {
      ans.push(arr.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1
        arr.push(nums[i])
        dp(cnt + 1)
        arr.pop()
        visited[nums[i]] = 0
      }
    }
  }
  dp(0, nums)
  return ans
}