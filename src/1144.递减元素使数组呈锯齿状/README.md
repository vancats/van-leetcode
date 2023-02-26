# 1144.递减元素使数组呈锯齿状

> 难度：中等

## 题目

给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1。

如果符合下列情况之一，则数组 A 就是 锯齿数组：

每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] > ...
或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < ...
返回将数组 nums 转换为锯齿数组所需的最小操作次数。

### 示例

#### 示例 1：

```
输入：nums = [1,2,3]
输出：2
解释：我们可以把 2 递减到 0，或把 3 递减到 1。
```

#### 示例 2：

```
输入：nums = [9,6,1,6,2]
输出：4
```

### 提示：

```
1 <= nums.length <= 1000
1 <= nums[i] <= 1000
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function movesToMakeZigzag(nums: number[]): number {
    return Math.min(getCnt(0), getCnt(1))
    function getCnt(ind: number) {
        let cnt = 0
        for (let i = ind; i < nums.length; i += 2) {
            const prev = nums[i - 1] || Infinity
            const next = nums[i + 1] || Infinity
            cnt += Math.max(0, nums[i] - prev + 1, nums[i] - next + 1)
        }
        return cnt
    }
}
```
