# 437.路径总和III

> 难度：中等
>
> https://leetcode.cn/problems/path-sum-iii/

## 题目

给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

### 示例

#### 示例 1：

![](https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg)
```
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
```

#### 示例 2：

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3
```

### 提示:

```
二叉树的节点个数的范围是 [0,1000]
-109 <= Node.val <= 109 
-1000 <= targetSum <= 1000 
```

## 题解

```ts
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 前缀和 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {number} targetSum
 */
export function pathSum(root: TreeNode | null, targetSum: number): number {
  const map: Map<number, number> = new Map()
  map.set(0, 1)
  return dfs(root, 0)

  function dfs(root: TreeNode | null, curSum: number): number {
    if (!root) return 0
    // 当前的前缀和
    curSum += root.val
    // 获取与当前前缀和相差 targetSum 的数量，这个就是以当前位置为结束点，前面的所有可能
    let ret = map.get(curSum - targetSum) || 0
    // 设置当前前缀和值的数量
    map.set(curSum, (map.get(curSum) || 0) + 1)
    // 递归查找子节点
    ret += dfs(root.left, curSum)
    ret += dfs(root.right, curSum)
    // 清除内容，保证回溯准确性
    map.set(curSum, map.get(curSum)! - 1)
    return ret
  }
}

/**
 * @description: DFS 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {number} targetSum
 */
export function pathSum1(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0
  let res = dfs(root, targetSum)
  res += pathSum(root.left, targetSum)
  res += pathSum(root.right, targetSum)
  return res

  function dfs(root: TreeNode | null, restSum: number): number {
    if (!root) return 0
    let ret = 0
    if (root.val === restSum) ret++
    ret += dfs(root.left, restSum - root.val)
    ret += dfs(root.right, restSum - root.val)
    return ret
  }
}
```
