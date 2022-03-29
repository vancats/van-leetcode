# 491.递增子序列

> 难度：中等
>
> https://leetcode-cn.com/problems/increasing-subsequences/

## 题目

给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。

数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

### 示例

#### 示例 1：

```
输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
```

#### 示例 2：

```
输入：nums = [4,4,3,2,1]
输出：[[4,4]]
```

### 提示：

```
1 <= nums.length <= 15
-100 <= nums[i] <= 100
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(NlgN) 待定
 * @return {*}
 * @param {number} nums
 */
export function findSubsequences(nums: number[]): number[][] {
  let res: number[][] = []
  let temp: number[] = []
  dfs(temp, 0)
  return res

  function dfs(temp: number[], index: number) {
    if (temp.length > 1) res.push(temp.slice())
    let map = new Map()
    for (let i = index; i < nums.length; i++) {
      // 去重操作
      if (map.has(nums[i])) continue
      if (temp.length < 1 || temp[temp.length - 1] <= nums[i]) {
        temp.push(nums[i])
        map.set(nums[i], 1)
        dfs(temp, i + 1)
        temp.pop()
      }
    }
  }
}
```