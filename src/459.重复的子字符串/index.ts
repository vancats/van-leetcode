/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function repeatedSubstringPattern(s: string): boolean {
  if (s.length < 2) return false
  for (let i = 0; i < s.length / 2; i++) {
    const len = i + 1
    let j = i + 1
    while (j < s.length) {
      if (s.slice(j, j + len) !== s.slice(0, len)) break
      console.log(j)
      j += len
    }
    if (j === s.length)
      return true
  }
  return false
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function repeatedSubstringPattern2(s: string): boolean {
  const n = s.length
  const next: number[] = new Array(n).fill(-1)
  for (let i = 1, j = -1; i < n; i++) {
    while (j !== -1 && s[i] !== s[j + 1]) j = next[j]
    if (s[i] === s[j + 1]) j++
    next[i] = j
  }
  /// 最后一个值的 next 必须存在并且长度可以取余
  return next[n - 1] !== -1 && n % (n - next[n - 1] - 1) === 0
}
