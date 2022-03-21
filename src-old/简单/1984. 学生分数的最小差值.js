/*
 * @Author: Lqf
 * @Date: 2022-02-11 11:30:46
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:36:18
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0
  nums.sort((a, b) => a - b)
  let res = [], min = Number.MAX_VALUE
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i])
    if (res.length >= k) {
      min = Math.min(min, res[res.length - 1] - res[0])
      res.shift()
    }
  }
  return min
}