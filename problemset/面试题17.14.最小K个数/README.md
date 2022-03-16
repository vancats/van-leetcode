# 面试题17.14.最小K个数

> 难度：中等
>
> https://leetcode-cn.com/problems/smallest-k-lcci/

## 题目

设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

### 示例

```
输入： arr = [1,3,5,7,2,4,6,8], k = 4
输出： [1,2,3,4]
```

### 提示：

```
0 <= len(arr) <= 100000
0 <= k <= min(100000, len(arr))
```

## 题解

```typescript
import { sortQuick } from '../../utils/SortQuick'
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(h) h 是调用栈的深度
 * @return {*}
 * @param {number} arr
 */
export function smallestK(arr: number[], k: number): number[] {
  sortQuick(arr)
  return arr.slice(0, k)
}
```