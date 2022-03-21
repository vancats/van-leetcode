/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @param {number} nums
 * @return {*}
 */
export function sortColors(nums: number[]): void {
  threePartition(nums, 0, nums.length - 1)
}

function threePartition(nums: number[], left: number, right: number) {
  let x = left - 1, y = right + 1, i = left
  while (i < y) {
    if (nums[i] === 1) {
      i++
    } else if (nums[i] === 0) {
      x++;
      [nums[i], nums[x]] = [nums[x], nums[i]]
      i++
    } else if (nums[i] === 2) {
      y--
      [nums[i], nums[y]] = [nums[y], nums[i]]
    }
  }
}
