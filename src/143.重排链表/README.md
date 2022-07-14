# 143.重排链表

> 难度：中等

## 题目

给定一个单链表 L 的头节点 head ，单链表 L 表示为：

L0 → L1 → … → Ln - 1 → Ln
请将其重新排列后变为：

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

### 示例

#### 示例 1：

![](https://pic.leetcode-cn.com/1626420311-PkUiGI-image.png)
```
输入：head = [1,2,3,4]
输出：[1,4,2,3]
```

#### 示例 2：

![](https://pic.leetcode-cn.com/1626420320-YUiulT-image.png)
```
输入：head = [1,2,3,4,5]
输出：[1,5,2,4,3]
```

### 提示：

```
链表的长度范围为 [1, 5 * 104]
1 <= node.val <= 1000
```

## 题解

```ts
import type { ListNode } from '../../utils/ListNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {ListNode} head
 */
export function reorderList(head: ListNode | null): void {
  const arr: Array<ListNode | null> = []
  while (head) {
    arr.push(head)
    head = head.next
  }
  const n = arr.length
  for (let i = 0, j = n - 1; i < j - 1; i++, j--) {
    const temp = arr[i]!.next
    arr[j - 1]!.next = null
    arr[i]!.next = arr[j]
    arr[j]!.next = temp
  }
}
```
