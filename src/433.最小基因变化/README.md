# 433.最小基因变化

> 难度：中等
>
> https://leetcode-cn.com/problems/minimum-genetic-mutation/

## 题目

基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。

假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。

例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。

给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。

注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。

### 示例

#### 示例 1：

```
输入：start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
输出：1
```

#### 示例 2：

```
输入：start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
输出：2
```

#### 示例 3：

```
输入：start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
输出：3
```

### 提示：

```
start.length == 8
end.length == 8
0 <= bank.length <= 10
bank[i].length == 8
start、end 和 bank[i] 仅由字符 ['A', 'C', 'G', 'T'] 组成
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(NMC) 空间复杂度 O(NM) N 数组长度 M = 8 序列长度 C = 4 变化长度
 * @return {*}
 * @param {string} start
 * @param {string} end
 * @param {string} bank
 */
export function minMutation(start: string, end: string, bank: string[]): number {
  if (!bank.includes(end))
    return -1
  let cnt = 0
  const set: Set<string> = new Set()
  // 初始化数组到 set
  bank.forEach(item => set.add(item))
  // 初始化队列
  const queue: string[] = [start]
  const flag = ['A', 'C', 'G', 'T']
  while (queue.length) {
    cnt++
    const ind = queue.length
    for (let m = 0; m < ind; m++) {
      const str = queue.shift()!
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {
          if (str[i] === flag[j])
            continue
          const next = str.slice(0, i) + flag[j] + str.slice(i + 1)
          if (next === end)
            return cnt
          if (set.has(next)) {
            set.delete(next)
            queue.push(next)
          }
        }
      }
    }
  }
  return -1
}
```
