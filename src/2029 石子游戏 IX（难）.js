/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:09:58
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:28:55
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  let cnt0 = 0, cnt1 = 0, cnt2 = 0
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] % 3 === 0) {
      cnt0++
    } else if (stones[i] % 3 === 1) {
      cnt1++
    } else {
      cnt2++
    }
  }
  if (cnt0 % 2 === 0) {
    return cnt1 > 0 && cnt2 > 0
  }
  return cnt1 - cnt2 > 2 || cnt2 - cnt1 > 2
}