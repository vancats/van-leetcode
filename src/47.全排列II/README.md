# 47.全排列II

> 难度：中等
>
> https://leetcode-cn.com/problems/permutations-ii/

## 题目

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

### 示例

#### 示例 1：

```
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

#### 示例 2：

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

### 提示：

```
1 <= nums.length <= 8
-10 <= nums[i] <= 10
```

## 题解

```ts
/**
 * @description: 待定
 * @return {*}
 * @param {number} nums
 */
export function permuteUnique(nums: number[]): number[][] {
  const n = nums.length
  const res: number[][] = []
  const visited: number[] = new Array(n).fill(0)
  nums.sort((a, b) => a - b)
  dp(0)
  return res

  function dp(ind: number, cur: number[] = []) {
    if (ind === n)
      return res.push(cur.slice())

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = 1
        cur.push(nums[i])
        dp(ind + 1, cur)
        cur.pop()
        visited[i] = 0
        while (nums[i] === nums[i + 1]) i++
      }
    }
  }
}
```
