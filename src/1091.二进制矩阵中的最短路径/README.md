# 1091.二进制矩阵中的最短路径

> 难度：中等
>
> https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/

## 题目

给你一个 n x n 的二进制矩阵 grid 中，返回矩阵中最短 畅通路径 的长度。如果不存在这样的路径，返回 -1 。

二进制矩阵中的 畅通路径 是一条从 左上角 单元格（即，(0, 0)）到 右下角 单元格（即，(n - 1, n - 1)）的路径，该路径同时满足下述要求：

路径途经的所有单元格都的值都是 0 。
路径中所有相邻的单元格应当在 8 个方向之一 上连通（即，相邻两单元之间彼此不同且共享一条边或者一个角）。
畅通路径的长度 是该路径途经的单元格总数。

### 示例

#### 示例 1：

```
输入：grid = [[0,1],[1,0]]
输出：2
```

#### 示例 2：

```
输入：grid = [[0,0,0],[1,1,0],[1,1,0]]
输出：4
```

#### 示例 3：

```
输入：grid = [[1,0,0],[1,1,0],[1,1,0]]
输出：-1
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} grid
 */
export function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length
  if (grid[0][0] || grid[n - 1][n - 1]) return -1

  // 存放结果一维数组
  const arr: number[] = new Array(n * n).fill(-1)
  // 初始化
  arr[0] = 1
  // 存放当前坐标的行列下标
  const queue: number[][] = [[0, 0]]
  // 方向数组
  const dirs = [[-1, -1], [-1, 1], [-1, 0], [1, -1], [1, 0], [1, 1], [0, 1], [0, -1]]
  // BFS
  while (queue.length) {
    const cur = queue.shift()!
    for (let i = 0; i < 8; i++) {
      // 获取下一个的行列值
      const row = cur[0] + dirs[i][0]
      const col = cur[1] + dirs[i][1]
      // 计算得对应一维下标
      const ind = row * n + col
      // 判断跳过条件
      if (row < 0 || row >= n) continue
      if (col < 0 || col >= n) continue
      if (arr[ind] !== -1) continue
      if (grid[row][col]) continue
      // 优化
      if (ind === n * n - 1) return arr[cur[0] * n + cur[1]] + 1
      // 修改结果值
      arr[ind] = arr[cur[0] * n + cur[1]] + 1
      // 继续 dfs
      queue.push([row, col])
    }
  }
  return arr[arr.length - 1]
}
```
