/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:16:27
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:24:50
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (arr.length > k) arr.shift()
    if (arr.includes(nums[i])) return true
    arr.push(nums[i])
  }
  return false
}