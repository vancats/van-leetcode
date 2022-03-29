/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N) // 取决于 sort
 * @return {*}
 * @param {number} intervals
 */
export function merge(intervals: number[][]): number[][] {
  let res: number[][] = []
  let arr: number[][] = []

  // [[1,3], [2,6]] => [[1, 1], [3, -1], [2, 1], [6, -1]]
  for (let i = 0; i < intervals.length; i++) {
    arr.push([intervals[i][0], 1])
    arr.push([intervals[i][1], -1])
  }

  // [[1, 1], [3, -1], [3, 1], [2, -1]] => [[1, 1], [2, -1], [3, 1], [3, -1]]
  arr.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]
    return a[0] - b[0]
  })

  // 前缀和，这一段的加值等于 0 时，则区间闭合
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > 0) {
      let temp = arr[i][0]
      sum += arr[i][1]
      while (sum > 0) {
        i++
        sum += arr[i][1]
      }
      res.push([temp, arr[i][0]])
    }
  }
  return res
}
