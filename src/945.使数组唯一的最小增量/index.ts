/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let cnt = 0
  const stack: number[] = []
  for (let i = 0; i < nums.length; i++) {
    while (nums[i + 1] === nums[i]) stack.push(nums[i++])
    let cur = nums[i] + 1
    while (nums[i + 1] !== cur && stack.length) {
      const val = stack.pop()!
      cnt += (cur - val)
      cur++
    }
  }
  return cnt
}
