/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 * @param {number} left
 * @param {number} right
 */
export function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
  let res = 0
  let prev = -1
  let next = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > right) {
      prev = i
      next = -1
      continue
    }
    if (nums[i] >= left)
      next = i

    if (next > -1)
      res += (next - prev)
  }
  return res
}
