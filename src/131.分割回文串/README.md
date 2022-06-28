# 131.分割回文串

> 难度：中等

## 题目

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。

### 示例

#### 示例 1：

```
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
```

#### 示例 2：

```
输入：s = "a"
输出：[["a"]]
```

### 提示：

```
1 <= s.length <= 16
s 仅由小写英文字母组成
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(2^N * N) 空间复杂度 O(N^2)
 * @return {*}
 * @param {string} s
 */
export function partition(s: string): string[][] {
  const n = s.length
  const dp: boolean[][] = new Array(n).fill(0).map(() => new Array(n).fill(true))
  const res: string[][] = []

  /// dp 预处理出从 i 到 j 是否回文
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++)
      dp[i][j] = (s[i] === s[j]) && dp[i + 1][j - 1]
  }

  dfs(0)
  return res
  function dfs(ind: number, curRes: string[] = []) {
    if (ind === n) {
      res.push(curRes.slice())
      return
    }
    for (let i = ind; i < n; i++) {
      if (dp[ind][i]) {
        curRes.push(s.slice(ind, i + 1))
        dfs(i + 1, curRes)
        curRes.pop()
      }
    }
  }
}

export function partition2(s: string): string[][] {
  const n = s.length
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const res: string[][] = []

  dfs(0)
  return res

  function dfs(ind: number, curRes: string[] = []) {
    if (ind === n) {
      res.push(curRes.slice())
      return
    }
    for (let i = ind; i < n; i++) {
      if (isPalindrome(ind, i) === 1) {
        curRes.push(s.slice(ind, i + 1))
        dfs(i + 1, curRes)
        curRes.pop()
      }
    }
  }

  /// 记忆化搜索：0 未搜索 1 回文 -1 非回文
  function isPalindrome(left: number, right: number): number {
    if (dp[left][right] !== 0) return dp[left][right]
    if (left >= right)
      dp[left][right] = 1
    else if (s[left] === s[right])
      dp[left][right] = isPalindrome(left + 1, right - 1)
    else
      dp[left][right] = -1
    return dp[left][right]
  }
}
```
