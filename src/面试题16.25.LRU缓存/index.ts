
interface hash {
  key: number
  value: number
  prev: number
  next: number
}
/**
 * @description: Annotation
 * @return {*}
 */
export class LRUCache {
  hashList: Map<number, hash>
  capacity: number
  dumpHead: hash
  dumpTail: hash
  constructor(capacity: number) {
    this.hashList = new Map()
    this.capacity = capacity
    // 设置虚拟头尾节点，并初始化
    this.dumpHead = { key: -2, value: -2, prev: -10, next: -1 }
    this.dumpTail = { key: -1, value: -1, prev: -2, next: -10 }
    this.hashList.set(-2, this.dumpHead)
    this.hashList.set(-1, this.dumpTail)
  }

  get(key: number): number {
    if (this.hashList.has(key)) {
      // 获取当前节点
      const cur = this.hashList.get(key) as hash
      // 获取前后节点
      const prev = this.hashList.get(cur.prev) as hash
      const next = this.hashList.get(cur.next) as hash
      // 设置前节点的 next 与后节点的 prev
      prev.next = cur.next
      next.prev = cur.prev

      // 改变虚拟头、原先的第一位和当前节点的关系，有四步
      cur.next = this.dumpHead.next
      cur.prev = -2

      const dumpHeadNext = this.hashList.get(this.dumpHead.next) as hash
      dumpHeadNext.prev = key
      this.dumpHead.next = key
      return cur.value
    }
    return -1
  }

  put(key: number, value: number): void {
    // 如果已经有值，更新值和位置
    if (this.hashList.has(key)) {
      const cur = this.hashList.get(key) as hash
      cur.value = value
      this.get(key)
      // 不需要后续步骤
      return
    }
    if (this.capacity <= 0) {
      // 获取需要删除的节点和前节点
      const del = this.hashList.get(this.dumpTail.prev) as hash
      const prev = this.hashList.get(del.prev) as hash

      // 设置前节点和虚拟尾的关系
      prev.next = del.next
      this.dumpTail.prev = del.prev

      // 删除该值
      this.hashList.delete(del.key)
    }

    // 当前节点的状态
    const cur = {
      key,
      value,
      prev: -2,
      next: this.dumpHead.next,
    }

    // 设置虚拟头和原第一节点的位置关系
    const dumpHeadNext = this.hashList.get(this.dumpHead.next) as hash
    dumpHeadNext.prev = key
    this.dumpHead.next = key

    // 添加如 hashList
    this.hashList.set(key, cur)
    // 是否需要删除的依据
    this.capacity--
  }
}
