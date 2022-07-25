# 1590.使数组和能被P整除

> 难度：中等

## 题目

给你一个正整数数组 nums，请你移除 最短 子数组（可以为 空），使得剩余元素的 和 能被 p 整除。 不允许 将整个数组都移除。

请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 -1 。

子数组 定义为原数组中连续的一组元素。

### 示例

#### 示例 1：

```
输入：nums = [3,1,4,2], p = 6
输出：1
解释：nums 中元素和为 10，不能被 p 整除。我们可以移除子数组 [4] ，剩余元素的和为 6 。
```

#### 示例 2：

```
输入：nums = [6,3,5,2], p = 9
输出：2
解释：我们无法移除任何一个元素使得和被 9 整除，最优方案是移除子数组 [5,2] ，剩余元素为 [6,3]，和为 9 。
```

#### 示例 3：

```
输入：nums = [1,2,3], p = 3
输出：0
解释：和恰好为 6 ，已经能被 3 整除了。所以我们不需要移除任何元素。
```

#### 示例  4：

```
输入：nums = [1,2,3], p = 7
输出：-1
解释：没有任何方案使得移除子数组后剩余元素的和被 7 整除。
```

#### 示例 5：

```
输入：nums = [1000000000,1000000000,1000000000], p = 3
输出：0
```

### 提示：

```
1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= p <= 109
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} p
 */
export function minSubarray(nums: number[], p: number): number {
  const n = nums.length
  let res = Infinity
  const max = nums.reduce((c, v) => (c + v) % p, 0)
  if (!max) return 0

  // 处理前缀树
  const prefix: number[] = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++)
    prefix[i + 1] = prefix[i] + nums[i]

  // 用哈希来计数
  const map: Map<number, number> = new Map()
  for (let i = 0; i <= n; i++) {
    // 获取当前值与max差的哈希对应值
    const index = map.get((prefix[i] - max) % p)
    // 如果存在，则代表前面有这个值，更新值
    if (index !== undefined)
      res = Math.min(res, i - index)

    // 将该值的下标更新到哈希表中
    map.set(prefix[i] % p, i)
  }

  // 减去整个数据也返回 -1
  return [Infinity, n].includes(res) ? -1 : res
}
```
