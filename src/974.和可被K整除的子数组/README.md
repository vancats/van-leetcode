# 974.和可被K整除的子数组

> 难度：中等

## 题目

给定一个整数数组 nums 和一个整数 k ，返回其中元素之和可被 k 整除的（连续、非空） 子数组 的数目。

子数组 是数组的 连续 部分。

### 示例

#### 示例 1：

```
输入：nums = [4,5,0,-2,-3,1], k = 5
输出：7
解释：
有 7 个子数组满足其元素之和可被 k = 5 整除：
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
```

#### 示例 2:

```
输入: nums = [5], k = 9
输出: 0
```

### 提示:

```
1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
2 <= k <= 104
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 */
export function subarraysDivByK(nums: number[], k: number): number {
  const map: Map<number, number> = new Map()
  map.set(0, 1)
  let preNum = 0
  let cnt = 0
  nums.forEach(num => {
    preNum += num
    const mod = (preNum % k + k) % k
    cnt += (map.get(mod) || 0)
    map.set(mod, (map.get(mod) || 0) + 1)
  })
  return cnt
}
```
