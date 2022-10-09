/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function scoreOfParentheses(s: string): number {
  const stack: number[] = new Array(s.length).fill(0)
  let level = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      level++
      continue
    }
    level--
    if (s[i - 1] === '(') {
      stack[level] += 1
    }
    else {
      stack[level] += (stack[level + 1] * 2)
      stack[level + 1] = 0
    }
  }
  return stack[0]
}
