/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function myAtoi(s: string): number {
  s = s.trim()
  let flag = 1
  let i = 0
  switch (s[0]) {
    case '-': flag = -1
    // eslint-disable-next-line no-fallthrough
    case '+': i++
  }
  const max = Math.pow(2, 31) - 1
  const min = Math.pow(2, 31) * -1
  let ans = 0
  for (; i < s.length; i++) {
    if (s[i].charCodeAt(0) < 48 || s[i].charCodeAt(0) > 57)
      return ans * flag
    if (ans * 10 + Number(s[i]) > max) {
      if (flag > 0) return max
      else return min
    }
    ans = ans * 10 + Number(s[i])
  }
  return ans * flag
}
