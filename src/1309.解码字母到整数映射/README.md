# 1309.解码字母到整数映射

> 难度：非常简单
>
> https://leetcode.cn/problems/decrypt-string-from-alphabet-to-integer-mapping/

## 题目

给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：

字符（'a' - 'i'）分别用（'1' - '9'）表示。
字符（'j' - 'z'）分别用（'10#' - '26#'）表示。 
返回映射之后形成的新字符串。

题目数据保证映射始终唯一。

### 示例

#### 示例 1：

```
输入：s = "10#11#12"
输出："jkab"
解释："j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
```

#### 示例 2：

```
输入：s = "1326#"
输出："acz"
```

### 提示：

```
1 <= s.length <= 1000
s[i] 只包含数字（'0'-'9'）和 '#' 字符。
s 是映射始终存在的有效字符串。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function freqAlphabets(s: string): string {
  let res = ''
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '#') {
      res = getLetter(s[i - 2] + s[i - 1]) + res
      i -= 2
    }
    else {
      res = getLetter(s[i]) + res
    }
  }
  return res
}

function getLetter(char: string) {
  return String.fromCharCode(96 + Number(char))
}
```
