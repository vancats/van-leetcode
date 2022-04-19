/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} deadends
 * @param {string} target
 */
export function openLock(deadends: string[], target: string): number {
  if (deadends.includes('0000')) return -1
  if (target === '0000') return 0

  const map: Map<string, number> = new Map()

  // 初始化,visited 放入 map 中的值
  deadends.forEach(deadend => map.set(deadend, 0))
  map.set('0000', 0)
  const queue: string[] = ['0000']

  while (queue.length) {
    const cur = queue.shift()!
    // 四个位置
    for (let i = 0; i < 4; i++) {
      // 两个方向
      for (let j = -1; j <= 1; j += 2) {
        // 转动一次后的字符串
        const next = spinLock(cur, i, j)
        if (map.has(next))
          continue
        if (target === next)
          return map.get(cur)! + 1

        map.set(next, (map.get(cur) || 0) + 1)
        queue.push(next)
      }
    }
  }
  return -1
}

// 转动一次后锁的字符
function spinLock(s: string, ind: number, dir: number): string {
  let changeNum = Number(s[ind]) + dir
  if (changeNum > 9) changeNum = 0
  if (changeNum < 0) changeNum = 9
  return s.slice(0, ind) + changeNum + s.slice(ind + 1)
}
