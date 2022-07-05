# 459.重复的子字符串

> 难度：中等

## 题目

给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。

### 示例

#### 示例 1:

```
输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
```

#### 示例 2:

```
输入: s = "aba"
输出: false
```

#### 示例 3:

```
输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
```

### 提示：

```
1 <= s.length <= 104
s 由小写英文字母组成
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function repeatedSubstringPattern(s: string): boolean {
  if (s.length < 2) return false
  for (let i = 0; i < s.length / 2; i++) {
    const len = i + 1
    let j = i + 1
    while (j < s.length) {
      if (s.slice(j, j + len) !== s.slice(0, len)) break
      console.log(j)
      j += len
    }
    if (j === s.length)
      return true
  }
  return false
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function repeatedSubstringPattern2(s: string): boolean {
  const n = s.length
  const next: number[] = new Array(n).fill(-1)
  for (let i = 1, j = -1; i < n; i++) {
    while (j !== -1 && s[i] !== s[j + 1]) j = next[j]
    if (s[i] === s[j + 1]) j++
    next[i] = j
  }
  /// 最后一个值的 next 必须存在并且长度可以取余
  return next[n - 1] !== -1 && n % (n - next[n - 1] - 1) === 0
}
```
