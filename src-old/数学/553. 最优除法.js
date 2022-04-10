/*
 * @Author: Lqf
 * @Date: 2022-02-27 14:29:24
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-27 14:29:24
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
const optimalDivision = function(nums) {
  return nums.length < 3 ? nums.join('/') : `${nums.shift()}/(${nums.join('/')})`
}
