# 1925.统计平方和三元组的数目

> 难度：非常简单

## 题目

一个 平方和三元组 (a,b,c) 指的是满足 a2 + b2 = c2 的 整数 三元组 a，b 和 c 。

给你一个整数 n ，请你返回满足 1 <= a, b, c <= n 的 平方和三元组 的数目。

### 示例

#### 示例 1：

```
输入：n = 5
输出：2
解释：平方和三元组为 (3,4,5) 和 (4,3,5) 。
```

#### 示例 2：

```
输入：n = 10
输出：4
解释：平方和三元组为 (3,4,5)，(4,3,5)，(6,8,10) 和 (8,6,10) 。
```

### 提示：

```
1 <= n <= 250
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function countTriples(n: number): number {
  let res = 0
  for (let i = 1; i <= n - 2; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      const sum = Math.sqrt(i * i + j * j)
      if (sum === Math.floor(sum) && sum <= n) res++
    }
  }
  return res * 2
}
```
