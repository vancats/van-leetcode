/*
 * @Author: Lqf
 * @Date: 2022-02-24 16:08:45
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 16:08:46
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let n = Math.ceil(nums.length / 2)
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    if (map.get(nums[i]) >= n) return nums[i]
  }
}