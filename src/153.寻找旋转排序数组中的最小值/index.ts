/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (nums[left] < nums[right]) return nums[left]
    const mid = (left + right) >> 1
    if (nums[mid] >= nums[left])
      left = mid + 1

    else
      right = mid
  }
  return nums[left]
}
