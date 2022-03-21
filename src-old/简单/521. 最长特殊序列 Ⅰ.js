/*
 * @Author: Lqf
 * @Date: 2022-03-05 01:11:38
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-05 01:11:39
 * @Description: 我添加了修改
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  return a !== b ? Math.max(a.length, b.length) : -1
}