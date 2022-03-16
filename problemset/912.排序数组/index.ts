import { sortQuick } from "../../utils/SortQuick"

/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(h) h 是调用栈的深度
 * @return {*}
 * @param {number} nums
 */
export function sortArray(nums: number[]): number[] {
  sortQuick(nums)
  return nums
}