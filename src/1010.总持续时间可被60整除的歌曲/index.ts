/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} time
 */
export function numPairsDivisibleBy60(time: number[]): number {
  const map: Map<number, number> = new Map()
  let res = 0
  time.forEach(item => {
    const rest = item % 60
    if (map.has((60 - rest) % 60))
      res += map.get((60 - rest) % 60)!

    map.set(rest, (map.get(rest) || 0) + 1)
  })
  return res
}
