# 面试题02.05.链表求和

> 难度：中等

## 题目

给定两个用链表表示的整数，每个节点包含一个数位。

这些数位是反向存放的，也就是个位排在链表首部。

编写函数对这两个整数求和，并用链表形式返回结果。

### 示例：

```
输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
```

> 进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?

### 示例：

```
输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
输出：9 -> 1 -> 2，即912
```

## 题解

```ts
import { ListNode } from '../../utils/ListNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let flag = 0
  const dump: ListNode | null = new ListNode()
  let temp = dump
  while (l1 || l2 || flag) {
    let val = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + flag
    flag = 0
    if (val > 9) {
      flag = 1
      val -= 10
    }
    temp.next = new ListNode(val)
    temp = temp.next
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  return dump.next
}
```
