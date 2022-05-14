# 812.最大三角形面积

> 难度：非常简单
>
> https://leetcode.cn/problems/largest-triangle-area/

## 题目

给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。

### 示例:

```
输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
输出: 2
解释:
这五个点如下图所示。组成的橙色三角形是最大的，面积为2。
```

### 注意:

```
3 <= points.length <= 50.
不存在重复的点。
 -50 <= points[i][j] <= 50.
结果误差值在 10^-6 以内都认为是正确答案。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^3) 空间复杂度 O(1)
 * @return {*}
 * @param undefined
 */
export function largestTriangleArea(points: number[][]): number {
  const n = points.length
  let res = 0
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 1; j++) {
      for (let k = 0; k < n; k++)
        res = Math.max(res, getArea(points[i][0], points[i][1], points[j][0], points[j][1], points[k][0], points[k][1]))
    }
  }
  return res
}

function getArea(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
  return 0.5 * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2)
}
```
