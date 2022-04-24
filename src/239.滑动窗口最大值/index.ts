/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue: number[] = []
  const ans: number[] = []
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) queue.pop()
    queue.push(i)
    if (i - queue[0] === k) queue.shift()
    if (i < k - 1) continue
    ans.push(nums[queue[0]])
  }

  return ans
}
