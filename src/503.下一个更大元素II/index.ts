/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function nextGreaterElements(nums: number[]): number[] {
  const stack: number[] = []
  const res: number[] = []
  for (let i = nums.length - 1; i >= 0; i--) {
    while (nums[i] >= stack[stack.length - 1])
      stack.pop()
    stack.push(nums[i])
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    while (nums[i] >= stack[stack.length - 1])
      stack.pop()
    res.unshift(stack.length ? stack[stack.length - 1] : -1)
    stack.push(nums[i])
  }
  return res
}
