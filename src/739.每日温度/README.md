# 739.每日温度

> 难度：中等
>
> https://leetcode.cn/problems/daily-temperatures/

## 题目

给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指在第 i 天之后，才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

### 示例

#### 示例 1:

```
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
```

#### 示例 2:

```
输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
```

#### 示例 3:

```
输入: temperatures = [30,60,90]
输出: [1,1,0]
```

### 提示：

```
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} temperatures
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length
  const stack: number[] = []
  const res: number[] = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const val = stack.pop()!
      res[val] = i - val
    }
    stack.push(i)
  }
  return res
}
```
