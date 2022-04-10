/*
 * @Author: Lqf
 * @Date: 2022-02-24 10:15:06
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 10:15:06
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let len = digits.length - 1
  digits[len] = digits[len] + 1
  while (digits[len] > 9) {
    digits[len] = 0
    if (len > 0)
      digits[len - 1] = digits[len - 1] + 1
    else
      digits.unshift(1)

    len--
  }
  return digits
}
