/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 */
export function shortestSubarray(nums: number[], k: number): number {
  const n = nums.length
  let min = Infinity
  const arr: number[] = new Array(n + 1).fill(0)
  // 初始化前缀和数组
  for (let i = 1; i <= n; i++)
    arr[i] = arr[i - 1] + nums[i - 1]

  const queue: number[] = []
  // 我的操作是，在每次循环的最后压入值，循环的起始位置判断值，所以需要 n + 1 来判断最后一个数，由于此时 push 后不进行操作，不影响结果
  for (let i = 0; i <= n + 1; i++) {
    // 如果最后一个值减去第二个值的差大于 k，那么第一个值是没必要的
    while (arr[queue[queue.length - 1]] - arr[queue[1]] >= k)
      queue.shift()

    // 如果此时栈首尾得出的 arr 差值大于 k，更新结果
    if (arr[queue[queue.length - 1]] - arr[queue[0]] >= k)
      min = Math.min(min, queue[queue.length - 1] - queue[0])

    // 当前推入的值如果比栈尾值小，弹出
    while (arr[i] <= arr[queue[queue.length - 1]])
      queue.pop()

    queue.push(i)
  }
  return min === Infinity ? -1 : min
}
