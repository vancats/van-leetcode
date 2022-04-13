# 187.重复的DNA序列

> 难度：非常简单
>
> https://leetcode-cn.com/problems/repeated-dna-sequences/

## 题目

DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。

例如，"ACGAATTCCG" 是一个 DNA序列 。
在研究 DNA 时，识别 DNA 中的重复序列非常有用。

给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。

### 示例：

```
输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC","CCCCCAAAAA"]
示例 2：

输入：s = "AAAAAAAAAAAAA"
输出：["AAAAAAAAAA"]
```

### 提示：

```
0 <= s.length <= 105
s[i]=='A'、'C'、'G' or 'T'
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function findRepeatedDnaSequences(s: string): string[] {
  const map: Map<string, number> = new Map(); const res: string[] = []
  for (let i = 0; i < s.length - 9; i++) {
    const cur = s.slice(i, i + 10)
    map.set(cur, (map.get(cur) || 0) + 1)
  }

  for (const [item, ind] of map.entries()) {
    if (ind > 1)
      res.push(item)
  }
  return res
}
```
