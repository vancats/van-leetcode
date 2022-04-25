# 43.字符串相乘

> 难度：中等
>
> https://leetcode-cn.com/problems/multiply-strings/

## 题目

给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

### 示例

#### 示例 1:

```
输入: num1 = "2", num2 = "3"
输出: "6"
```

#### 示例 2:

```
输入: num1 = "123", num2 = "456"
输出: "56088"
```

### 提示：

```
1 <= num1.length, num2.length <= 200
num1 和 num2 只能由数字组成。
num1 和 num2 都不包含任何前导零，除了数字0本身。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(M + N)
 * @return {*}
 * @param {string} num1
 * @param {string} num2
 */
export function multiply(num1: string, num2: string): string {
  const arr1: string[] = num1.split('').reverse()
  const arr2: string[] = num2.split('').reverse()
  const res: number[] = new Array(num1.length + num2.length).fill(0)

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++)
      res[i + j] += Number(arr1[i]) * Number(arr2[j])
  }

  const len = res.length
  for (let i = 0; i < len; i++) {
    const cur = res[i]
    if (cur < 10) continue
    if (i + 1 === res.length) res.push(0)
    res[i + 1] += Math.floor(cur / 10)
    res[i] = cur % 10
  }

  return res.reverse().join('').replace(/^0+/, '') || '0'
}
```
