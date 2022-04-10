/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function trailingZeroes(n: number): number {
  let n5 = 0
  for (let i = 2; i <= n; i++) {
    let temp = i
    while (!(temp % 5)) {
      n5++
      temp /= 5
    }
  }
  return n5
}
