/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function find132pattern(nums: number[]): boolean {
  const n = nums.length
  const stack: number[] = []
  const leftArr: number[] = new Array(n).fill(Number.MAX_VALUE)
  // 左边界最小值
  for (let i = 1; i < n; i++)
    leftArr[i] = Math.min(leftArr[i - 1], nums[i - 1])
  for (let i = n - 1; i >= 0; i--) {
    let val = nums[i]
    // 获取被弹出栈的最后一个值来比较
    while (stack.length && nums[i] > stack[stack.length - 1])
      val = stack.pop()!
    stack.push(nums[i])
    if (val < nums[i] && val > leftArr[i] && nums[i] > leftArr[i])
      return true
  }
  return false
}
