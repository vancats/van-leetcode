/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function diStringMatch(s: string): number[] {
  const n = s.length
  const res: number[] = new Array(n + 1).fill(0)
  let left = 0
  let right = n
  for (let i = 0; i < n; i++)
    res[i] = s[i] === 'I' ? left++ : right--

  res[n] = left
  return res
}
