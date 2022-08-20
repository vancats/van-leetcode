# 1054.距离相等的条形码

> 难度：中等

## 题目

在一个仓库里，有一排条形码，其中第 i 个条形码为 barcodes[i]。

请你重新排列这些条形码，使其中任意两个相邻的条形码不能相等。 你可以返回任何满足该要求的答案，此题保证存在答案。

### 示例

#### 示例 1：

```
输入：barcodes = [1,1,1,2,2,2]
输出：[2,1,2,1,2,1]
```

#### 示例 2：

```
输入：barcodes = [1,1,1,1,2,2,3,3]
输出：[1,3,1,3,2,1,2,1]
```

### 提示：

```
1 <= barcodes.length <= 10000
1 <= barcodes[i] <= 10000
```

## 题解

```ts
import { Heap } from '../../utils/Heap'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} barcodes
 */
export function rearrangeBarcodes(barcodes: number[]): number[] {
  const cntArr: number[][] = []
  barcodes.forEach(num => {
    const ind = cntArr.findIndex(item => item[0] === num)
    if (ind > -1)
      cntArr[ind][1]++
    else
      cntArr.push([num, 1])
  })
  const heap = new Heap((a, b) => b[1] < a[1])
  cntArr.forEach(item => heap.push(item))
  const res: number[] = []
  while (heap.top) {
    let tempVal
    if (heap.top[0] === res[res.length - 1])
      tempVal = heap.pop()

    const [val, cnt] = heap.pop()
    res.push(val)
    if (cnt > 1)
      heap.push([val, cnt - 1])

    if (tempVal)
      heap.push(tempVal)
  }
  return res
}
```
