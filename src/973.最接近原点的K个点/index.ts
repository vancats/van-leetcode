/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} points
 * @param {number} k
 */
export function kClosest(points: number[][], k: number): number[][] {
  points.sort((a, b) => {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]) - Math.sqrt(b[0] * b[0] + b[1] * b[1])
  })
  return points.slice(0, k)
}
