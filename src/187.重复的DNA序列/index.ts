/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function findRepeatedDnaSequences(s: string): string[] {
  const map: Map<string, number> = new Map(); const res: string[] = []
  for (let i = 0; i < s.length - 9; i++) {
    const cur = s.slice(i, i + 10)
    map.set(cur, (map.get(cur) || 0) + 1)
  }

  for (const [item, ind] of map.entries()) {
    if (ind > 1)
      res.push(item)
  }
  return res
}
