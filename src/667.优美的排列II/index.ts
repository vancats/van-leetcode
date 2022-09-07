/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} n
 * @param {number} k
 */
export function constructArray(n: number, k: number): number[] {
  const res: number[] = []
  let i = 0
  while (++i <= n) {
    if (res.includes(i)) continue
    res.push(i)
    if (k > 0) {
      res.push(i + k)
      k -= 2
    }
  }
  return res
}
