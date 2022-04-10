import { radixSort2 } from '../../utils/SortMode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function maximumGap(nums: number[]): number {
  nums = radixSort2(nums)
  let max = 0
  for (let i = 1; i < nums.length; i++)
    max = Math.max(nums[i] - nums[i - 1], max)

  return max
}
