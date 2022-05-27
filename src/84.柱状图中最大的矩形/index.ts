/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} heights
 */
export function largestRectangleArea(heights: number[]): number {
  const n = heights.length
  let res = 0
  // 左右边界数组并预设初始值
  const leftArr: number[] = new Array(n).fill(-1)
  const rightArr: number[] = new Array(n).fill(n)
  const stack: number[] = []
  for (let i = 0; i < n; i++) {
    // 单调递增栈
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]])
      // 记录右边界
      rightArr[stack.pop()!] = i
    // 记录左边界
    if (stack.length) leftArr[i] = stack[stack.length - 1]
    stack.push(i)
  }

  for (let i = 0; i < n; i++)
    res = Math.max(res, heights[i] * (rightArr[i] - leftArr[i] - 1))

  return res
}
