/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} citations
 */
export function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a)
  let n = 1, i = 0
  while (citations[i] >= n) n++, i++
  return n - 1
}
