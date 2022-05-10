# 449.序列化和反序列化二叉搜索树

> 难度：中等
>
> https://leetcode.cn/problems/serialize-and-deserialize-bst/

## 题目

序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。

设计一个算法来序列化和反序列化 二叉搜索树 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。

编码的字符串应尽可能紧凑。

### 示例

#### 示例 1：

```
输入：root = [2,1,3]
输出：[2,1,3]
```

#### 示例 2：

```
输入：root = []
输出：[]
```

### 提示：

```
树中节点数范围是 [0, 104]
0 <= Node.val <= 104
题目数据 保证 输入的树是一棵二叉搜索树。
```

## 题解

```ts
import { TreeNode } from './../../utils/TreeNode'

export function serialize(root: TreeNode | null): string {
  return `${getFirst(root).join(',')}&${getMid(root).join(',')}`
}

export function deserialize(data: string): TreeNode | null {
  const arr = data.split('&')
  const preorder = arr[0].split(',')
  const inorder = arr[1].split(',')
  if (preorder[0] === '')
    return null
  return buildTree(preorder, inorder)
}

// 先序遍历
function getFirst(root: TreeNode | null, ans: number[] = []): number[] {
  if (!root)
    return []
  ans.push(root.val)
  root.left && getFirst(root.left, ans)
  root.right && getFirst(root.right, ans)
  return ans
}

// 中序遍历
function getMid(root: TreeNode | null, ans: number[] = []): number[] {
  if (!root)
    return []
  root.left && getMid(root.left, ans)
  ans.push(root.val)
  root.right && getMid(root.right, ans)
  return ans
}

// 从先序和中序遍历树
function buildTree(preorder: string[], inorder: string[]): TreeNode | null {
  if (!preorder.length) return null
  let i = 0
  for (; i < inorder.length; i++)
    if (preorder[0] === inorder[i]) break

  const leftPre: string[] = preorder.slice(1, i + 1)
  const rightPre: string[] = preorder.slice(i + 1)
  const leftIn: string[] = inorder.slice(0, i)
  const rightIn: string[] = inorder.slice(i + 1)

  const node = new TreeNode(Number(preorder[0]))
  node.left = buildTree(leftPre, leftIn)
  node.right = buildTree(rightPre, rightIn)

  return node
}
```
