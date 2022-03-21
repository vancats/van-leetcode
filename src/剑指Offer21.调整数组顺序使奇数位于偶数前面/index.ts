/**
 * @description: 时间复杂度 O(N) 空间复杂度O(1)
 * @param {number} nums
 * @return {*}
 */
export function exchange(nums: number[]): number[] {
  let left = 0, right = nums.length - 1
  while (left < right) {
    while (nums[left] % 2) left++
    while ((nums[right] % 2 === 0)) right--
    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
    }
  }
  return nums
}