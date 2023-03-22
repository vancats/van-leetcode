# 1626.无矛盾的最佳球队

> 难度：中等

## 题目

假设你是球队的经理。对于即将到来的锦标赛，你想组合一支总体得分最高的球队。球队的得分是球队中所有球员的分数 总和 。

然而，球队中的矛盾会限制球员的发挥，所以必须选出一支 没有矛盾 的球队。如果一名年龄较小球员的分数 严格大于 一名年龄较大的球员，则存在矛盾。同龄球员之间不会发生矛盾。

给你两个列表 scores 和 ages，其中每组 scores[i] 和 ages[i] 表示第 i 名球员的分数和年龄。请你返回 所有可能的无矛盾球队中得分最高那支的分数 。

### 示例

#### 示例 1：

```
输入：scores = [1,3,5,10,15], ages = [1,2,3,4,5]
输出：34
解释：你可以选中所有球员。
```

#### 示例 2：

```
输入：scores = [4,5,6,5], ages = [2,1,2,1]
输出：16
解释：最佳的选择是后 3 名球员。注意，你可以选中多个同龄球员。
```

#### 示例 3：

```
输入：scores = [1,2,3,5], ages = [8,9,10,1]
输出：6
解释：最佳的选择是前 3 名球员。
```

### 提示：

```
1 <= scores.length, ages.length <= 1000
scores.length == ages.length
1 <= scores[i] <= 106
1 <= ages[i] <= 1000
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} scores
 * @param {number} ages
 */
export function bestTeamScore(scores: number[], ages: number[]): number {
    const n = scores.length
    const arr: number[][] = new Array(n).fill(0).map((_, i) => [scores[i], ages[i]])

    // 主按分数排名，次按年龄，均从小到大
    arr.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })
    let res = 0
    // dp[i]: 以第 i 个值为结尾的最高分数
    const dp = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j][1] <= arr[i][1]) {
                dp[i] = Math.max(dp[i], dp[j])
            }
        }
        dp[i] += arr[i][0]
        res = Math.max(res, dp[i])
    }
    return res
}
```
