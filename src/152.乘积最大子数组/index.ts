/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function maxProduct(nums: number[]): number {
  let max = nums[0]
  let minF = nums[0]
  let maxF = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // 计算以当前值为结尾的最大最小值
    const temp = Math.max(nums[i], nums[i] * minF, nums[i] * maxF)
    minF = Math.min(nums[i], nums[i] * minF, nums[i] * maxF)
    maxF = temp
    // 更新最大值
    max = Math.max(maxF, max)
  }
  return max
}
