# 竞赛-给定条件下构造矩阵

> 难度：困难

## 题目

给你一个 正 整数 k ，同时给你：

一个大小为 n 的二维整数数组 rowConditions ，其中 rowConditions[i] = [abovei, belowi] 和
一个大小为 m 的二维整数数组 colConditions ，其中 colConditions[i] = [lefti, righti] 。
两个数组里的整数都是 1 到 k 之间的数字。

你需要构造一个 k x k 的矩阵，1 到 k 每个数字需要 恰好出现一次 。剩余的数字都是 0 。

矩阵还需要满足以下条件：

对于所有 0 到 n - 1 之间的下标 i ，数字 abovei 所在的 行 必须在数字 belowi 所在行的上面。
对于所有 0 到 m - 1 之间的下标 i ，数字 lefti 所在的 列 必须在数字 righti 所在列的左边。
返回满足上述要求的 任意 矩阵。如果不存在答案，返回一个空的矩阵。

### 示例

#### 示例 1：

```
输入：k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
输出：[[3,0,0],[0,0,1],[0,2,0]]
解释：上图为一个符合所有条件的矩阵。
行要求如下：
- 数字 1 在第 1 行，数字 2 在第 2 行，1 在 2 的上面。
- 数字 3 在第 0 行，数字 2 在第 2 行，3 在 2 的上面。
列要求如下：
- 数字 2 在第 1 列，数字 1 在第 2 列，2 在 1 的左边。
- 数字 3 在第 0 列，数字 2 在第 1 列，3 在 2 的左边。
注意，可能有多种正确的答案。
```

#### 示例 2：

```
输入：k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]
输出：[]
解释：由前两个条件可以得到 3 在 1 的下面，但第三个条件是 3 在 1 的上面。
没有符合条件的矩阵存在，所以我们返回空矩阵。
```

### 提示：

```
2 <= k <= 400
1 <= rowConditions.length, colConditions.length <= 104
rowConditions[i].length == colConditions[i].length == 2
1 <= abovei, belowi, lefti, righti <= k
abovei != belowi
lefti != righti
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} k
 * @param {number} rowConditions
 * @param {number} colConditions
 */
export function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
  function getSort(conditions: number[][]) {
    const outArr: number[][] = new Array(k + 1).fill(0).map(() => [])
    const inArr: number[] = new Array(k + 1).fill(0)
    for (let i = 0; i < conditions.length; i++) {
      const [x, y] = conditions[i]
      // 入度增加
      inArr[y]++
      // 添加进出度
      outArr[x].push(y)
    }
    // 把入度为 0 的直接压入
    const stack: number[] = []
    for (let i = 1; i <= k; i++)
      if (!inArr[i]) stack.push(i)

    const res: number[] = []
    while (stack.length) {
      const val = stack.shift()!
      // 弹出的都是无前置需求的，直接 push
      res.push(val)
      // 弹出的数字出度的数字数组，他们的所有入度减一，如果为 0 入栈
      outArr[val].forEach(v => {
        inArr[v]--
        if (!inArr[v]) stack.push(v)
      })
    }
    return res
  }
  // 得到行排序后的数组
  const row = getSort(rowConditions)
  // 得到列排序后的数组
  const col = getSort(colConditions)
  // 如果长度不为 k，那么代表有值不符合条件，直接返回
  if (row.length < k || col.length < k) return []
  const rect = new Array(k).fill(0).map(() => new Array(k).fill(0))
  const map = new Map()
  // 使用 map 降低时间复杂度
  for (let i = 0; i < k; i++)
    map.set(col[i], i)

  // 直接设置值就可以了
  for (let i = 0; i < k; i++) {
    const col = map.get(row[i])
    rect[i][col] = row[i]
  }
  return rect
}
```
