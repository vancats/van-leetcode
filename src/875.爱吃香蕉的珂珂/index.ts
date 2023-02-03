/**
 * @description: 时间复杂度 O(OlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} piles
 * @param {number} h
 */
export function minEatingSpeed(piles: number[], h: number): number {
  let right = Math.max(...piles)
  if (piles.length === h) return right
  let left = 1
  while (left < right) {
    const mid = (left + right) >> 1
    if (getHours(mid) > h)
      left = mid + 1

    else
      right = mid
  }
  return left

  function getHours(mid: number) {
    return piles.reduce((p, c) => p + Math.ceil(c / mid), 0)
  }
}
