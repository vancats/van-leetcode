/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} obstacles
 */
export function minSideJumps(obstacles: number[]): number {
  const n = obstacles.length
  const arr = [1, 0, 1]
  for (let i = 1; i < n; i++) {
    let minCnt = Infinity // 从 0 到 i 列的三个值中，最少需要 minCnt 步
    // 先计算从上一步到当前的情况，更新 minCnt
    for (let j = 0; j < 3; j++) {
      // 如果当前有障碍，Infinity
      if (j === obstacles[i] - 1) arr[j] = Infinity
      // 如果没有障碍，更新 minCnt 的最小值
      else minCnt = Math.min(minCnt, arr[j])
    }

    // 计算侧跳的情况
    for (let j = 0; j < 3; j++) {
      // 如果当前有障碍，跳过
      if (j === obstacles[i] - 1) continue
      // 值为：上一步的值 与 该列最小值+1 的小值
      else arr[j] = Math.min(minCnt + 1, arr[j])
    }
  }
  return Math.min(...arr)
}
