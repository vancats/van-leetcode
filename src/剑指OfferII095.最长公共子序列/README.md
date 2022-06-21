# 剑指OfferII095.最长公共子序列

> 难度：中等
>
> https://leetcode.cn/problems/qJnOS7/submissions/

## 题目

给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

### 示例

#### 示例 1：

```
输入：text1 = "abcde", text2 = "ace"
输出：3
解释：最长公共子序列是 "ace" ，它的长度为 3 。
```

#### 示例 2：

```
输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
```

#### 示例 3：

```
输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。
```

### 提示：

```
1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {string} text1
 * @param {string} text2
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
  const n1 = text1.length
  const n2 = text2.length
  // dp 含义解释： i j 分别代表 text1 text 以第几个字符为末尾 dp[i][j] 是以 text1 的第 i 个与 text2 的第 j 个结尾的最长序列长度
  const dp: number[][] = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0))
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      // 如果该位相等，则取当前值与 i-1 j-1 值加一的大值
      if (text1[i - 1] === text2[j - 1])
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
      else
        // 如果不相等，则取前值
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
    }
  }
  return dp[n1][n2]
}
```
