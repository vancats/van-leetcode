/**
 * @description: 待定
 * @return {*}
 * @param {number} nums
 */
export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((p, v) => p + v)
  const max = Math.max(...nums)
  if (max > sum / 2) return false
  if (sum % 2) return false
  let dp: Set<number> = new Set()
  for (let i = 0; i < nums.length; i++) {
    const newDp: Set<number> = new Set()
    newDp.add(nums[i])
    dp.forEach(v => {
      newDp.add(v)
      newDp.add(v + nums[i])
    })
    if (dp.has(sum / 2)) return true
    dp = newDp
  }
  return false
}

/**
 * @description: 时间复杂度 O(N * target) 空间复杂度 O(target)
 * @return {*}
 * @param {number} nums
 */
export function canPartition2(nums: number[]): boolean {
  const target = nums.reduce((p, v) => p + v) / 2
  const max = Math.max(...nums)
  if (max > target) return false
  if (target !== Math.floor(target)) return false

  const dp: boolean[] = new Array(target + 1).fill(false)
  dp[0] = true
  for (const num of nums) {
    for (let j = target; j >= num; j--)
      dp[j] = dp[j] || dp[j - num]
  }
  return dp[target]
}
