# 23.合并K个升序链表

> 难度：困难
>
> https://leetcode-cn.com/problems/merge-k-sorted-lists/

## 题目

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

### 示例

#### 示例 1：

```
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```

#### 示例 2：

```
输入：lists = []
输出：[]
```

#### 示例 3：

```
输入：lists = [[]]
输出：[]
```

### 提示：

```
k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] 按 升序 排列
lists[i].length 的总和不超过 10^4
```

## 题解

```typescript
import { ListNode } from "../../utils/ListNode"
import { Heap } from "../../utils/Heap"
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {Array} lists
 */
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let heap = new Heap((a, b) => a < b)
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i]
    while (list) {
      heap.push(list.val)
      list = list.next
    }
  }
  if (!heap.size) return null
  let node = new ListNode(heap.pop()), temp = node
  while (heap.size) {
    temp.next = new ListNode(heap.pop())
    temp = temp.next
  }
  return node
}
```