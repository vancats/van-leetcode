# 面试题01.08.零矩阵

> 难度：非常简单

## 题目

编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

### 示例

#### 示例 1：

```
输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

#### 示例 2：

```
输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {number} matrix
 */
export function setZeroes(matrix: number[][]): void {
  const m = matrix.length
  const n = matrix[0].length
  const row: Set<number> = new Set()
  const col: Set<number> = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!matrix[i][j]) {
        row.add(i)
        col.add(j)
      }
    }
  }
  row.forEach(item => {
    for (let i = 0; i < n; i++)
      matrix[item][i] = 0
  })

  col.forEach(item => {
    for (let i = 0; i < m; i++)
      matrix[i][item] = 0
  })
}
```
