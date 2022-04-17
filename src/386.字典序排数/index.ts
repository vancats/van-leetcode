/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function lexicalOrder(n: number): number[] {
  return new Array(n).fill(0).map((item, index) => index + 1).sort()
}
