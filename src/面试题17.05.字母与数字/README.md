# 面试题17.05.字母与数字

> 难度：中等

## 题目

给定一个放有字母和数字的数组，找到最长的子数组，且包含的字母和数字的个数相同。

返回该子数组，若存在多个最长子数组，返回左端点下标值最小的子数组。若不存在这样的数组，返回一个空数组。

### 示例

#### 示例 1:

```
输入: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7","H","I","J","K","L","M"]

输出: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7"]
```

#### 示例 2:

```
输入: ["A","A"]

输出: []
```

> 提示： array.length <= 100000

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} array
 */
export function findLongestSubarray(array: string[]): string[] {
  const n = array.length
  const cntArr: number[] = new Array(n + 1).fill(0)
  array.forEach((item, index) => {
    cntArr[index + 1] = cntArr[index] + (isNaN(Number(item)) ? 1 : -1)
  })
  let left = 0
  let right = 0
  const map: Map<number, number> = new Map()
  for (let i = 0; i <= n; i++) {
    if (map.has(cntArr[i])) {
      const tempLeft = map.get(cntArr[i])!
      if (i - tempLeft > right - left) {
        left = tempLeft
        right = i
      }
    }
    else {
      map.set(cntArr[i], i)
    }
  }
  return array.slice(left, right)
}
```
