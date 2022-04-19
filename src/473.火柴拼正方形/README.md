# 473.火柴拼正方形

> 难度：中等
>
> https://leetcode-cn.com/problems/matchsticks-to-square/

## 题目

你将得到一个整数数组 matchsticks ，其中 matchsticks[i] 是第 i 个火柴棒的长度。你要用 所有的火柴棍 拼成一个正方形。你 不能折断 任何一根火柴棒，但你可以把它们连在一起，而且每根火柴棒必须 使用一次 。

如果你能使这个正方形，则返回 true ，否则返回 false 。

### 示例

#### 示例 1:

```
输入: matchsticks = [1,1,2,2,2]
输出: true
解释: 能拼成一个边长为2的正方形，每边两根火柴。
```

#### 示例 2:

```
输入: matchsticks = [3,3,3,3,4]
输出: false
解释: 不能用所有火柴拼成一个正方形。
```

### 提示:

```
1 <= matchsticks.length <= 15
1 <= matchsticks[i] <= 108
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(4^N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} matchsticks
 */
export function makesquare(matchsticks: number[]): boolean {
  matchsticks.sort((a, b) => b - a)

  const side = matchsticks.reduce((a, b) => a + b, 0) / 4
  if (Math.floor(side) !== side) return false
  const sides = [side, side, side, side]
  return dfs(sides, 0)

  function dfs(sides: number[], ind: number): boolean {
    if (ind === matchsticks.length) return true
    for (let i = 0; i < 4; i++) {
      if (sides[i] < matchsticks[ind]) continue
      if (sides[i] === matchsticks[ind] || sides[i] >= matchsticks[ind] + matchsticks[matchsticks.length - 1]) {
        sides[i] -= matchsticks[ind]
        if (dfs(sides, ind + 1)) return true
        sides[i] += matchsticks[ind]
      }
    }
    return false
  }
}
```
