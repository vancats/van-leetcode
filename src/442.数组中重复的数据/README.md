# 442.数组中重复的数据

> 难度：中等
>
> https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/

## 题目

给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。

你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。

### 示例

#### 示例 1：

```
输入：nums = [4,3,2,7,8,2,3,1]
输出：[2,3]
```

#### 示例 2：

```
输入：nums = [1,1,2]
输出：[1]
```

#### 示例 3：

```
输入：nums = [1]
输出：[]
```

### 提示：

```
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
nums 中的每个元素出现 一次 或 两次
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function findDuplicates(nums: number[]): number[] {
  const n = nums.length
  const res: number[] = []
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0 || nums[i] - 1 === i) {
      continue
    }
    else {
      const next = nums[nums[i] - 1]
      if (next === nums[i]) {
        res.push(nums[i])
        nums[nums[i] - 1] = nums[i] = 0
      }
      else {
        swap(nums[i] - 1, i--)
      }
    }
  }
  return res
  function swap(i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
}
```
