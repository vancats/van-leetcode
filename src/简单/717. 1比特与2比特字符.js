/*
 * @Author: Lqf
 * @Date: 2022-02-20 13:21:40
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-20 13:21:40
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  if (bits[bits.length - 1] === 1) return false
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 0 && i === bits.length - 1) return true
    if (bits[i] === 1) i++
  }
  return false
}