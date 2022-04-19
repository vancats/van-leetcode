# 52.N皇后II

> 难度：困难
>
> https://leetcode-cn.com/problems/n-queens-ii/

## 题目

n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

### 示例

#### 示例 1：

```
输入：n = 4
输出：2
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

#### 示例 2：

```
输入：n = 1
输出：1
```

### 提示：

```
1 <= n <= 9
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N!) 空间复杂度 O(N)
 * @return {*}
 * @param {number} n
 */
export function totalNQueens(n: number): number {
  const arr: string[] = new Array(n).fill(0).map(() => '*'.repeat(n))
  let res = 0
  dfs(0, arr)

  return res

  function dfs(ind: number, arr: string[]) {
    // 结束条件
    if (ind === n) {
      res++
      return
    }
    // 获取当前字符串
    const s = arr[ind]
    // 如果当前没有可选择的值
    if (s === '.'.repeat(n)) return
    // 遍历当前字符串，如果是 * 则 dfs
    for (let i = 0; i < s.length; i++) {
      // 复制一份
      const dump = arr.slice()
      if (s[i] === '.') continue
      // 更新该行以下的值
      for (let j = ind + 1; j < s.length; j++) {
        const temp = dump[j].split('')
        temp[i] = '.'
        if (i + j - ind < n)
          temp[i + j - ind] = '.'

        if (i + ind - j >= 0)
          temp[i + ind - j] = '.'
        dump[j] = temp.join('')
      }

      dfs(ind + 1, dump)
    }
  }
}
```
