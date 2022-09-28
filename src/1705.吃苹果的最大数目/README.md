# 1705.吃苹果的最大数目

> 难度：中等

## 题目

有一棵特殊的苹果树，一连 n 天，每天都可以长出若干个苹果。在第 i 天，树上会长出 apples[i] 个苹果，这些苹果将会在 days[i] 天后（也就是说，第 i + days[i] 天时）腐烂，变得无法食用。也可能有那么几天，树上不会长出新的苹果，此时用 apples[i] == 0 且 days[i] == 0 表示。

你打算每天 最多 吃一个苹果来保证营养均衡。注意，你可以在这 n 天之后继续吃苹果。

给你两个长度为 n 的整数数组 days 和 apples ，返回你可以吃掉的苹果的最大数目。

### 示例

#### 示例 1：

```
输入：apples = [1,2,3,5,2], days = [3,2,1,4,2]
输出：7
解释：你可以吃掉 7 个苹果：
- 第一天，你吃掉第一天长出来的苹果。
- 第二天，你吃掉一个第二天长出来的苹果。
- 第三天，你吃掉一个第二天长出来的苹果。过了这一天，第三天长出来的苹果就已经腐烂了。
- 第四天到第七天，你吃的都是第四天长出来的苹果。
```

#### 示例 2：

```
输入：apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]
输出：5
解释：你可以吃掉 5 个苹果：
- 第一天到第三天，你吃的都是第一天长出来的苹果。
- 第四天和第五天不吃苹果。
- 第六天和第七天，你吃的都是第六天长出来的苹果。
```

### 提示：

```
apples.length == n
days.length == n
1 <= n <= 2 * 104
0 <= apples[i], days[i] <= 2 * 104
只有在 apples[i] = 0 时，days[i] = 0 才成立
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} apples
 * @param {number} days
 */
export function eatenApples(apples: number[], days: number[]): number {
  // 存储苹果过期日期和数量
  const arr: number[][] = []
  let i = 0
  let res = 0
  while (i < apples.length || arr.length) {
    // 如果苹果已过期，弹出
    while (arr.length && i >= arr[0][0]) arr.shift()
    const day = i + days[i]
    if (apples[i]) {
      let flag = true
      for (let j = 0; j < arr.length; j++) {
        // 如果有值，修改
        if (arr[j][0] === day) {
          arr[j][1] += apples[i]
          flag = false
          break
        }
        // 如果找到了大于的值，添加
        if (arr[j][0] > day) {
          arr.splice(j, 0, [day, apples[i]])
          flag = false
          break
        }
      }
      // 如果都比该日期小，添加到最后
      if (flag)
        arr.push([day, apples[i]])
    }
    // 如果当前有苹果，更新值
    if (arr.length) {
      arr[0][1]--
      res++
      if (!arr[0][1])
        arr.shift()
    }
    i++
  }
  return res
}
```
