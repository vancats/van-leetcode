/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function lengthOfLongestSubstring(s: string): number {
  const queue: string[] = []
  let cnt = 0
  for (let i = 0; i < s.length; i++) {
    while (queue.includes(s[i]))
      queue.shift()

    queue.push(s[i])
    cnt = Math.max(cnt, queue.length)
  }
  return cnt
}
