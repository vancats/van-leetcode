# 剑指OfferII082.含有重复元素集合的组合

> 难度：中等

## 题目

给定一个可能有重复数字的整数数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。 

### 示例

#### 示例 1:

```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```
#### 示例 2:

```
输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
```
 


### 提示:

```
1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
```

## 题解

```ts
/**
 * @description: 待定
 * @return {*}
 * @param {number} candidates
 * @param {number} target
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const arr: number[] = []
  candidates.sort((a, b) => a - b)
  dfs(0)
  return res

  function dfs(index: number, cur = 0) {
    if (cur > target) return
    if (cur === target)
      return res.push(arr.slice())
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue
      arr.push(candidates[i])
      dfs(i + 1, cur + candidates[i])
      arr.pop()
    }
  }
}
```
