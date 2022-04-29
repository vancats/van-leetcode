/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 */
export function smallestRangeI(nums: number[], k: number): number {
  const ans = Math.max(...nums) - Math.min(...nums) - 2 * k
  return ans > 0 ? ans : 0
}
