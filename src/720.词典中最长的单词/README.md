# 720.词典中最长的单词

> 难度：简单
>
> https://leetcode-cn.com/problems/longest-word-in-dictionary/

## 题目

给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。

若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

### 示例

#### 示例 1：

```
输入：words = ["w","wo","wor","worl", "world"]
输出："world"
解释： 单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。
```

#### 示例 2：

```
输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出："apple"
解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply" 
```

### 提示：

```
1 <= words.length <= 1000
1 <= words[i].length <= 30
所有输入的字符串 words[i] 都只包含小写字母。
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @param  {*}
 * @return {*}
 * @param {string} words
 */
export function longestWord(words: string[]): string {
  let map: Map<string, string> = new Map(), str: string = ''
  words.sort((a, b) => a.length - b.length)
  for (let i = 0; i < words.length; i++) {
    let prefix = words[i].slice(0, -1)
    if (map.has(prefix) || words[i].length === 1) {
      map.set(words[i], words[i])
      if (words[i].length > str.length) str = words[i]
      else if (words[i].length === str.length) str = words[i] < str ? words[i] : str
    }
  }
  return str
}
```