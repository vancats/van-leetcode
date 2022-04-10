/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} intervals
 */
export function removeCoveredIntervals(intervals: number[][]): number {
  // 数值按从小到大，相同时从大到小排序。此时当前坐标的右端点比前面最大值小，则可得左右端点都比前面的小，可以直接删除
  intervals.sort((a, b) => {
    if (a[0] === b[0])
      return b[1] - a[1]
    return a[0] - b[0]
  })
  let maxValue = -1; let num = 0
  intervals.forEach((item) => {
    if (maxValue >= item[1])
      num++
    else
      maxValue = item[1]
  })
  return intervals.length - num
}
