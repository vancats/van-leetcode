/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param undefined
 */
export function findRightInterval(intervals: number[][]): number[] {
  if (intervals.length === 1)
    return [-1]
  const res: number[] = new Array(intervals.length).fill(-1)
  intervals.forEach((interval, index) => {
    interval[2] = index
  })

  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length; i++) {
    // for (let j = i; j < intervals.length; j++) {
    //   if (intervals[j][0] >= intervals[i][1]) {
    //     res[intervals[i][2]] = intervals[j][2]
    //     break
    //   }
    // }

    let left = i
    let right = intervals.length - 1
    let target = -1
    while (left <= right) {
      const mid = (left + right) >> 1
      if (intervals[mid][0] >= intervals[i][1]) {
        target = intervals[mid][2]
        right = mid - 1
      }
      else {
        left = mid + 1
      }
    }
    res[intervals[i][2]] = target
  }
  return res
}
