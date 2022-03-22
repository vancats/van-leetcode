# 1305.两棵二叉搜索树中的所有元素

> 难度：中等
>
> https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/

## 题目

给你 root1 和 root2 这两棵二叉搜索树。请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。

### 示例

#### 示例 1：

```
输入：root1 = [2,1,4], root2 = [1,0,3]
输出：[0,1,1,2,3,4]
```

#### 示例 2：

```
输入：root1 = [1,null,8], root2 = [8,1]
输出：[1,1,8,8] 
```

### 提示：

```
每棵树的节点数在 [0, 5000] 范围内
-105 <= Node.val <= 105
```

## 题解

```typescript
import { TreeNode } from "../../utils/TreeNode"
/**
 * @description: 时间复杂度 O(M + N) 空间复杂度 O(M + N)
 * @return {*}
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 */
export function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const arr1 = orderSort(root1)
  const arr2 = orderSort(root2)
  let i = 0, j = 0, k = 0, res: number[] = []
  while (i < arr1.length || j < arr2.length) {
    if ((j >= arr2.length) || (i < arr1.length && arr1[i] <= arr2[j])) {
      res[k++] = arr1[i++]
    } else {
      res[k++] = arr2[j++]
    }
  }
  return res
}

function orderSort(root: TreeNode | null, ans: number[] = []) {
  if (!root) return ans
  orderSort(root.left, ans)
  ans.push(root.val)
  orderSort(root.right, ans)
  return ans
}
```
