/*
 * @Author: Lqf
 * @Date: 2022-03-04 09:14:33
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-04 09:14:37
 * @Description: 还有栈的解法
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const subArrayRanges = function(nums) {
  let ans = 0
  for (let i = 0; i < nums.length - 1; i++) {
    let max = nums[i]; let min = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(nums[j], max)
      min = Math.min(nums[j], min)
      ans += max - min
    }
  }
  return ans
}
