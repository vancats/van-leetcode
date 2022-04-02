/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 * @param {number} target
 */
export function search(nums: number[], target: number, left: number = 0, right: number = nums.length - 1): number {

  if (left > right) return -1
  let mid = (left + right) >> 1
  if (nums[mid] === target) return mid
  let cnt = 0
  if (target >= nums[left]) cnt++
  if (target < nums[mid]) cnt++
  if (nums[left] > nums[mid]) cnt++
  if (cnt > 1) {
    return search(nums, target, left, mid - 1)
  }
  return search(nums, target, mid + 1, right)
}