/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(h) h 是调用栈的深度
 * @return {*}
 * @param {number} nums
 */
export function sortQuick(nums: number[]): number[] {
  subSort(nums, 0, nums.length - 1)
  return nums
}

export function subSort(nums: number[], left: number, right: number): void {
  const index = partition(nums, left, right)
  if (left < index - 1) {
    subSort(nums, left, index - 1)
  }
  if (index < right) {
    subSort(nums, index, right)
  }
}


function partition(nums: number[], left: number, right: number): number {
  let i = left, j = right, pivotValue = nums[Math.floor(left + (right - left) / 2)]
  while (i <= j) {
    while (nums[i] < pivotValue) i++
    while (nums[j] > pivotValue) j--
    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
  return i
}