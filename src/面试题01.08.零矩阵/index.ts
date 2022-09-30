/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {number} matrix
 */
export function setZeroes(matrix: number[][]): void {
  const m = matrix.length
  const n = matrix[0].length
  const row: Set<number> = new Set()
  const col: Set<number> = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!matrix[i][j]) {
        row.add(i)
        col.add(j)
      }
    }
  }
  row.forEach(item => {
    for (let i = 0; i < n; i++)
      matrix[item][i] = 0
  })

  col.forEach(item => {
    for (let i = 0; i < m; i++)
      matrix[i][item] = 0
  })
}
