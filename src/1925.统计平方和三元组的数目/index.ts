/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function countTriples(n: number): number {
  let res = 0
  for (let i = 1; i <= n - 2; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      const sum = Math.sqrt(i * i + j * j)
      if (sum === Math.floor(sum) && sum <= n) res++
    }
  }
  return res * 2
}
