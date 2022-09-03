/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} pairs
 */
export function findLongestChain(pairs: number[][]): number {
  pairs.sort((a: number[], b: number[]) => a[1] - b[1])
  let end = pairs[0][1]
  let cnt = 1
  // 永远取右边界，就可以给后面的值提供最大的范围
  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i][0] <= end) continue
    cnt++
    end = pairs[i][1]
  }
  return cnt
}
