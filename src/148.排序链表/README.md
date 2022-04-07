# 148.排序链表

> 难度：中等
>
> https://leetcode-cn.com/problems/sort-list/

## 题目

给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

### 示例

#### 示例 1：

![](https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg)
```
输入：head = [4,2,1,3]
输出：[1,2,3,4]
```

#### 示例 2：

![](https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg)
```
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
```

#### 示例 3：

```
输入：head = []
输出：[] 
```

### 提示：

```
链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105
```

### 进阶：

> 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

## 题解

```typescript
import { ListNode } from '../../utils/ListNode'
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @param {ListNode} head
 * @return {*}
 */
export function sortList(head: ListNode | null): ListNode | null {
  let n = 1, temp: any = head
  // 计算节点数
  while (temp && (temp = temp.next)) n++
  return mergeSort(head, n)
}

function mergeSort(head: ListNode | null, n: number): ListNode | null {
  if (n < 2) return head
  let mid = n >> 1
  let left: any = head, right: any = head, temp: any = head

  // right 移动到需要分割的节点的前一位
  for (let i = 1; i < mid; i++, right = right.next) { }

  // 分割成两串链表
  temp = right
  right = right.next
  temp.next = null

  // 递归排序左右链表
  left = mergeSort(left, mid)
  right = mergeSort(right, n - mid)

  // 合并两个有序链表
  let dummy = new ListNode()
  temp = dummy
  while (left || right) {
    if ((!right) || (left && left.val <= right.val)) {
      temp.next = left
      left = left.next
      temp = temp.next
    } else {
      temp.next = right
      right = right.next
      temp = temp.next
    }
  }
  return dummy.next
}
```
