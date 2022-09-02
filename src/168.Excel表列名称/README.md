# 168.Excel表列名称

> 难度：中等

## 题目

给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

### 示例

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

#### 示例 1：

```
输入：columnNumber = 1
输出："A"
```

#### 示例 2：

```
输入：columnNumber = 28
输出："AB"
```

#### 示例 3：

```
输入：columnNumber = 701
输出："ZY"
```

#### 示例 4：

```
输入：columnNumber = 2147483647
输出："FXSHRXW"
```

### 提示：

```
1 <= columnNumber <= 231 - 1
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} columnNumber
 */
export function convertToTitle(columnNumber: number): string {
  let str = ''
  let cnt = 1
  if (columnNumber > 26) cnt++
  while (columnNumber > 27 * Math.pow(26, cnt - 1)) cnt++
  while (cnt > 0) {
    let num = Math.floor(columnNumber / Math.pow(26, cnt - 1))
    if (!(columnNumber % Math.pow(26, cnt - 1)) && cnt > 1) num--
    str += getChar(num)
    columnNumber -= (num * Math.pow(26, --cnt))
  }
  return str
}

function getChar(num: number): string {
  return String.fromCharCode((num + 64))
}
```
