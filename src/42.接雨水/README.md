# 42.接雨水

> 难度：困难
>
> https://leetcode.cn/problems/trapping-rain-water/

## 题目

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

### 示例

#### 示例 1：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)
```
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
```

#### 示例 2：

```
输入：height = [4,2,0,3,2,5]
输出：9
```

#### 提示：

```
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
```

## 题解

```ts
/**
 * 1. 动态规划 收集左右最大值集合
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} height
 */
export function trap1(height: number[]): number {
  const n = height.length
  const leftArr: number[] = new Array(n).fill(0)
  const rightArr: number[] = new Array(n).fill(0)
  let res = 0

  leftArr[0] = height[0]
  for (let i = 1; i < n; i++) {
    if (height[i] > leftArr[i - 1])
      leftArr[i] = height[i]
    else
      leftArr[i] = leftArr[i - 1]
  }

  rightArr[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    if (height[i] > rightArr[i + 1])
      rightArr[i] = height[i]
    else
      rightArr[i] = rightArr[i + 1]
  }
  for (let i = 0; i < n; i++)
    res += Math.min(leftArr[i], rightArr[i]) - height[i]

  return res
}

/**
 * 2. 单调栈 计算洼地
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} height
 */
export function trap2(height: number[]): number {
  const n = height.length
  const stack: number[] = []

  let res = 0
  for (let i = 0; i < n; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const val = stack.pop()!
      if (!stack.length) continue
      const ind = stack[stack.length - 1]
      const curWidth = Math.min(height[i], height[ind]) - height[val]
      res += curWidth * (i - ind - 1)
    }
    stack.push(i)
  }
  return res
}

/**
 * 3. 双指针 指针代替数组存储最大值即可
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} height
 */
export function trap3(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let res = 0
  let leftMax = 0
  let rightMax = 0
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (leftMax < rightMax)
      res += leftMax - height[left++]
    else
      res += rightMax - height[right--]
  }
  return res
}
```
