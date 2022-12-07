/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums1
 * @param {number} nums2
 */
export function minOperations(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length * 6 || nums2.length > nums1.length * 6) return -1
  const sum1 = nums1.reduce((p, v) => p + v, 0)
  const sum2 = nums2.reduce((p, v) => p + v, 0)
  if (sum1 < sum2)
    [nums1, nums2] = [nums2, nums1]

  let minus = Math.abs(sum1 - sum2)
  const rest = nums2.map(num => 6 - num).concat(nums1.map(num => num - 1)).sort((a, b) => a - b)
  let cnt = 0
  while (minus > 0) {
    minus -= rest.pop()!
    cnt++
  }
  return cnt
}
