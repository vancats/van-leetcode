/*
 * @Author: Lqf
 * @Date: 2022-02-24 15:58:52
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 15:59:32
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0, fast = 0
  while (fast < nums.length) {
    if (nums[fast]) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    fast++
  }
  return void 0
}