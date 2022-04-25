# 883.三维形体投影面积

> 难度：非常简单
>
> https://leetcode-cn.com/problems/projection-area-of-3d-shapes/

## 题目

在 n x n 的网格 grid 中，我们放置了一些与 x，y，z 三轴对齐的 1 x 1 x 1 立方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。

现在，我们查看这些立方体在 xy 、yz 和 zx 平面上的投影。

投影 就像影子，将 三维 形体映射到一个 二维 平面上。从顶部、前面和侧面看立方体时，我们会看到“影子”。

返回 所有三个投影的总面积 。

### 示例

#### 示例 1：

```
输入：[[1,2],[3,4]]
输出：17
解释：这里有该形体在三个轴对齐平面上的三个投影(“阴影部分”)。
```

#### 示例 2:

```
输入：grid = [[2]]
输出：5
```

#### 示例 3：

```
输入：[[1,0],[0,2]]
输出：8
```

### 提示：

```
n == grid.length == grid[i].length
1 <= n <= 50
0 <= grid[i][j] <= 50
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {number} grid
 */
export function projectionArea(grid: number[][]): number {
  let xyArea = 0
  let yzArea = 0
  let xzArea = 0
  const n = grid.length
  for (let i = 0; i < n; i++) {
    let yzHeight = 0
    let xzHeight = 0
    for (let j = 0; j < n; j++) {
      xyArea += (grid[i][j] > 0 ? 1 : 0)
      yzHeight = Math.max(yzHeight, grid[i][j])
      xzHeight = Math.max(xzHeight, grid[j][i])
    }
    yzArea += yzHeight
    xzArea += xzHeight
  }
  return xzArea + xyArea + yzArea
}
```
