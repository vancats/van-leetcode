/*
 * @Author: Lqf
 * @Date: 2022-02-24 19:13:25
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 19:13:29
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let ans = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i]
  }
  return ans
}