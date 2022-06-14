# 464.我能赢吗

> 难度：中等
>
> https://leetcode.cn/problems/can-i-win/

## 题目

在 "100 game" 这个游戏中，两名玩家轮流选择从 1 到 10 的任意整数，累计整数和，先使得累计整数和 达到或超过  100 的玩家，即为胜者。

如果我们将游戏规则改为 “玩家 不能 重复使用整数” 呢？

例如，两个玩家可以轮流从公共整数池中抽取从 1 到 15 的整数（不放回），直到累计整数和 >= 100。

给定两个整数 maxChoosableInteger （整数池中可选择的最大数）和 desiredTotal（累计和），若先出手的玩家是否能稳赢则返回 true ，否则返回 false 。假设两位玩家游戏时都表现 最佳 。

### 示例

#### 示例 1：

```
输入：maxChoosableInteger = 10, desiredTotal = 11
输出：false
解释：
无论第一个玩家选择哪个整数，他都会失败。
第一个玩家可以选择从 1 到 10 的整数。
如果第一个玩家选择 1，那么第二个玩家只能选择从 2 到 10 的整数。
第二个玩家可以通过选择整数 10（那么累积和为 11 >= desiredTotal），从而取得胜利.
同样地，第一个玩家选择任意其他整数，第二个玩家都会赢。
```

#### 示例 2:

```
输入：maxChoosableInteger = 10, desiredTotal = 0
输出：true
```

#### 示例 3:

```
输入：maxChoosableInteger = 10, desiredTotal = 1
输出：true
```

### 提示:

```
1 <= maxChoosableInteger <= 20
0 <= desiredTotal <= 300
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(2^N * N) 空间复杂度 O(2^N)
 * @return {*}
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 */
export function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  const memo: Map<number, boolean> = new Map()
  if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal)
    return false

  return dfs(0, 0)
  // useNumbers 已选择的数字置 1
  function dfs(useNumbers: number, curTotal: number): boolean {
    let res = false
    // 记忆化
    if (!memo.has(useNumbers)) {
      // 循环所有数字
      for (let i = 0; i < maxChoosableInteger; i++) {
        // 当该值未被选中
        if (!((useNumbers >> i) & 1)) {
          // 如果加上当前值已经可以得分，那就直接置 true 退出循环
          if (i + 1 + curTotal >= desiredTotal) {
            res = true
            break
          }
          else {
            // 继续往下进行，因为下一步是对方的回合，所以当 false 时才置 true
            if (!dfs(useNumbers | (1 << i), curTotal + i + 1)) {
              res = true
              break
            }
          }
        }
      }
      memo.set(useNumbers, res)
    }
    return memo.get(useNumbers)!
  }
}
```
