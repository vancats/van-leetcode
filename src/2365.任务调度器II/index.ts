/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} tasks
 * @param {number} space
 */
export function taskSchedulerII(tasks: number[], space: number): number {
  const map = new Map()
  let cnt = 0
  tasks.forEach(task => {
    if (map.has(task) && map.get(task) + space >= cnt)
      cnt = map.get(task) + space

    map.set(task, ++cnt)
  })
  return cnt
}
