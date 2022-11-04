# 剑指OfferII003.前n个数字二进制中1的个数

> 难度：简单

## 题目

给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。

### 示例

#### 示例 1:

```
输入: n = 2
输出: [0,1,1]
解释:
0 --> 0
1 --> 1
2 --> 10
```

#### 示例 2:

```
输入: n = 5
输出: [0,1,1,2,1,2]
解释:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

> 说明 : 0 <= n <= 105

### 进阶:

```
给出时间复杂度为 O(n*sizeof(integer)) 的解答非常容易。但你可以在线性时间 O(n) 内用一趟扫描做到吗？
要求算法的空间复杂度为 O(n) 。
你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount ）来执行此操作。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function countBits(n: number): number[] {
  const arr = new Array(n + 1).fill(0)
  for (let i = 0; i <= n; i++)
    arr[i] = getCnt(i)

  return arr
}

function getCnt(num: number): number {
  let cnt = 0
  while (num > 0) {
    num &= (num - 1)
    cnt++
  }
  return cnt
}
```
