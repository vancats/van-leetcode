# 面试题16.25.LRU缓存

> 难度：中等
>
> https://leetcode-cn.com/problems/lru-cache-lcci/

## 题目

设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。

它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

### 示例:

```
LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
```

## 题解

```typescript

interface hash {
  key: number
  value: number
  prev: number
  next: number
}
/**
 * @description: 待定
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
```
