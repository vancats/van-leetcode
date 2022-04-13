/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} matrix
 * @param {number} target
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix[0].length
  const n = matrix.length
  let i = 0; let j = m - 1
  while (i < n && j >= 0) {
    if (matrix[i][j] === target) return true
    if (matrix[i][j] < target) i++
    else j--
  }
  return false
}
