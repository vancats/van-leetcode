# 583.两个字符串的删除操作

> 难度：中等
>
> https://leetcode.cn/problems/delete-operation-for-two-strings/

## 题目

给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

每步 可以删除任意一个字符串中的一个字符。

### 示例

#### 示例 1：

```
输入: word1 = "sea", word2 = "eat"
输出: 2
解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
```

#### 示例  2:

```
输入：word1 = "leetcode", word2 = "etco"
输出：4
```

### 提示：

```
1 <= word1.length, word2.length <= 500
word1 和 word2 只包含小写英文字母
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {string} word1
 * @param {string} word2
 */
export function minDistance(word1: string, word2: string): number {
  const n1 = word1.length
  const n2 = word2.length
  const dp: number[][] = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0))
  for (let i = 1; i <= n1; i++) dp[i][0] = i
  for (let i = 1; i <= n2; i++) dp[0][i] = i
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (word1[i - 1] !== word2[j - 1])
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + 1

      else
        dp[i][j] = dp[i - 1][j - 1]
    }
  }
  return dp[n1][n2]
}
```
