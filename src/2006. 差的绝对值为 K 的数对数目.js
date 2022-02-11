/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:18:50
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:18:04
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  // 使用 map 缓存之前的内容，后续有相同数值，直接加一即可
  let ans = 0, map = new Map()
  for (let i = 0; i < nums.length; i++) {
    ans += (map.get(nums[i] - k) || 0) + (map.get(nums[i] + k) || 0)
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  return ans
}