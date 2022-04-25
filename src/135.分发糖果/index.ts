/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} ratings
 */
export function candy(ratings: number[]): number {
  const n = ratings.length
  const res: number[] = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1])
      res[i] = res[i - 1] + 1
    else
      res[i] = 1
  }

  let temp = 1
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1])
      res[i] = Math.max(++temp, res[i])

    else
      temp = 1
  }
  return res.reduce((a, b) => a + b, 0)
}
