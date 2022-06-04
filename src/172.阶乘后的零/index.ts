/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function trailingZeroes(n: number): number {
  let cur = 5
  let res = 0
  while (cur <= n) {
    res += Math.floor(n / cur)
    cur *= 5
  }
  return res
}
