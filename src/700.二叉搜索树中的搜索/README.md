# 700.二叉搜索树中的搜索

> 难度：简单
>
> https://leetcode-cn.com/problems/search-in-a-binary-search-tree/

## 题目

给定二叉搜索树（BST）的根节点 root 和一个整数值 val。

你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

### 示例

#### 示例 1:

![](https://assets.leetcode.com/uploads/2021/01/12/tree1.jpg)
```
输入：root = [4,2,7,1,3], val = 2
输出：[2,1,3]
```

#### 示例 2:

![](https://assets.leetcode.com/uploads/2021/01/12/tree2.jpg)
```
输入：root = [4,2,7,1,3], val = 5
输出：[]
```

### 提示：

```
数中节点数在 [1, 5000] 范围内
1 <= Node.val <= 107
root 是二叉搜索树
1 <= val <= 107
```

## 题解

```typescript
import { TreeNode } from "../../utils/TreeNode"
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)w
 * @return {*}
 * @param {TreeNode} root
 * @param {number} val
 */
export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root || root.val === val) return root
  if (root.val > val) return searchBST(root.left, val)
  else return searchBST(root.right, val)
}
```