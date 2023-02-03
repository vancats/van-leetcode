# 875.爱吃香蕉的珂珂

> 难度：中等

## 题目珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

### 示例

#### 示例 1：

```
输入：piles = [3,6,7,11], h = 8
输出：4
```

#### 示例 2：

```
输入：piles = [30,11,23,4,20], h = 5
输出：30
```

#### 示例 3：

```
输入：piles = [30,11,23,4,20], h = 6
输出：23
```

### 提示：

```
1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(OlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} piles
 * @param {number} h
 */
export function minEatingSpeed(piles: number[], h: number): number {
  let right = Math.max(...piles)
  if (piles.length === h) return right
  let left = 1
  while (left < right) {
    const mid = (left + right) >> 1
    if (getHours(mid) > h)
      left = mid + 1

    else
      right = mid
  }
  return left

  function getHours(mid: number) {
    return piles.reduce((p, c) => p + Math.ceil(c / mid), 0)
  }
}
```
