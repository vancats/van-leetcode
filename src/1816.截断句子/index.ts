/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 * @param {number} k
 */
export function truncateSentence(s: string, k: number): string {
  let cnt = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') cnt++
    if (cnt === k) return s.slice(0, i)
  }
  return s
}
