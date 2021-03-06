import { Heap } from './../../utils/Heap'

/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 */
export function rangeSum(nums: number[], n: number, left: number, right: number): number {
  const heap = new Heap((a, b) => a[2] < b[2]); let ans = 0; const mod = 1000000007

  for (let i = 0; i < n; i++)
    heap.push([i, i, nums[i]])

  // 采用区间和的方式，动态添加，使用优先队列进行多路合并
  for (let i = 1; i <= right; i++) {
    const cur = heap.pop()
    if (i >= left)
      ans = (ans + cur[2]) % mod
    if (cur[1] < n - 1)
      heap.push([i, cur[1] + 1, (cur[2] + nums[cur[1] + 1]) % mod])
  }
  return ans
}
