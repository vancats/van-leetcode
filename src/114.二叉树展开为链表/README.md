# 114.二叉树展开为链表

> 难度：中等

## 题目

给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。

### 示例

#### 示例 1：

```
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
```

#### 示例 2：

```
输入：root = []
输出：[]
```

#### 示例 3：

```
输入：root = [0]
输出：[0]
```

### 提示：

```
树中结点数在范围 [0, 2000] 内
-100 <= Node.val <= 100
```

> 进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？

```ts
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {TreeNode} root
 */
export function flatten(root: TreeNode | null) {
    if (!root) return null
    convertTree(root)
}

function convertTree(root: TreeNode) {
    if (!root.left && !root.right) {
        return { start: root, end: root }
    }
    const left = root.left
    root.left = null
    if (!left) {
        const { start, end } = convertTree(root.right!)
        root.right = start
        end.right = null
        return { start: root, end }
    }
    if (!root.right) {
        const { start, end } = convertTree(left)
        root.right = start
        end.right = null
        return { start: root, end }
    }
    const { start: leftStart, end: leftEnd } = convertTree(left)
    const { start: rightStart, end: rightEnd } = convertTree(root.right)
    root.right = leftStart
    leftEnd.right = rightStart
    rightEnd.right = null
    return { start: root, end: rightEnd }
}
```
