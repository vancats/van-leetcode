/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1) 不计算输出数组
 * @return {*}
 * @param {number} nums
 */
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length
  const nums1: number[] = new Array(n)
  nums1[0] = 1
  for (let i = 1; i < n; i++)
    nums1[i] = nums1[i - 1] * nums[i - 1]

  let sum = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    nums1[i] *= sum
    sum *= nums[i]
  }
  return nums1
}
