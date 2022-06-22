# 77.组合

> 难度：中等
>
> https://leetcode.cn/problems/combinations/

## 题目

给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

### 示例

#### 示例 1：

```
输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

#### 示例 2：

```
输入：n = 1, k = 1
输出：[[1]]
```

### 提示：

```
1 <= n <= 20
1 <= k <= n
```

## 题解

```ts
/**
 * @description: 待定
 * @return {*}
 * @param {number} n
 * @param {number} k
 */
export function combine(n: number, k: number): number[][] {
  const res: number[][] = []
  dfs(1, k)
  return res
  function dfs(curInd: number, curK: number, curRes: number[] = []) {
    if (curK === 0) {
      res.push(curRes.slice())
      return
    }
    // 回溯 + 剪枝
    for (; curInd <= n - curK + 1; curInd++) {
      curRes.push(curInd)
      dfs(curInd + 1, curK - 1, curRes)
      curRes.pop()
    }
  }
}
```
