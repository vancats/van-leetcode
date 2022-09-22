# 698.划分为k个相等的子集

> 难度：中等

## 题目

给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

### 示例

#### 示例 1：

```
输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
输出： True
说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
```

#### 示例 2:

```
输入: nums = [1,2,3,4], k = 3
输出: false
```

### 提示：

```
1 <= k <= len(nums) <= 16
0 < nums[i] < 10000
每个元素的频率在 [1,4] 范围内
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(K^N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 */
export function canPartitionKSubsets(nums: number[], k: number): boolean {
  const sum = nums.reduce((p, c) => p + c, 0)
  nums.sort((a, b) => b - a)
  if (nums[nums.length - 1] > sum / k || sum % k) return false
  const target = sum / k
  // 创建 k 个桶
  const arr: number[] = new Array(k).fill(0)
  return backtrack(0)

  // 以小球的 index 为参数
  function backtrack(index: number): boolean {
    // 如果最后一个球也被取出，代表成功
    if (index === nums.length) return true
    // 循环每个桶，尝试把每个小球放入
    for (let i = 0; i < k; i++) {
      // 如果当前桶和上一个桶的值相等，那么放哪边效果实际上是一样的，可以直接跳过
      if (i > 0 && arr[i - 1] === arr[i]) continue
      // 如果大于了，也是跳过
      if (arr[i] + nums[index] > target) continue
      // 更新桶的值
      arr[i] += nums[index]
      // 递归调用，如果返回 true，代表可行
      if (backtrack(index + 1)) return true
      // 还原状态
      arr[i] -= nums[index]
    }
    return false
  }
}
```
