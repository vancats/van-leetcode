# 508.出现次数最多的子树元素和

> 难度：中等

## 题目

给你一个二叉树的根结点 root ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

一个结点的 「子树元素和」 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

### 示例

#### 示例 1：

```
输入: root = [5,2,-3]
输出: [2,-3,4]
```

#### 示例 2：

```
输入: root = [5,2,-5]
输出: [2]
```

### 提示:

```
节点数在 [1, 104] 范围内
-105 <= Node.val <= 105
```

## 题解

```ts
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度O(N) 空间复杂度O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function findFrequentTreeSum(root: TreeNode | null): number[] {
  if (!root) return []
  const map: Map<number, number> = new Map()
  getTotal(root)
  const arr: number[][] = [...map.entries()].sort((a, b) => b[1] - a[1])
  const res: number[] = []
  for (let i = 0; i < arr.length && arr[i][1] === arr[0][1]; i++) res.push(arr[i][0])
  return res

  function getTotal(root: TreeNode): number {
    const left = root.left ? getTotal(root.left) : 0
    const right = root.right ? getTotal(root.right) : 0
    const cur = root.val + left + right
    map.set(cur, (map.get(cur) || 0) + 1)
    return cur
  }
}
```
