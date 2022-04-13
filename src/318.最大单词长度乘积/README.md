# 318.最大单词长度乘积

> 难度：中等
>
> http://vstfsd01:8080/tfs/DefaultCollection/TSD/_releaseProgress?_a=release-pipeline-progress&releaseId=7477

## 题目

给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。

### 示例

#### 示例 1：

```
输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
输出：16
解释：这两个单词为 "abcw", "xtfn"。

```
#### 示例 2：

```
输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
输出：4
解释：这两个单词为 "ab", "cd"。
```

#### 示例 3：

```
输入：words = ["a","aa","aaa","aaaa"]
输出：0
解释：不存在这样的两个单词。
```
 

### 提示：

```
2 <= words.length <= 1000
1 <= words[i].length <= 1000
words[i] 仅包含小写字母
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N^2 + M) 空间复杂度 O(N) - M 是所有字符的长度
 * @return {*}
 * @param {string} words
 */
export function maxProduct(words: string[]): number {
  const map: Map<string, number> = new Map()

  // 以二进制形式存储26个字母
  for (const word of words) {
    for (const char of word) {
      const ind = getBinary(char)
      map.set(word, (map.get(word) || 0) | (1 << ind))
    }
  }
  let max = 0
  for (let i = 0; i < words.length; i++) {
    const cur = map.get(words[i])!
    for (let j = i + 1; j < words.length; j++) {
      const next = map.get(words[j])!
      // 当 & 有值时即为有重复字母
      if (cur & next) continue
      max = Math.max(max, words[i].length * words[j].length)
    }
  }
  return max
}

function getBinary(char: string) {
  return char.charCodeAt(0) - 97
}
```
