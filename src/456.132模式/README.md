# 456.132模式

> 难度：中等
>
> https://leetcode.cn/problems/132-pattern/

## 题目

给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

### 示例

#### 示例 1：

```
输入：nums = [1,2,3,4]
输出：false
解释：序列中不存在 132 模式的子序列。
```

#### 示例 2：

```
输入：nums = [3,1,4,2]
输出：true
解释：序列中有 1 个 132 模式的子序列： [1, 4, 2] 。
```

#### 示例 3：

```
输入：nums = [-1,3,2,0]
输出：true
解释：序列中有 3 个 132 模式的的子序列：[-1, 3, 2]、[-1, 3, 0] 和 [-1, 2, 0] 。
```

### 提示：

```
n == nums.length
1 <= n <= 2 * 105
-109 <= nums[i] <= 109
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function find132pattern(nums: number[]): boolean {
  const n = nums.length
  const stack: number[] = []
  const leftArr: number[] = new Array(n).fill(Number.MAX_VALUE)
  // 左边界最小值
  for (let i = 1; i < n; i++)
    leftArr[i] = Math.min(leftArr[i - 1], nums[i - 1])
  for (let i = n - 1; i >= 0; i--) {
    let val = nums[i]
    // 获取被弹出栈的最后一个值来比较
    while (stack.length && nums[i] > stack[stack.length - 1])
      val = stack.pop()!
    stack.push(nums[i])
    if (val < nums[i] && val > leftArr[i] && nums[i] > leftArr[i])
      return true
  }
  return false
}
```
