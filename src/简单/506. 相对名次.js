/*
 * @Author: Lqf
 * @Date: 2022-02-19 00:27:28
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-19 00:39:09
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let tmp = score.slice(), ans = new Array(score.length).fill(0)
  score = score.sort((a, b) => b - a)
  for (let i = 0; i < score.length; i++) {
    let ind = tmp.indexOf(score[i])
    if (i === 0) ans[ind] = 'Gold Medal'
    else if (i === 1) ans[ind] = 'Silver Medal'
    else if (i === 2) ans[ind] = 'Bronze Medal'
    else ans[ind] = i + 1 + ""
  }
  return ans
}