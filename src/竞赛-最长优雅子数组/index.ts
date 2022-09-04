/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function longestNiceSubarray(nums: number[]): number {
  let max = 0
  let queue: number[] = []
  nums.forEach(num => {
    let cnt = queue.length - 1
    while (cnt >= 0 && (queue[cnt] & num) === 0) cnt--
    queue = queue.slice(cnt + 1)
    queue.push(num)
    max = Math.max(max, queue.length)
  })
  return max
}
