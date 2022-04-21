/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function maxRotateFunction(nums: number[]): number {
  const n = nums.length
  let max = 0
  let temp = 0
  for (let i = 0; i < n; i++)
    temp += (i * nums[i])

  const sum = nums.reduce((a, b) => a + b, 0)
  max = temp
  for (let i = n - 1; i >= 0; i--) {
    temp += sum
    temp -= (n * nums[i])
    max = Math.max(max, temp)
  }
  return max
}
