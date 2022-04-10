/*
 * @Author: Lqf
 * @Date: 2022-02-24 16:21:05
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 16:21:05
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  return [...s].sort().join('') === [...t].sort().join('')
}
