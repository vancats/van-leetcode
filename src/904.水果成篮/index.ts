/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} fruits
 */
export function totalFruit(fruits: number[]): number {
  let res = 0
  let left = 0
  let right = 0
  const map: Map<number, number> = new Map()
  while (right < fruits.length) {
    const cur = fruits[right]
    if (!map.has(cur) && map.size > 1) {
      while (left <= right) {
        const val = fruits[left]
        map.set(val, map.get(val)! - 1)
        left++
        if (map.get(val) === 0) {
          map.delete(val)
          break
        }
      }
    }
    map.set(cur, (map.get(cur) || 0) + 1)
    res = Math.max(res, right - left + 1)
    right++
  }
  return res
}
