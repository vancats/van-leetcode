/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} arr
 */
export function canReorderDoubled(arr: number[]): boolean {
  let map = new Map()
  // 哈希表存储
  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1)
  }
  // 判 0
  if ((map.get(0) || 0) % 2) return false

  // 将 key 放入数组并按绝对值从小到大排列
  let res: number[] = []
  for (const item of map.keys()) {
    res.push(item)
  }
  res.sort((a, b) => Math.abs(a) - Math.abs(b))

  // 循环 key，删除相应的数量
  for (const val of res) {
    if ((map.get(2 * val) || 0) < map.get(val)) {
      return false
    }
    map.set(2 * val, map.get(2 * val) - map.get(val))
  }
  return true
}
