# 84.柱状图中最大的矩形

> 难度：困难
>
> https://leetcode.cn/problems/largest-rectangle-in-histogram/

## 题目

给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

### 示例

#### 示例 1:

![](https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg)
```
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
```

#### 示例 2：

![](https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg)
```
输入： heights = [2,4]
输出： 4
```

### 提示：

```
1 <= heights.length <=105
0 <= heights[i] <= 104
```

## 题解

```ts
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
```
