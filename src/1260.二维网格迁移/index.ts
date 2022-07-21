/**
 * @description: 时间复杂度 O(K + M) 空间复杂度 O(MN)
 * @return {*}
 * @param {number} grid
 * @param {number} k
 */
export function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length
  const n = grid[0].length
  const res: number[][] = []
  const arr: number[] = grid.flat()
  let ind = 0
  while (k--) arr.unshift(arr.pop()!)
  while (ind < m * n) res.push(arr.slice(ind, ind += n))
  return res
}
