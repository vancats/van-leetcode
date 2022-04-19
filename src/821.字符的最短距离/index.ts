/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 * @param {string} c
 */
export function shortestToChar(s: string, c: string): number[] {
  const res: number[] = new Array(s.length).fill(Infinity)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c)
      res[i] = 0

    else if (i > 0)
      res[i] = res[i - 1] + 1
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c)
      res[i] = 0

    else if (i < s.length - 1)
      res[i] = Math.min(res[i], res[i + 1] + 1)
  }

  return res
}
