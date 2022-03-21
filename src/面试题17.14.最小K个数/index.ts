import { quickSort } from '../../utils/SortMode'

/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(h) h 是调用栈的深度
 * @return {*}
 * @param {number} arr
 */
export function smallestK(arr: number[], k: number): number[] {
  quickSort(arr)
  return arr.slice(0, k)
}