/**
 * @description: 时间复杂度 O(NMC) 空间复杂度 O(NM) N 数组长度 M = 8 序列长度 C = 4 变化长度
 * @return {*}
 * @param {string} start
 * @param {string} end
 * @param {string} bank
 */
export function minMutation(start: string, end: string, bank: string[]): number {
  if (!bank.includes(end))
    return -1
  let cnt = 0
  const set: Set<string> = new Set()
  // 初始化数组到 set
  bank.forEach(item => set.add(item))
  // 初始化队列
  const queue: string[] = [start]
  const flag = ['A', 'C', 'G', 'T']
  while (queue.length) {
    cnt++
    const ind = queue.length
    for (let m = 0; m < ind; m++) {
      const str = queue.shift()!
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {
          if (str[i] === flag[j])
            continue
          const next = str.slice(0, i) + flag[j] + str.slice(i + 1)
          if (next === end)
            return cnt
          if (set.has(next)) {
            set.delete(next)
            queue.push(next)
          }
        }
      }
    }
  }
  return -1
}
