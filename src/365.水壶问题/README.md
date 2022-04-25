# 365.水壶问题

> 难度：中等
>
> https://leetcode-cn.com/problems/water-and-jug-problem/

## 题目

有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。

如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。

你可以：

- 装满任意一个水壶
- 清空任意一个水壶
- 从一个水壶向另外一个水壶倒水，直到装满或者倒空

### 示例

#### 示例 1: 

```
输入: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
输出: true
解释：来自著名的 "Die Hard"
```

#### 示例 2:

```
输入: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5
输出: false
```

#### 示例 3:

```
输入: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3
输出: true
```

### 提示:

```
1 <= jug1Capacity, jug2Capacity, targetCapacity <= 106
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(XY) 空间复杂度 O(XY)
 * @return {*}
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 */
export function canMeasureWater(jug1Capacity: number, jug2Capacity: number, targetCapacity: number): boolean {
  const set: Set<string> = new Set()
  set.add('0#0')
  const queue: number[][] = [[0, 0]]

  while (queue.length) {
    const [x, y] = queue.shift()!
    if (x === targetCapacity || y === targetCapacity || x + y === targetCapacity)
      return true

    for (let i = 0; i < 6; i++) {
      const [nx, ny] = getNext(i, x, y)
      const str = `${nx}#${ny}`
      if (set.has(str))
        continue

      set.add(str)
      queue.push([nx, ny])
    }
  }

  return false

  // 状态转移方程
  function getNext(k: number, x: number, y: number) {
    switch (k) {
      case 0: return [x, 0]
      case 1: return [0, y]
      case 2: {
        const rest = Math.min(x, jug2Capacity - y)
        return [x - rest, y + rest]
      }
      case 3: {
        const rest = Math.min(y, jug1Capacity - x)
        return [x + rest, y - rest]
      }
      case 4: return [x, jug2Capacity]
      default: return [jug1Capacity, y]
    }
  }
}
```
