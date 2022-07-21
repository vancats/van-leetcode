/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function maxScoreIndices(nums: number[]): number[] {
  let res: number[] = [0]
  let max = 0
  let cur = 0
  nums.forEach((num, index) => {
    if (num) cur--
    else cur++
    if (cur === max) res.push(index + 1)
    if (cur > max) {
      res = [index + 1]
      max = cur
    }
  })
  return res
}
