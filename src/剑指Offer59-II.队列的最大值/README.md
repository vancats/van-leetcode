# 剑指Offer59-II.队列的最大值

> 难度：中等
>
> https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/

## 题目

请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

### 示例

#### 示例 1：

```
输入:
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
```

#### 示例 2：

```
输入:
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
```

### 限制：

```
1 <= push_back,pop_front,max_value的总操作数 <= 10000
1 <= value <= 10^5
```

## 题解

```ts
export class MaxQueue {
  public queue: number[] = []
  public arr: number[] = []
  constructor() {
  }

  max_value(): number {
    return this.queue.length ? this.queue[0] : -1
  }

  push_back(value: number): void {
    // 不能 <=
    while (this.queue[this.queue.length - 1] < value)
      this.queue.pop()
    this.queue.push(value)
    this.arr.push(value)
  }

  pop_front(): number {
    if (!this.arr.length)
      return -1

    const value: number = this.arr.shift()!
    if (value === this.queue[0])
      this.queue.shift()

    return value
  }
}
```
