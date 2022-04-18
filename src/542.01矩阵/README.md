# 542.01矩阵

> 难度：中等
>
> https://leetcode-cn.com/problems/01-matrix/

## 题目

给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

### 示例

#### 示例 1：

```
输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
输出：[[0,0,0],[0,1,0],[0,0,0]]
```

#### 示例 2：

```
输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
输出：[[0,0,0],[0,1,0],[1,2,1]]
```

### 提示：

```
m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
mat 中至少有一个 0 
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {number} mat
 */
export function updateMatrix(mat: number[][]): number[][] {
  const n = mat.length
  const m = mat[0].length
  // 初始化结果数组
  const arr = new Array(n).fill(0).map(() => new Array(m).fill(-1))
  const queue: number[][] = []
  // 方向数组
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  // 初始化为 0 的情况
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        arr[i][j] = 0
        // 初始化队列
        queue.push([i, j])
      }
    }
  }

  while (queue.length) {
    const [i, j] = queue.shift()!
    const curDis = arr[i][j]
    // bfs
    for (let k = 0; k < 4; k++) {
      const row = i + dirs[k][0]
      const col = j + dirs[k][1]
      // 超出边界
      if (row < 0 || row >= n) continue
      if (col < 0 || col >= m) continue
      // 已被标记
      if (arr[row][col] !== -1) continue
      arr[row][col] = curDis + 1
      queue.push([row, col])
    }
  }

  return arr
}
```
