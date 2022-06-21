/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} capacity
 * @param {number} rocks
 * @param {number} additionalRocks
 */
export function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
  capacity.forEach((item, index) => {
    capacity[index] -= rocks[index]
  })
  capacity.sort((a, b) => a - b)
  let i = 0
  for (; i < capacity.length; i++) {
    if (capacity[i] > additionalRocks) return i
    additionalRocks -= capacity[i]
  }
  return i
}
