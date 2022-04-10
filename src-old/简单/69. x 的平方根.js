/*
 * @Author: Lqf
 * @Date: 2022-02-24 10:22:40
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 10:22:44
 * @Description: 我添加了修改
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let left = 0; let right = x
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (mid * mid <= x) {
      if ((mid + 1) * (mid + 1) > x)
        return mid

      left = mid + 1
    }
    else {
      right = mid
    }
  }
  return left
}
