/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {number} triangle
 */
export function minimumTotal(triangle: number[][]): number {
  const n = triangle.length
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++)
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
  }
  return triangle[0][0]
}
