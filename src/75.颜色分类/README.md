# 75.颜色分类

> 难度：中等
>
> https://leetcode-cn.com/problems/sort-colors/

## 题目

给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

必须在不使用库的sort函数的情况下解决这个问题。

### 示例

#### 示例 1：

```
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
```

#### 示例 2：

```
输入：nums = [2,0,1]
输出：[0,1,2]
```

### 提示：

```
n == nums.length
1 <= n <= 300
nums[i] 为 0、1 或 2
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @param {number} nums
 * @return {*}
 */
export function sortColors(nums: number[]): void {
  threePartition(nums, 0, nums.length - 1)
}

function threePartition(nums: number[], left: number, right: number) {
  let x = left - 1, y = right + 1, i = left
  while (i < y) {
    if (nums[i] === 1) {
      i++
    } else if (nums[i] === 0) {
      x++;
      [nums[i], nums[x]] = [nums[x], nums[i]]
      i++
    } else if (nums[i] === 2) {
      y--
      [nums[i], nums[y]] = [nums[y], nums[i]]
    }
  }
}

```