/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} arr
 */
export function maxChunksToSorted(arr: number[]): number {
  let res = 0
  let max = 0
  arr.forEach((num, index) => {
    max = Math.max(max, num)
    if (max <= index) res++
  })
  return res
}
