/**
 * ! KMP 算法 寻找前缀最长回文串
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function shortestPalindrome(s: string): string {
  const ns = `${s}#${s.split('').reverse().join('')}`
  const next: number[] = new Array(ns.length)
  next[0] = -1
  for (let i = 1, j = -1; ns[i]; i++) {
    while (j !== -1 && ns[j + 1] !== ns[i]) j = next[j]
    if (ns[j + 1] === ns[i]) j++
    next[i] = j
  }
  return s.slice(next[ns.length - 1] + 1).split('').reverse().join('') + s
}
