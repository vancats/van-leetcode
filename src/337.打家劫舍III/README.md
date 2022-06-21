# 337.打家劫舍III

> 难度：中等
>
> https://leetcode.cn/problems/house-robber-iii/

## 题目

小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

### 示例

#### 示例 1:

```
输入: root = [3,2,3,null,3,null,1]
输出: 7
解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
```

#### 示例 2:

```
输入: root = [3,4,5,1,3,null,1]
输出: 9
解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
```

### 提示：

```
树的节点数在 [1, 104] 范围内
0 <= Node.val <= 104
```

## 题解

```ts
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function rob(root: TreeNode | null): number {
  if (!root) return 0
  function getMoney(root: TreeNode | null): number[] {
    if (!root) return [0, 0]
    // 得到左右节点的数量
    const left = getMoney(root.left)
    const right = getMoney(root.right)
    // 不选当前节点的最大值
    const notSteal = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 选择当前节点的最大值
    const steal = root.val + left[0] + right[0]
    return [notSteal, steal]
  }
  return Math.max(...getMoney(root))
}
```
