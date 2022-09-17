/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function maxLengthBetweenEqualCharacters(s: string): number {
  let res = -1
  const map: Map<string, number> = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]))
      res = Math.max(res, i - map.get(s[i])! - 1)

    else
      map.set(s[i], i)
  }
  return res === Infinity ? -1 : res
}
