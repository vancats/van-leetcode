/**
 * @description: 时间复杂度 O(N^3) 空间复杂度 O(1)
 * @return {*}
 * @param undefined
 */
export function largestTriangleArea(points: number[][]): number {
  const n = points.length
  let res = 0
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 1; j++) {
      for (let k = 0; k < n; k++)
        res = Math.max(res, getArea(points[i][0], points[i][1], points[j][0], points[j][1], points[k][0], points[k][1]))
    }
  }
  return res
}

function getArea(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
  return 0.5 * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2)
}
