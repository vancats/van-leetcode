/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(NlgN) 待定
 * @return {*}
 * @param {number} nums
 */
export function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = []
  const temp: number[] = []
  dfs(temp, 0)
  return res

  function dfs(temp: number[], index: number) {
    if (temp.length > 1)
      res.push(temp.slice())
    const map = new Map()
    for (let i = index; i < nums.length; i++) {
      // 去重操作
      if (map.has(nums[i]))
        continue
      if (temp.length < 1 || temp[temp.length - 1] <= nums[i]) {
        temp.push(nums[i])
        map.set(nums[i], 1)
        dfs(temp, i + 1)
        temp.pop()
      }
    }
  }
}
