# 394.字符串解码

> 难度：中等
>
> https://leetcode-cn.com/problems/decode-string/

## 题目

给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: `k[encoded_string]`，表示其中方括号内部的 `encoded_string` 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

### 示例

#### 示例 1：

```
输入：s = "3[a]2[bc]"
输出："aaabcbc"
```

#### 示例 2：

```
输入：s = "3[a2[c]]"
输出："accaccacc"
```

#### 示例 3：

```
输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
```

#### 示例 4：

```
输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"
```
### 提示：

```
1 <= s.length <= 30
s 由小写英文字母、数字和方括号 '[]' 组成
s 保证是一个 有效 的输入。
s 中所有整数的取值范围为 [1, 300] 
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function decodeString(s: string): string {
  // 构建两个栈，一个数字栈，一个字符串栈
  let str: string = '', numStack: number[] = [], strStack: string[] = [], temp = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 49 && s[i].charCodeAt(0) <= 57) {
      // 如果当前为最外层，直接把 temp 拼接到 str 上
      if (!numStack.length) str += temp
      // 如果不是最外层，推入到字符串栈中，防止被重复
      else strStack.push(temp)
      // 清空前面的值
      temp = ''
      // 计算连着的所有数字，并直接定位到 [ 的下一位
      let sum = 0
      while (s[i] !== '[') {
        sum = sum * 10 + Number(s[i])
        i++
      }
      // 将数字推入到数字栈中
      numStack.push(sum)
    } else if (s[i] === ']') {
      // 需要把 temp 的所有值重复外层数字的数量，如果字符串栈中有值，拼接到前面
      temp = (strStack.pop() || '') + temp.repeat(numStack.pop()!)
    } else {
      // 普通字符直接拼接
      temp += s[i]
    }
  }
  // 处理最后的字符
  if (temp) str += temp
  return str
}
```