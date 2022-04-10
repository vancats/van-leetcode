/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} properties
 */
export function numberOfWeakCharacters(properties: number[][]): number {
  // 将人物属性根据攻击从大到小，防御从小到大排序
  properties.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
  })
  let maxDef = Number.MIN_SAFE_INTEGER; let ans = 0
  for (const p of properties) {
    // 因为攻击一直递减，当攻击力小于最大值时只需存防御的最大值即可，而又因为攻击力相等时，防御从小到大排序，因此同攻击人物均可正确对比
    if (p[1] < maxDef)
      ans++
    else
      maxDef = p[1]
  }
  return ans
}
