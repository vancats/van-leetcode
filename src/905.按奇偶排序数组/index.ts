/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function sortArrayByParity(nums: number[]): number[] {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast] % 2 === 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      slow++
    }
    fast++
  }
  return nums
}
