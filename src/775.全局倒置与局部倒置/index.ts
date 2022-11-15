/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function isIdealPermutation(nums: number[]): boolean {
  const n = nums.length
  let min = nums[n - 1]
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > min) return false
    min = Math.min(min, nums[i + 1])
  }
  return true
}
