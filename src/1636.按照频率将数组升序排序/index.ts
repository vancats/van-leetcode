/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} nums
 */
export function frequencySort(nums: number[]): number[] {
  const arr: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    const index = arr.findIndex(item => item[0] === nums[i])
    if (index > -1)
      arr[index][1]++

    else
      arr.push([nums[i], 1])
  }
  arr.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0]
    return a[1] - b[1]
  })
  const res: number[] = []
  arr.forEach(item => {
    for (let i = 0; i < item[1]; i++)
      res.push(item[0])
  })
  return res
}
