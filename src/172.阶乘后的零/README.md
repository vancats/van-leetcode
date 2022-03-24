# 172.阶乘后的零

> 难度：非常简单
>
> https://leetcode-cn.com/problems/factorial-trailing-zeroes/

## 题目

给定一个整数 n ，返回 n! 结果中尾随零的数量。

提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1

### 示例

#### 示例 1：

```
输入：n = 3
输出：0
解释：3! = 6 ，不含尾随 0
```

#### 示例 2：

```
输入：n = 5
输出：1
解释：5! = 120 ，有一个尾随 0
```

#### 示例 3：

```
输入：n = 0
输出：0
```

### 提示：

```
0 <= n <= 104 
进阶：你可以设计并实现对数时间复杂度的算法来解决此问题吗？
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function trailingZeroes(n: number): number {
  let n5 = 0
  for (let i = 2; i <= n; i++) {
    let temp = i
    while (!(temp % 5)) {
      n5++
      temp /= 5
    }
  }
  return n5
}
```