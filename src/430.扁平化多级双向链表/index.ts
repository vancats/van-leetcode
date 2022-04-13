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
