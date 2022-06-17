# 1089.复写零

> 难度：中等
>
> https://leetcode.cn/problems/duplicate-zeros/

## 题目

给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

注意：请不要在超过该数组长度的位置写入元素。

要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。

### 示例

#### 示例 1：

```
输入：[1,0,2,3,0,4,5,0]
输出：null
解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
```

#### 示例 2：

```
输入：[1,2,3]
输出：null
解释：调用函数后，输入的数组将被修改为：[1,2,3]
```

### 提示：

```
1 <= arr.length <= 10000
0 <= arr[i] <= 9
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} arr
 */
export function duplicateZeros(arr: number[]): void {
  let cnt = 0
  let flag = false
  for (let i = 0; i < arr.length; cnt++) {
    if (++i >= arr.length) break
    if (arr[cnt] === 0) {
      if (++i >= arr.length) {
        flag = true
        break
      }
    }
  }
  let i = arr.length - 1
  arr[i--] = arr[cnt--]
  if (flag) arr[i--] = arr[cnt + 1]
  for (; i >= 0; i--) {
    arr[i] = arr[cnt]
    !arr[cnt--] && (arr[--i] = arr[cnt + 1])
  }
}
```
