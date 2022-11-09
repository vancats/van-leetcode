/**
 * @description: 时间复杂度 O(N^3) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} n
 * @param {number} mines
 */
export function orderOfLargestPlusSign(n: number, mines: number[][]): number {
  const arr: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(1))
  mines.forEach(mine => {
    const [x, y] = mine
    arr[x][y] = 0
  })
  let max = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j]) {
        let cnt = 1
        while (i - cnt >= 0 && i + cnt < n && arr[i][j - cnt] && arr[i][j + cnt] && arr[i - cnt][j] && arr[i + cnt][j]) cnt++
        max = Math.max(max, cnt)
      }
    }
  }
  return max
}
