# 46.全排列

> 难度：中等
>
> https://leetcode-cn.com/problems/permutations/

## 题目

给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

### 示例

#### 示例 1：

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

#### 示例 2：

```
输入：nums = [0,1]
输出：[[0,1],[1,0]]
```

#### 示例 3：

```
输入：nums = [1]
输出：[[1]]
```

### 提示：

```
1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同
```

## 题解

```ts
/**
 * @description: 待定
 * @return {*}
 * @param {number} nums
 */
export function permute(nums: number[]): number[][] {
  const res: number[][] = []
  const visited = {}
  dp(0)
  return res
  function dp(ind: number, cur: number[] = []) {
    if (cur.length === nums.length)
      return res.push(cur.slice())

    for (let i = 0; i < nums.length; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1
        cur.push(nums[i])
        dp(ind + 1, cur)
        cur.pop()
        visited[nums[i]] = 0
      }
    }
  }
}
```
