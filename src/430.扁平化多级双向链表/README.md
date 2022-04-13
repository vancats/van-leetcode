# 430.扁平化多级双向链表

> 难度：中等
>
> https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/

## 题目

你会得到一个双链表，其中包含的节点有一个下一个指针、一个前一个指针和一个额外的 子指针 。这个子指针可能指向一个单独的双向链表，也包含这些特殊的节点。这些子列表可以有一个或多个自己的子列表，以此类推，以生成如下面的示例所示的 多层数据结构 。

给定链表的头节点 head ，将链表 扁平化 ，以便所有节点都出现在单层双链表中。让 curr 是一个带有子列表的节点。子列表中的节点应该出现在扁平化列表中的 curr 之后 和 curr.next 之前 。

返回 扁平列表的 head 。列表中的节点必须将其 所有 子指针设置为 null 。

### 示例

#### 示例 1：

![](https://assets.leetcode.com/uploads/2021/11/09/flatten11.jpg)
```
输入：head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
输出：[1,2,3,7,8,11,12,9,10,4,5,6]
解释：输入的多级列表如上图所示。
扁平化后的链表如下图：
```

#### 示例 2：

![](https://assets.leetcode.com/uploads/2021/11/09/flatten2.1jpg)
```
输入：head = [1,2,null,3]
输出：[1,3,2]
解释：输入的多级列表如上图所示。
扁平化后的链表如下图：
```

#### 示例 3：

![](https://assets.leetcode.com/uploads/2021/11/24/list.jpg)
```
输入：head = []
输出：[]
说明：输入中可能存在空列表。
```

### 提示：

```
节点数目不超过 1000
1 <= Node.val <= 105
```

### 如何表示测试用例中的多级链表？

```
以 示例 1 为例：

 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
序列化其中的每一级之后：

[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
为了将每一级都序列化到一起，我们需要每一级中添加值为 null 的元素，以表示没有节点连接到上一级的上级节点。

[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]
合并所有序列化结果，并去除末尾的 null 。

[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
```

## 题解

```typescript
class Node {
  val: number
  prev: Node | null
  next: Node | null
  child: Node | null
  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.prev = (prev === undefined ? null : prev)
    this.next = (next === undefined ? null : next)
    this.child = (child === undefined ? null : child)
  }
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {Node} head
 */
export function flatten(head: Node | null): Node | null {
  if (!head) return head
  flatChild(head, null)
  return head
}

function flatChild(head: Node, parent: Node | null): Node {
  let temp = head
  while (temp) {
    // 后续循环需要获取当前的下个节点
    const next = temp.next
    if (temp.child) {
      // 将返回一个已经扁平化的链表
      const children = flatChild(temp.child, temp)
      // 双向绑定
      children.prev = temp
      temp.next = children
      // 置空
      temp.child = null
    }
    // 如果有 next 继续循环即可
    if (next) { temp = next }
    else {
      // 这里需要注意，如果是最后一个节点有child，它没有 next，因此需要走到此时拼接后的最后一个节点位置
      while (temp.next)
        temp = temp.next

      break
    }
  }
  // 与 parent 的双向绑定
  if (parent) {
    temp.next = parent.next

    if (parent.next)
      parent.next.prev = temp
  }
  return head
}
```
