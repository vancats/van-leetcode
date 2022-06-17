/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function rob(nums: number[]): number {
  let prev = 0
  let cur = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const temp = Math.max(prev, cur)
    cur = prev + nums[i]
    prev = temp
  }
  return Math.max(prev, cur)
}
