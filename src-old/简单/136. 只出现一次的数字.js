/*
 * @Author: Lqf
 * @Date: 2022-02-24 10:36:48
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 10:36:51
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    // 位运算
    ans ^= nums[i]
  }
  return ans
}