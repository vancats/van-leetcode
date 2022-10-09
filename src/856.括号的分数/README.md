# 856.括号的分数

> 难度：中等

## 题目

给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

() 得 1 分。
AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
(A) 得 2 * A 分，其中 A 是平衡括号字符串。

### 示例

#### 示例 1：

```
输入： "()"
输出： 1
```

#### 示例 2：

```
输入： "(())"
输出： 2
```

#### 示例 3：

```
输入： "()()"
输出： 2
```

#### 示例 4：

```
输入： "(()(()))"
输出： 6
```

### 提示：

```
S 是平衡括号字符串，且只含有 ( 和 ) 。
2 <= S.length <= 50
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function scoreOfParentheses(s: string): number {
  const stack: number[] = new Array(s.length).fill(0)
  let level = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      level++
      continue
    }
    level--
    if (s[i - 1] === '(') {
      stack[level] += 1
    }
    else {
      stack[level] += (stack[level + 1] * 2)
      stack[level + 1] = 0
    }
  }
  return stack[0]
}
```
