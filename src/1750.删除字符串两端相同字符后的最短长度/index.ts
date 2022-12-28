/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function minimumLength(s: string): number {
  let i = 0
  let j = s.length - 1
  while (i < j && s[i] === s[j]) {
    const cur = s[i]
    while (s[i] === cur) i++
    while (s[j] === cur) j--
    if (i > j) return 0
  }
  return j - i + 1
}
