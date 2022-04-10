/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:18:28
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:40:46
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
  const ans = []; const res = []
  for (let i = 0; i < nums.length; i++) {
    const ind = ans.indexOf(nums[i])
    if (ind > -1) {
      res.push(nums[i])
      ans.splice(ind, 1)
    }
    else if (!res.includes(nums[i])) {
      ans.push(nums[i])
    }
  }
  return ans.reduce((prev, cur) => prev + cur, 0)
}
