# 130.被围绕的区域

> 难度：中等
>
> https://leetcode-cn.com/problems/surrounded-regions/

## 题目

给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

### 示例

#### 示例 1：

```
输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
```

#### 示例 2：

```
输入：board = [["X"]]
输出：[["X"]]
```

### 提示：

```
m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] 为 'X' 或 'O'
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {string} board
 */
export function solve(board: string[][]): string[][] {
  const n = board.length
  const m = board[0].length
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  // 上下两层
  for (let i = 0; i < m; i++) {
    if (board[0][i] === 'O')
      dfs([0, i])
    if (board[n - 1][i] === 'O')
      dfs([n - 1, i])
  }

  // 左右两层
  for (let i = 0; i < n; i++) {
    if (board[i][0] === 'O')
      dfs([i, 0])

    if (board[i][m - 1] === 'O')
      dfs([i, m - 1])
  }

  // 转换
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'O')
        board[i][j] = 'X'
      if (board[i][j] === 'o')
        board[i][j] = 'O'
    }
  }
  return board

  function dfs(pos: number[]) {
    const [i, j] = pos
    board[i][j] = 'o'
    for (let k = 0; k < 4; k++) {
      const x = i + dirs[k][0]
      const y = j + dirs[k][1]
      if (x < 0 || x >= n) continue
      if (y < 0 || y >= m) continue
      if (board[x][y] === 'X') continue
      if (board[x][y] === 'o') continue
      // 相连的转为 o
      board[x][y] = 'o'
      dfs([x, y])
    }
  }
}
```
