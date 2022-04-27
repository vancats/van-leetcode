# 417.太平洋大西洋水流问题

> 难度：中等
>
> https://leetcode-cn.com/problems/pacific-atlantic-water-flow/

## 题目

有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。

岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

返回 网格坐标 result 的 2D列表 ，其中 result[i] = [ri, ci] 表示雨水可以从单元格 (ri, ci) 流向 太平洋和大西洋 。

### 示例

#### 示例 1：

![](https://assets.leetcode.com/uploads/2021/06/08/waterflow-grid.jpg)
```
输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
```

#### 示例 2：

```
输入: heights = [[2,1],[1,2]]
输出: [[0,0],[0,1],[1,0],[1,1]]
```

### 提示：

```
m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {number} heights
 */
export function pacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length
  const n = heights[0].length
  const res: number[][] = []
  // 可以到达太平洋的点
  const left: number[] = new Array(m * n).fill(0)
  // 可以到达大西洋的点
  const right: number[] = new Array(m * n).fill(0)
  // 方向数组
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  // dfs 上下两边
  for (let i = 0; i < m; i++) {
    dfs([i, 0], 0)
    dfs([i, n - 1], 1)
  }

  // dfs 左右两边
  for (let i = 0; i < n; i++) {
    dfs([0, i], 0)
    dfs([m - 1, i], 1)
  }

  // 如果左右都可以到达，push 入结果数组
  left.forEach((item, index) => {
    if (item && right[index])
      res.push(toArr(index))
  })

  return res

  function dfs(arr: number[], dir: number) {
    const temp = dir ? right : left
    const [x, y] = arr
    if (temp[toIndex(arr)])
      return

    temp[toIndex(arr)] = 1
    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dirs[i]
      if (x + dx < 0 || x + dx >= m || y + dy < 0 || y + dy >= n)
        continue
      if (heights[x + dx][y + dy] >= heights[x][y])
        dfs([x + dx, y + dy], dir)
    }
  }

  // 二维转一维
  function toIndex(arr: number[]) {
    return arr[0] * n + arr[1]
  }

  // 一维转二维
  function toArr(ind: number): number[] {
    const x = Math.floor(ind / n)
    const y = ind % n
    return [x, y]
  }
}
```
