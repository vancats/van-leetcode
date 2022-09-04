/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 */
export function numberOfWays(startPos: number, endPos: number, k: number): number {
  if (k < Math.abs(startPos - endPos)) return 0
  const map: Map<string, number> = new Map()
  return dfs(startPos, k) % (Math.pow(10, 9) + 7)
  function dfs(pos: number, k: number): number {
    if (k === 0) return 0
    if (k === 1 && Math.abs(pos - endPos) === 1)
      return 1
    if (map.has(`${pos}&${k}`))
      return map.get(`${pos}&${k}`)!
    let res = 0
    res += (dfs(pos - 1, k - 1)) % (Math.pow(10, 9) + 7)
    res += (dfs(pos + 1, k - 1)) % (Math.pow(10, 9) + 7)
    map.set(`${pos}&${k}`, res)
    return res
  }
}
