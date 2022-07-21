/**
 * @description: 时间复杂度 O(M) 空间复杂度 O(1)
 * @return {*}
 * @param {number} original
 * @param {number} m
 * @param {number} n
 */
export function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (m * n !== original.length) return []
  const res: number[][] = []
  let ind = 0
  while (ind < m * n) res.push(original.slice(ind, ind += n))
  return res
}
