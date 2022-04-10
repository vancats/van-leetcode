/**
 * @description: 时间复杂度 O(N + M) 空间复杂度 O(N)
 * @return {*}
 * @param {number} rolls
 * @param {number} mean
 * @param {number} n
 */
export function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const m = rolls.length; const arr: number[] = []
  let sum = mean * (n + m)
  for (let i = 0; i < m; i++)
    sum -= rolls[i]

  for (let i = 0; i < n; i++) {
    const temp = Math.floor(sum / (n - i))
    if (temp > 6 || temp < 1)
      return []
    arr.push(temp)
    sum -= temp
  }
  return arr
}
