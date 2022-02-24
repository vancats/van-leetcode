/*
 * @Author: Lqf
 * @Date: 2022-02-24 20:01:23
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 20:01:26
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0], tmp = 0
  for (let i = 0; i < nums.length; i++) {
    if (tmp > 0) {
      tmp += nums[i]
    } else {
      tmp = nums[i]
    }
    ans = Math.max(ans, tmp)
  }
  return ans
}