/*
 * @Author: Lqf
 * @Date: 2022-02-24 19:56:02
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 19:56:05
 * @Description: 我添加了修改
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  const map = new Map(); let ans = 0
  for (let i = 0; i < jewels.length; i++)
    map.set(jewels[i], 0)

  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      ans++
    }
  }
  return ans
}
