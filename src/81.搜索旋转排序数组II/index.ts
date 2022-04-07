/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 * @param {number} target
 */
export function search(nums: number[], target: number): boolean {
  let left = 0, right = nums.length - 1

  while (left <= right) {
    if (nums[left] === target || nums[right] === target) return true
    // 左右移动到第一个不等于该值的位置
    while (left < right && nums[left + 1] === nums[left]) left++
    while (left < right && nums[right - 1] === nums[right]) right--

    let mid = (left + right) >> 1
    if (nums[mid] === target) return true

    // 三个判断有两个可定位在前半段
    let cnt = 0
    if (target > nums[left]) cnt++
    if (target < nums[mid]) cnt++
    if (nums[left] >= nums[mid]) cnt++
    if (cnt > 1) right = mid - 1
    else left = mid + 1
  }
  return false
}
