# 954.二倍数对数组

> 难度：中等
>
> https://leetcode-cn.com/problems/array-of-doubled-pairs/

## 题目

给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后可以满足 “对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，返回 true；否则，返回 false。

### 示例

#### 示例 1：

```
输入：arr = [3,1,3,6]
输出：false
```

#### 示例 2：

```
输入：arr = [2,1,2,6]
输出：false
```

#### 示例 3：

```
输入：arr = [4,-2,2,-4]
输出：true
解释：可以用 [-2,-4] 和 [2,4] 这两组组成 [-2,-4,2,4] 或是 [2,4,-2,-4]
```

### 提示：

```
0 <= arr.length <= 3 * 104
arr.length 是偶数
-105 <= arr[i] <= 105
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} arr
 */
export function canReorderDoubled(arr: number[]): boolean {
  let map = new Map()
  // 哈希表存储
  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1)
  }
  // 判 0
  if ((map.get(0) || 0) % 2) return false

  // 将 key 放入数组并按绝对值从小到大排列
  let res: number[] = []
  for (const item of map.keys()) {
    res.push(item)
  }
  res.sort((a, b) => Math.abs(a) - Math.abs(b))

  // 循环 key，删除相应的数量
  for (const val of res) {
    if ((map.get(2 * val) || 0) < map.get(val)) {
      return false
    }
    map.set(2 * val, map.get(2 * val) - map.get(val))
  }
  return true
}
```