# 剑指Offer36.二叉搜索树与双向链表

> 难度：中等
>
> https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/

## 题目

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

为了让您更好地理解问题，以下面的二叉搜索树为例：

![](https://assets.leetcode.com/uploads/2018/10/12/bstdlloriginalbst.png)
我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

![](https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png)
```
特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

注意：本题与主站 426 题相同：https://leetcode-cn.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/

注意：此题对比原题有改动。
```

## 题解

```ts
import type { TreeNode } from '../../utils/TreeNode'

export function treeToDoublyList(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  let head: TreeNode | null = null
  let prev: TreeNode | null = null
  dfs(root)
  head!.left = prev
  prev!.right = head
  return head

  function dfs(root: TreeNode | null) {
    if (!root) return
    dfs(root.left)
    // 确定指向
    if (prev) prev.right = root
    // 初始化
    else head = root
    // 确定指向
    root.left = prev
    prev = root
    dfs(root.right)
  }
}
```
