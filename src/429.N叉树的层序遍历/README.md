# 429.N叉树的层序遍历

> 难度：中等
>
> https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/

## 题目

给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

### 实例

#### 示例 1：

```
输入：root = [1,null,3,2,4,null,5,6]
输出：[[1],[3,2,4],[5,6]]
```

#### 示例 2：

```
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
```
 

### 提示：

```
树的高度不会超过 1000
树的节点总数在 [0, 10^4] 之间
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {Node} root
 */
export function levelOrder(root: Node | null): number[][] {
  if (!root) return []
  let stack: Node[] = [root], res: number[][] = []
  while (stack.length) {
    let cnt = stack.length
    let temp: any = []
    for (let i = 0; i < cnt; i++) {
      const root: any = stack.shift()
      temp.push(root.val)
      for (let j = 0; root.children && j < root.children.length; j++) {
        stack.push(root.children[j])
      }
    }
    res.push(temp)
  }
  return res
};
```
