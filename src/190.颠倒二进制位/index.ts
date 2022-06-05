/**
 * @description: 时间复杂度 O(1) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function reverseBits(n: number): number {
  let res = 0
  for (let i = 0; i < 32 && n > 0; i++) {
    res |= (n & 1) << (31 - i)
    n >>>= 1
  }
  return res >>> 0
}
