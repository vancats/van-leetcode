/*
 * @Author: Lqf
 * @Date: 2022-02-18 09:27:11
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-07 16:04:31
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let prefix = [0]
  // 获得前缀和
  for (let i = 0; i < hours.length; i++) {
    prefix.push(hours[i] > 8 ? prefix[i] + 1 : prefix[i] - 1)
  }

  let desc = [0]
  // 获取递减的序列
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] < prefix[desc[desc.length - 1]]) desc.push(i)
  }

  let res = 0
  // 从尾部开始往前计算长度
  for (let i = prefix.length - 1; i > 0; i--) {
    while (prefix[i] > prefix[desc[desc.length - 1]]) {
      res = Math.max(res, i - desc.pop())
    }
  }
  return res
}
