# 1438.绝对差不超过限制的最长连续子数组

> 难度：中等
>
> https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/

## 题目

给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

如果不存在满足条件的子数组，则返回 0 。

### 示例

#### 示例 1：

```
输入：nums = [8,2,4,7], limit = 4
输出：2
解释：所有子数组如下：
[8] 最大绝对差 |8-8| = 0 <= 4.
[8,2] 最大绝对差 |8-2| = 6 > 4.
[8,2,4] 最大绝对差 |8-2| = 6 > 4.
[8,2,4,7] 最大绝对差 |8-2| = 6 > 4.
[2] 最大绝对差 |2-2| = 0 <= 4.
[2,4] 最大绝对差 |2-4| = 2 <= 4.
[2,4,7] 最大绝对差 |2-7| = 5 > 4.
[4] 最大绝对差 |4-4| = 0 <= 4.
[4,7] 最大绝对差 |4-7| = 3 <= 4.
[7] 最大绝对差 |7-7| = 0 <= 4.
因此，满足题意的最长子数组的长度为 2 。
```

#### 示例 2：

```
输入：nums = [10,1,2,4,7,2], limit = 5
输出：4
解释：满足题意的最长子数组是 [2,4,7,2]，其最大绝对差 |2-7| = 5 <= 5 。
```

#### 示例 3：

```
输入：nums = [4,2,2,2,4,4,2,2], limit = 0
输出：3
```

### 提示：

```
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^9
0 <= limit <= 10^9
```

## 题解

```ts

/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} limit
 */
export function longestSubarray(nums: number[], limit: number): number {
  return dichotomy(0, nums.length, limit)

  function dichotomy(l: number, r: number, limit: number): number {
    if (l === r) return l
    // 1-0 模型要先加一
    const mid = (l + r + 1) >> 1
    if (check(mid, limit)) l = mid
    else r = mid - 1
    return dichotomy(l, r, limit)
  }

  function check(mid: number, limit: number): boolean {
    const q1: number[] = []
    const q2: number[] = []
    for (let i = 0; i < nums.length; i++) {
      while (nums[i] < nums[q1[q1.length - 1]]) q1.pop()
      while (nums[i] > nums[q2[q2.length - 1]]) q2.pop()
      q1.push(i)
      q2.push(i)
      if (i + 1 < mid) continue
      if (i - q1[0] === mid) q1.shift()
      if (i - q2[0] === mid) q2.shift()
      if (nums[q2[0]] - nums[q1[0]] <= limit) return true
    }
    return false
  }
}
```
