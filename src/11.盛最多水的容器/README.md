# 11.盛最多水的容器

> 难度：中等
>
> https://leetcode-cn.com/problems/container-with-most-water/

## 题目

给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

### 示例

#### 示例 1：

![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)
```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
```

#### 示例 2：

```
输入：height = [1,1]
输出：1
```

### 提示：

```
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} height
 */
export function maxArea(height: number[]): number {
  let max = 0, left = 0, right = height.length - 1
  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]))
    if (height[left] > height[right]) right--
    else left++
  }
  return max
}turn max
}
```