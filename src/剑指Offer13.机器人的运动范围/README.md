# 剑指Offer13.机器人的运动范围

> 难度：中等
>
> https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/

## 题目

地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

### 示例

#### 示例 1：

```
输入：m = 2, n = 3, k = 1
输出：3
```

#### 示例 2：

```
输入：m = 3, n = 1, k = 0
输出：1
```

### 提示：

```
1 <= n,m <= 100
0 <= k <= 20
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {number} m
 * @param {number} n
 * @param {number} k
 */
export function movingCount(m: number, n: number, k: number): number {
  let res = 1
  // 初始化
  const arr: number[] = new Array(n * m).fill(-1)
  arr[0] = 1
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  // 将起点推入
  const queue: number[][] = [[0, 0]]
  while (queue.length) {
    const cur = queue.shift()!
    for (let i = 0; i < 4; i++) {
      const row = cur[0] + dirs[i][0]
      const col = cur[1] + dirs[i][1]
      if (row < 0 || row >= m) continue
      if (col < 0 || col >= n) continue
      if (arr[row * n + col] !== -1) continue
      if (getNum(row, col) > k) continue
      arr[row * n + col] = 1
      queue.push([row, col])
      res++
    }
  }
  return res
}

function getNum(row: number, col: number) {
  let sum = 0
  while (row) {
    sum += row % 10
    row = Math.floor(row / 10)
  }
  while (col) {
    sum += col % 10
    col = Math.floor(col / 10)
  }
  return sum
}
```
