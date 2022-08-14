# 竞赛-矩阵中的局部最大值

> 难度：简单

## 题目

给你一个大小为 n x n 的整数矩阵 grid 。

生成一个大小为 (n - 2) x (n - 2) 的整数矩阵  maxLocal ，并满足：

maxLocal[i][j] 等于 grid 中以 i + 1 行和 j + 1 列为中心的 3 x 3 矩阵中的 最大值 。
换句话说，我们希望找出 grid 中每个 3 x 3 矩阵中的最大值。

返回生成的矩阵。

### 示例

#### 示例 1：

![](https://assets.leetcode.com/uploads/2022/06/21/ex1.png)
```
输入：grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
输出：[[9,9],[8,6]]
解释：原矩阵和生成的矩阵如上图所示。
注意，生成的矩阵中，每个值都对应 grid 中一个相接的 3 x 3 矩阵的最大值。
```

#### 示例 2：

![](https://assets.leetcode.com/uploads/2022/07/02/ex2new2.png)
```
输入：grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
输出：[[2,2,2],[2,2,2],[2,2,2]]
解释：注意，2 包含在 grid 中每个 3 x 3 的矩阵中。
```

### 提示：

```
n == grid.length == grid[i].length
3 <= n <= 100
1 <= grid[i][j] <= 100
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} grid
 */
export function largestLocal(grid: number[][]): number[][] {
  const n = grid.length
  const m = grid[0].length
  const res: number[][] = new Array(n - 2).fill(0).map(() => new Array(m - 2))
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      let max = grid[i][j]
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++)
          max = Math.max(grid[x][y], max)
      }
      res[i][j] = max
    }
  }
  return res
}
```
