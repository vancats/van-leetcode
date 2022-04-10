/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:16:41
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:37:54
 * @Description: 我添加了修改
 */

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num, ans = 0) {
  if (num === 0)
    return ans
  if (num % 2 === 1)
    return numberOfSteps(num - 1) + 1
  if (num % 2 === 0)
    return numberOfSteps(num / 2) + 1
}
