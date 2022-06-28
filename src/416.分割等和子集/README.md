# 416.分割等和子集

> 难度：中等

## 题目

给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

### 示例

#### 示例 1：

```
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
```

#### 示例 2：

```
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
```

### 提示：

```
1 <= nums.length <= 200
1 <= nums[i] <= 100
```

## 题解

```ts
/**
 * @description: 待定
 * @return {*}
 * @param {number} nums
 */
export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((p, v) => p + v)
  const max = Math.max(...nums)
  if (max > sum / 2) return false
  if (sum % 2) return false
  let dp: Set<number> = new Set()
  for (let i = 0; i < nums.length; i++) {
    const newDp: Set<number> = new Set()
    newDp.add(nums[i])
    dp.forEach(v => {
      newDp.add(v)
      newDp.add(v + nums[i])
    })
    if (dp.has(sum / 2)) return true
    dp = newDp
  }
  return false
}

/**
 * @description: 时间复杂度 O(N * target) 空间复杂度 O(target)
 * @return {*}
 * @param {number} nums
 */
export function canPartition2(nums: number[]): boolean {
  const target = nums.reduce((p, v) => p + v) / 2
  const max = Math.max(...nums)
  if (max > target) return false
  if (target !== Math.floor(target)) return false

  const dp: boolean[] = new Array(target + 1).fill(false)
  dp[0] = true
  for (const num of nums) {
    for (let j = target; j >= num; j--)
      dp[j] = dp[j] || dp[j - num]
  }
  return dp[target]
}
```
