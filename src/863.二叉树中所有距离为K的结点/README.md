# 863.二叉树中所有距离为K的结点

> 难度：中等
>
> https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/

## 题目

给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 k 。

返回到目标结点 target 距离为 k 的所有结点的值的列表。 答案可以以 任何顺序 返回。

### 示例

#### 示例 1：

```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
输出：[7,4,1]
解释：所求结点为与目标结点（值为 5）距离为 2 的结点，值分别为 7，4，以及 1
```

#### 示例 2:

```
输入: root = [1], target = 1, k = 3
输出: []
```

### 提示:

```
节点数在 [1, 500] 范围内
0 <= Node.val <= 500
Node.val 中所有值 不同
目标结点 target 是树上的结点。
0 <= k <= 1000
```

## 题解

```typescript
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 */
export function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  // 代表距离目标节点的层级差
  let cnt = 0
  const ans: number[] = []
  getResult(root, target!.val, k, ans)
  return ans

  function getResult(root: TreeNode | null, target: number, k: number, ans: number[]): boolean {
    if (!root) return false
    // 找到当前节点并且处理下面的节点
    if (root.val === target) {
      getDeepNode(root, 0, k, ans)
      return true
    }

    // 处理目标节点的祖先节点
    if (getResult(root.left, target, k, ans)) {
      // cnt 是和目标节点的层级差
      k -= (++cnt)
      // 当 k 为 0 时。代表是最上方了，不需要再寻找另一侧子节点
      if (k === 0)
        ans.push(root.val)
      // 处理另一侧的节点，层级是 k - 1
      getDeepNode(root.right, 0, k - 1, ans)
      return true
    }

    // 同上
    if (getResult(root.right, target, k, ans)) {
      k -= (++cnt)
      if (k === 0)
        ans.push(root.val)
      getDeepNode(root.left, 0, k - 1, ans)
      return true
    }
    return false
  }
}

/**
 * @description: 对当前节点的 k 层子节点做 push 操作
 */
function getDeepNode(root: TreeNode | null, ind: number, k: number, ans: number[]): void {
  if (!root)
    return
  if (ind === k) {
    ans.push(root.val)
    return
  }
  getDeepNode(root.left, ind + 1, k, ans)
  getDeepNode(root.right, ind + 1, k, ans)
}
```
