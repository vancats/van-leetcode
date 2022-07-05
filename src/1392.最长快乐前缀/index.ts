/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function longestPrefix(s: string): string {
  const n = s.length
  const next: number[] = new Array(n).fill(-1)
  for (let i = 1, j = -1; i < n; i++) {
    while (j !== -1 && s[i] !== s[j + 1]) j = next[j]
    if (s[i] === s[j + 1]) j++
    next[i] = j
  }
  return s.slice(0, next[n - 1] + 1)
}
