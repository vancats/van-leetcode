/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:16:11
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:16:37
 * @Description: 我添加了修改
 */

/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  // 将人物属性根据攻击从大到小，防御从小到大排序
  properties.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
  })
  let maxDef = Number.MIN_SAFE_INTEGER, ans = 0
  for (const p of properties) {
    // 因为攻击一直递减，当攻击力小于最大值时只需存防御的最大值即可，而又因为攻击力相等时，防御从小到大排序，因此同攻击人物均可正确对比
    if (p[1] < maxDef) {
      ans++
    } else {
      maxDef = p[1]
    }
  }
  return ans
}