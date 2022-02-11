/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:11:02
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:57:16
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let arr = [], res = []
  // 获取所有的 c 字符下标
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) arr.push(i)
  }
  for (let i = 0; i < s.length; i++) {
    // 当前下标大于 c 字符最大下标时
    if (i > arr[arr.length - 1]) {
      res.push(i - arr[arr.length - 1])
    }
    // 循环找出最近值
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= i) {
        if (j > 0 && arr[j - 1] < i) {
          res.push(Math.min(arr[j] - i, i - arr[j - 1]))
        } else {
          res.push(arr[j] - i)
        }
        break
      }
    }
  }
  return res
}