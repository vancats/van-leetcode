/*
 * @Author: Lqf
 * @Date: 2022-03-02 09:21:31
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-02 09:21:32
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function(n) {
  if (n === 0)
    return false
  while (n % 5 === 0) {
    console.log(n)
    n = n / 5
  }
  while (n % 3 === 0)
    n = n / 3

  while (n % 2 === 0)
    n = n / 2

  return n === 1
}
