# 646.最长数对链

> 难度：中等

## 题目

给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。

现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。

给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

### 示例：

```
输入：[[1,2], [2,3], [3,4]]
输出：2
解释：最长的数对链是 [1,2] -> [3,4]
```

### 提示：

```
给出数对的个数在 [1, 1000] 范围内。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} pairs
 */
export function findLongestChain(pairs: number[][]): number {
  pairs.sort((a: number[], b: number[]) => a[1] - b[1])
  let end = pairs[0][1]
  let cnt = 1
  // 永远取右边界，就可以给后面的值提供最大的范围
  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i][0] <= end) continue
    cnt++
    end = pairs[i][1]
  }
  return cnt
}
```
