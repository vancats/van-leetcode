# 945.使数组唯一的最小增量

> 难度：中等

## 题目

给你一个整数数组 nums 。每次 move 操作将会选择任意一个满足 0 <= i < nums.length 的下标 i，并将 nums[i] 递增 1。

返回使 nums 中的每个值都变成唯一的所需要的最少操作次数。

### 示例

#### 示例 1：

```
输入：nums = [1,2,2]
输出：1
解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
```

#### 示例 2：

```
输入：nums = [3,2,1,2,1,7]
输出：6
解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
```

### 提示：

```
1 <= nums.length <= 105
0 <= nums[i] <= 105
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let cnt = 0
  const stack: number[] = []
  for (let i = 0; i < nums.length; i++) {
    while (nums[i + 1] === nums[i]) stack.push(nums[i++])
    let cur = nums[i] + 1
    while (nums[i + 1] !== cur && stack.length) {
      const val = stack.pop()!
      cnt += (cur - val)
      cur++
    }
  }
  return cnt
}
```
