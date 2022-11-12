# 2170.使数组变成交替数组的最少操作数

> 难度：中等

## 题目

给你一个下标从 0 开始的数组 nums ，该数组由 n 个正整数组成。

如果满足下述条件，则数组 nums 是一个 交替数组 ：

nums[i - 2] == nums[i] ，其中 2 <= i <= n - 1 。
nums[i - 1] != nums[i] ，其中 1 <= i <= n - 1 。
在一步 操作 中，你可以选择下标 i 并将 nums[i] 更改 为 任一 正整数。

返回使数组变成交替数组的 最少操作数 。

### 示例

#### 示例 1：

```
输入：nums = [3,1,3,2,4,3]
输出：3
解释：
使数组变成交替数组的方法之一是将该数组转换为 [3,1,3,1,3,1] 。
在这种情况下，操作数为 3 。
可以证明，操作数少于 3 的情况下，无法使数组变成交替数组。
```

#### 示例 2：

```
输入：nums = [1,2,2,2,2]
输出：2
解释：
使数组变成交替数组的方法之一是将该数组转换为 [1,2,1,2,1].
在这种情况下，操作数为 2 。
注意，数组不能转换成 [2,2,2,2,2] 。因为在这种情况下，nums[0] == nums[1]，不满足交替数组的条件。
```

### 提示：

```
1 <= nums.length <= 105
1 <= nums[i] <= 105
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function minimumOperations(nums: number[]): number {
  const n = nums.length
  if (n < 2) return 0
  const map1: Map<number, number> = new Map()
  for (let i = 0; i < n; i += 2) {
    const cur = map1.get(nums[i]) || 0
    map1.set(nums[i], cur + 1)
  }
  const map2: Map<number, number> = new Map()
  for (let i = 1; i < n; i += 2) {
    const cur = map2.get(nums[i]) || 0
    map2.set(nums[i], cur + 1)
  }
  const arr1: number[][] = []
  for (const item of map1.entries())
    arr1.push(item)

  const arr2: number[][] = []
  for (const item of map2.entries())
    arr2.push(item)

  arr1.sort((a, b) => b[1] - a[1])
  arr2.sort((a, b) => b[1] - a[1])
  if (arr1[0][0] !== arr2[0][0])
    return n - arr1[0][1] - arr2[0][1]

  return n - Math.max(arr1[0][1] + ((arr2[1] && arr2[1][1]) || 0), ((arr1[1] && arr1[1][1]) || 0) + arr2[0][1])
}
```
