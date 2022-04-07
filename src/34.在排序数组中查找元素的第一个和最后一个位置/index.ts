/**
 * @description: 时间复杂度 O(lgN) O(1)
 * @return {*}
 * @param {number} nums
 * @param {number} target
 */
export function searchRange(nums: number[], target: number): number[] {

  let left = binarySearch(nums, target, 0, nums.length - 1)
  if (nums[left] !== target) return [-1, -1]
  let right = binarySearch(nums, target + 1, 0, nums.length - 1)
  return [left, right - 1]
}

function binarySearch(nums: number[], target: number, left: number, right: number): number {
  while (right - left > 3) {
    let mid = (left + right) >> 1
    if (nums[mid] >= target) right = mid
    else left = mid + 1
  }
  for (let i = left; i <= right; i++) {
    if (nums[i] >= target) return i
  }
  return nums.length
}
