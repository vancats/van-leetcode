/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} n
 */
export function numTilings(n: number): number {
  /// 0: 两块都没 1: 上没 2: 下没 3: 全没
  const arr: number[][] = new Array(n + 1).fill(0).map(() => new Array(4).fill(0))
  const mod = 1e9 + 7
  arr[0][3] = 1
  for (let i = 1; i <= n; i++) {
    arr[i][0] = arr[i - 1][3]
    arr[i][1] = (arr[i - 1][0] + arr[i - 1][2]) % mod
    arr[i][2] = (arr[i - 1][0] + arr[i - 1][1]) % mod
    arr[i][3] = (arr[i - 1][0] + arr[i - 1][1] + arr[i - 1][2] + arr[i - 1][3]) % mod
  }
  return arr[n][3]
}
