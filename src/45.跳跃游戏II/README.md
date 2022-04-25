# 45.跳跃游戏II

> 难度：中等
>
> https://leetcode-cn.com/problems/jump-game-ii/

## 题目

给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。

 

示例 1:

输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
示例 2:

输入: nums = [2,3,0,1,4]
输出: 2
 

提示:

1 <= nums.length <= 104
0 <= nums[i] <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。

### 示例

#### 示例 1:

```
输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```

#### 示例 2:

```
输入: nums = [2,3,0,1,4]
输出: 2
```

### 提示:

```
1 <= nums.length <= 104
0 <= nums[i] <= 1000
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function jump(nums: number[]): number {
  if (nums.length <= 1) return 0
  let cnt = 1
  // 当前位置的下一位
  let pre = 1
  // 当前能到达的最远位置
  let pos = nums[0]
  while (pos + 1 < nums.length) {
    // 遍历从当前位置的下一位到最远位置，获取下一位可以到达的最远位置
    let j = pre
    for (let i = pre + 1; i <= pos; i++) {
      if (i + nums[i] > j + nums[j])
        j = i
    }
    pre = pos + 1
    pos = j + nums[j]
    cnt++
  }
  return cnt
}
```
