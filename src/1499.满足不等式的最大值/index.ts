/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N) 单调队列 + 单调栈
 * @return {*}
 * @param {number} points
 * @param {number} k
 */
export function findMaxValueOfEquation(points: number[][], k: number): number {
  // 初始值，不能赋 Number.MIN_VALUE，因为会被替换为 -Number.MAX_VALUE
  let max = -Infinity
  const stack: number[] = []
  for (let i = 0; i < points.length; i++) {
    // 先处理滑动窗口的左边界
    while (stack.length && points[i][0] - points[stack[0]][0] > k) stack.shift()
    // 计算结果
    if (stack.length) {
      const [x1, y1] = points[stack[0]]
      const [x2, y2] = points[i]
      max = Math.max(max, x2 + y2 - x1 + y1)
    }
    // 处理单调栈
    while (stack.length && points[i][1] - points[i][0] > points[stack[stack.length - 1]][1] - points[stack[stack.length - 1]][0])
      stack.pop()
    stack.push(i)
  }
  return max
}
