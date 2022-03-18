# 470.用Rand7()实现Rand10()

> 难度：中等
>
> https://leetcode-cn.com/problems/implement-rand10-using-rand7/

## 题目

给定方法 rand7 可生成 [1,7] 范围内的均匀随机整数，试写一个方法 rand10 生成 [1,10] 范围内的均匀随机整数。

你只能调用 rand7() 且不能调用其他方法。请不要使用系统的 Math.random() 方法。

每个测试用例将有一个内部参数 n，即你实现的函数 rand10() 在测试时将被调用的次数。请注意，这不是传递给 rand10() 的参数。

### 示例

#### 示例 1:

```
输入: 1
输出: [2]
```

#### 示例 2:

```
输入: 2
输出: [2,8]
```

#### 示例 3:

```
输入: 3
输出: [3,8,10]
```

### 提示:

```
1 <= n <= 105

进阶:

rand7()调用次数的 期望值 是多少 ?
你能否尽量少调用 rand7() ?
```

## 题解

```typescript
/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10_A(): number {
  let first: number, second: number
  while ((first = rand7()) > 6) { }
  while ((second = rand7()) > 5) { }
  return (first & 1) === 1 ? second : second + 5
}

function rand10_B(): number {
  while (1) {
    let cnt = (rand7() - 1) * 7 + rand7()
    if (cnt <= 40) return cnt % 10 + 1
    let a = cnt - 40
    cnt = (a - 1) * 7 + rand7()
    if (cnt <= 60) return cnt % 10 + 1
    a = cnt - 60
    cnt = (a - 1) * 7 + rand7()
    if (cnt <= 20) return cnt % 10 + 1
  }
  return 1
}

function rand7(): number { return 1 }
```