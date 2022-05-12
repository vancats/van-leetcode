# 面试题01.05.一次编辑

> 难度：非常简单
>
> https://leetcode.cn/problems/one-away-lcci/

## 题目

符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

### 示例

#### 示例 1:

```
输入:
first = "pale"
second = "ple"
输出: True
```

#### 示例 2:

```
输入:
first = "pales"
second = "pal"
输出: False
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(M + N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} first
 * @param {string} second
 */
export function oneEditAway(first: string, second: string): boolean {
  if (first === second)
    return true
  if (Math.abs(first.length - second.length) > 1)
    return false
  let flag = false
  if (first.length <= second.length)
    [first, second] = [second, first]
  let sign = false
  if (first.length > second.length)
    flag = true
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      if (sign)
        return false
      sign = true
      if (flag)
        first = first.slice(0, i) + first.slice(i-- + 1)
      else
        continue
    }
  }
  return true
}
```
