/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} edges
 */
export function edgeScore(edges: number[]): number {
  const res = new Array(edges.length).fill(0)
  edges.forEach((item, index) => {
    res[item] += index
  })

  let max = 0
  for (let i = 1; i < res.length; i++) {
    if (res[i] > res[max])
      max = i
  }
  return max
}
