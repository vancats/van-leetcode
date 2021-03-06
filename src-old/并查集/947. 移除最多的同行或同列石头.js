/*
 * @Author: Lqf
 * @Date: 2022-03-07 17:28:56
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-07 17:29:00
 * @Description: 我添加了修改
 */

/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = function(stones) {
  const fa = new Array(stones.length); let ans = 0
  const xMap = new Map(); const yMap = new Map()
  for (let i = 0; i < stones.length; i++)
    fa[i] = i

  for (let i = 0; i < stones.length; i++) {
    const x = stones[i][0]; const y = stones[i][1]
    if (xMap.has(x))
      fa[get(i)] = get(xMap.get(x))

    if (yMap.has(y))
      fa[get(i)] = get(yMap.get(y))

    xMap.set(x, i)
    yMap.set(y, i)
  }
  for (let i = 0; i < stones.length; i++) {
    if (i === fa[i])
      ans++
  }
  return stones.length - ans
  function get(x) {
    return x === fa[x] ? x : (fa[x] = get(fa[x]))
  }
}
