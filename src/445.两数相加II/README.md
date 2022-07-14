# 445.两数相加II

> 难度：中等

## 题目

给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

### 示例

#### 示例1：

```
输入：l1 = [7,2,4,3], l2 = [5,6,4]
输出：[7,8,0,7]
```

#### 示例2：

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[8,0,7]
```

#### 示例3：

```
输入：l1 = [0], l2 = [0]
输出：[0]
```

### 提示：

```
链表的长度范围为 [1, 100]
0 <= node.val <= 9
输入数据保证链表代表的数字无前导 0
```

> 进阶：如果输入链表不能翻转该如何解决？

## 题解

```ts
import { ListNode } from '../../utils/ListNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const stack1: number[] = []
  const stack2: number[] = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }
  let flag = 0
  let dump: ListNode | null = null
  while (stack1.length || stack2.length || flag) {
    const num1 = stack1.pop() || 0
    const num2 = stack2.pop() || 0
    let sum = num1 + num2 + flag
    flag = Math.floor(sum / 10)
    sum %= 10
    const node = new ListNode(sum, dump)
    dump = node
  }
  return dump
}
```
