# 40.组合总和II

> 难度：中等

## 题目
给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。 

### 示例

#### 示例 1:

```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[[1,1,6],[1,2,5],[1,7],[2,6]]
```

#### 示例 2:

```
输入: candidates = [2,5,2,1,2], target = 5,
输出:
[[1,2,2],[5]]
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
 * @description: 时间复杂度 O(2^N * N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} candidates
 * @param {number} target
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)
  const n = candidates.length
  const res: number[][] = []
  const used: boolean[] = new Array(n).fill(false)
  dfs(0, 0)
  return res

  function dfs(ind: number, curSum: number, curRes: number[] = []) {
    if (curSum === target) {
      res.push(curRes.slice())
      return
    }
    for (let i = ind; i < n && curSum + candidates[i] <= target; i++) {
      // 如果当前值与前值相等，并且前值的 used 值为 false（已经遍历过而不是正在遍历中），则跳过
      if (i > 0 && candidates[i] === candidates[i - 1] && !used[i - 1]) continue
      used[i] = true
      dfs(i + 1, curSum + candidates[i], [...curRes, candidates[i]])
      used[i] = false
    }
  }
}
```
