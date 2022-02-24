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
var mySqrt = function (x) {
  let left = 0, right = x
  while (left < right) {
    let mid = left + ((right - left) >> 1)
    if (mid * mid <= x) {
      if ((mid + 1) * (mid + 1) > x) {
        return mid
      }
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}