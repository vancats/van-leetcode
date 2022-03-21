/*
 * @Author: Lqf
 * @Date: 2022-02-26 00:29:22
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-26 00:29:23
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let ans = -1, min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let val = nums[i] - min
    if (val > 0) {
      ans = Math.max(ans, val)
    } else {
      min = nums[i]
    }
  }
  return ans
}