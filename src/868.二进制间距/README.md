# 868.二进制间距

> 难度：非常简单
>
> https://leetcode-cn.com/problems/binary-gap/

## 题目

给定一个正整数 n，找到并返回 n 的二进制表示中两个 相邻 1 之间的 最长距离 。如果不存在两个相邻的 1，返回 0 。

如果只有 0 将两个 1 分隔开（可能不存在 0 ），则认为这两个 1 彼此 相邻 。两个 1 之间的距离是它们的二进制表示中位置的绝对差。例如，"1001" 中的两个 1 的距离为 3 。

### 示例

#### 示例 1：

```
输入：n = 22
输出：2
解释：22 的二进制是 "10110" 。
在 22 的二进制表示中，有三个 1，组成两对相邻的 1 。
第一对相邻的 1 中，两个 1 之间的距离为 2 。
第二对相邻的 1 中，两个 1 之间的距离为 1 。
答案取两个距离之中最大的，也就是 2 。
```

#### 示例 2：

```
输入：n = 8
输出：0
解释：8 的二进制是 "1000" 。
在 8 的二进制表示中没有相邻的两个 1，所以返回 0 。
```

#### 示例 3：

```
输入：n = 5
输出：2
解释：5 的二进制是 "101" 。
```

### 提示：

```
1 <= n <= 109
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function binaryGap(n: number): number {
  const binary = n.toString(2)
  let max = 0
  let flag = binary.indexOf('1')
  if (flag < 0)
    return 0
  for (let i = flag + 1; i < binary.length; i++) {
    if (binary[i] === '1') {
      max = Math.max(i - flag, max)
      flag = i
    }
  }
  return max
}
```
