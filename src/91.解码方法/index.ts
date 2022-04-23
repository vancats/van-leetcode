/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function numDecodings(s: string): number {
  const arr = new Array(s.length + 1).fill(0)
  arr[0] = 1
  for (let i = 1; i <= s.length; i++) {
    // 如果当前不是 0，那么值等于上一个值
    if (s[i - 1] !== '0')
      arr[i] += arr[i - 1]
    if (i > 1 && s[i - 2] !== '0' && (Number(s[i - 2]) * 10 + Number(s[i - 1]) < 27))
      // 如果上一个值不是 0 并且两个数字合并小于等于 26，再加一种可能
      arr[i] += arr[i - 2]
  }
  return arr[s.length]
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function numDecodings1(s: string): number {
  let a = 0; let b = 1; let c = 0
  for (let i = 0; i <= s.length; i++) {
    c = 0
    // 如果当前不是 0，那么值等于上一个值
    if (s[i] !== '0')
      c = b
    if (i >= 1 && s[i - 1] !== '0' && (Number(s[i - 1]) * 10 + Number(s[i]) < 27))
      // 如果上一个值不是 0 并且两个数字合并小于等于 26，再加一种可能
      c += a
    // 更新值
    a = b
    b = c
  }
  return c
}
