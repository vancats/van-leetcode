/*
 * @Author: Lqf
 * @Date: 2022-03-08 01:00:15
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-08 01:00:16
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  let ans = [], preSum = new Array(s.length).fill(0)
  for (let i = 0, sum = 0; i < s.length; i++) {
    // 求出当前下标前缀带有 * 的数目
    if (s[i] === '*') sum++
    preSum[i] = sum
  }
  let leftArr = new Array(s.length).fill(0)
  // 等同于向下取整
  for (let i = 0, left = -1; i < s.length; i++) {
    if (s[i] === '|') left = i
    leftArr[i] = left
  }
  let rightArr = new Array(s.length).fill(0)
  // 等同于向上取整
  for (let i = s.length - 1, right = -1; i >= 0; i--) {
    if (s[i] === '|') right = i
    rightArr[i] = right
  }

  for (let i = 0; i < queries.length; i++) {
    // 区间需要向中间取整，left 向上取整，right 向下取整
    let left = rightArr[queries[i][0]], right = leftArr[queries[i][1]]
    // 如果 left 向上取整已经为 -1，即 left 右边只有 *，不可取；right 同；left 必须小于 right
    if (left === -1 || right === -1 || left >= right) ans.push(0)
    else ans.push(preSum[right] - preSum[left])
  }
  return ans
}