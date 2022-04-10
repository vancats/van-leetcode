import { quickSort } from '../../utils/SortMode'

/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(h) h 是调用栈的深度
 * @return {*}
 * @param {number} nums
 */
export function sortArray(nums: number[]): number[] {
  quickSort(nums)
  return nums
}
