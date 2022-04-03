# 744.寻找比目标字母大的最小字母

> 难度：非常简单
>
> https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/

## 题目

给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母 target，请你寻找在这一有序列表里比目标字母大的最小字母。

在比较时，字母是依序循环出现的。举个例子：

如果目标字母 target = 'z' 并且字符列表为 letters = ['a', 'b']，则答案返回 'a'

### 示例 

#### 示例 1：

```
输入: letters = ["c", "f", "j"]，target = "a"
输出: "c"
```

##### 示例 2:

```
输入: letters = ["c","f","j"], target = "c"
输出: "f"
```

#### 示例 3:

```
输入: letters = ["c","f","j"], target = "d"
输出: "f"
```
 

### 提示：

```
2 <= letters.length <= 104
letters[i] 是一个小写字母
letters 按非递减顺序排序
letters 最少包含两个不同的字母
target 是一个小写字母
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} letters
 * @param {string} target
 */
export function nextGreatestLetter(letters: string[], target: string): string {
  let res: string = letters[0], min: number = letters[0].charCodeAt(0) - target.charCodeAt(0)
  for (let i = 1; i < letters.length; i++) {
    let diff = letters[i].charCodeAt(0) - target.charCodeAt(0)
    if (min > 0) {
      if (diff <= 0) continue
      if (diff < min) {
        min = diff
        res = letters[i]
      }
    } else if (diff < min || diff > 0) {
      min = diff
      res = letters[i]
    }
  }
  return res
}
```