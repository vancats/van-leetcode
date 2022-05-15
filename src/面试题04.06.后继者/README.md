# 面试题04.06.后继者

> 难度：中等
>
> https://leetcode.cn/problems/successor-lcci/

## 题目

设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。

如果指定节点没有对应的“下一个”节点，则返回null。

### 示例

#### 示例 1:

```
输入: root = [2,1,3], p = 1

  2
 / \
1   3

输出: 2
```

#### 示例 2:

```
输入: root = [5,3,6,2,4,null,null,1], p = 6

      5
     / \
    3   6
   / \
  2   4
 /
1

输出: null
```

## 题解

```ts
import type { TreeNode } from '../../utils/TreeNode'
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 */
export function inorderSuccessor1(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  const stack: TreeNode[] = []
  let prev: TreeNode | null = null
  let cur: TreeNode | null = root
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()!
    if (prev && prev!.val === p!.val)
      return cur
    prev = cur
    cur = cur.right
  }
  return null
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 */
export function inorderSuccessor2(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  const midArr: number[] = getMid(root)
  let target = -1
  if (p)
    target = midArr.indexOf(p.val)

  if (target < 0 || target === midArr.length - 1)
    return null
  return findNode(root, midArr[target + 1])
  function getMid(root: TreeNode | null, ans: number[] = []) {
    if (!root)
      return ans
    root.left && getMid(root.left, ans)
    ans.push(root.val)
    root.right && getMid(root.right, ans)
    return ans
  }
  function findNode(root: TreeNode | null, val: number) {
    if (!root)
      return null
    if (root.val === val)
      return root
    return findNode(root.left, val) || findNode(root.right, val)
  }
}
```
