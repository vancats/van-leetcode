/**
 * @description: 时间复杂度 O(XY) 空间复杂度 O(XY)
 * @return {*}
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 */
export function canMeasureWater(jug1Capacity: number, jug2Capacity: number, targetCapacity: number): boolean {
  const set: Set<string> = new Set()
  set.add('0#0')
  const queue: number[][] = [[0, 0]]

  while (queue.length) {
    const [x, y] = queue.shift()!
    if (x === targetCapacity || y === targetCapacity || x + y === targetCapacity)
      return true

    for (let i = 0; i < 6; i++) {
      const [nx, ny] = getNext(i, x, y)
      const str = `${nx}#${ny}`
      if (set.has(str))
        continue

      set.add(str)
      queue.push([nx, ny])
    }
  }

  return false

  // 状态转移方程
  function getNext(k: number, x: number, y: number) {
    switch (k) {
      case 0: return [x, 0]
      case 1: return [0, y]
      case 2: {
        const rest = Math.min(x, jug2Capacity - y)
        return [x - rest, y + rest]
      }
      case 3: {
        const rest = Math.min(y, jug1Capacity - x)
        return [x + rest, y - rest]
      }
      case 4: return [x, jug2Capacity]
      default: return [jug1Capacity, y]
    }
  }
}
