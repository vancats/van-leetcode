/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 * @param {number} t
 */
export function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= k && i + j < nums.length; j++)
      if (Math.abs(nums[i] - nums[j + i]) <= t) return true
  }
  return false
}
