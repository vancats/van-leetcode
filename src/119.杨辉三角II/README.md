# 119.杨辉三角II

> 难度：中等
>
> https://leetcode.cn/problems/pascals-triangle-ii/

## 题目

给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

### 示例

#### 示例 1:

```
输入: rowIndex = 3
输出: [1,3,3,1]
```

#### 示例 2:

```
输入: rowIndex = 0
输出: [1]
```

#### 示例 3:

```
输入: rowIndex = 1
输出: [1,1]
```

### 提示:

```
0 <= rowIndex <= 33
```

> 进阶：你可以优化你的算法到 O(rowIndex) 空间复杂度吗？


## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {number} rowIndex
 */
export function getRow(rowIndex: number): number[] {
  const res: number[][] = [[1]]
  for (let i = 1; i <= rowIndex; i++) {
    const arr: number[] = []
    for (let j = 0; j <= i; j++)
      arr[j] = (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0)
    res.push(arr)
  }
  return res[rowIndex]
}

export function getRow2(rowIndex: number): number[] {
  let prev: number[] = []
  let cur: number[] = []
  for (let i = 0; i <= rowIndex; i++) {
    cur = new Array(i + 1).fill(1)
    for (let j = 1; j < i; j++)
      cur[j] = prev[j - 1] + prev[j]

    prev = cur
  }
  return cur
}

export function getRow3(rowIndex: number): number[] {
  const cur: number[] = [1]
  for (let i = 1; i <= rowIndex; i++) {
    cur[i] = 1
    for (let j = i - 1; j > 0; j--)
      cur[j] += cur[j - 1]
  }
  return cur
}
```
