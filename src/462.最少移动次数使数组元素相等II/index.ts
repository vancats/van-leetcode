/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param undefined
 */
export function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let cnt = 0
  const x = nums[Math.floor(nums.length / 2)]
  for (let i = 0; i < nums.length; i++)
    cnt += Math.abs(nums[i] - x)
  return cnt
}
