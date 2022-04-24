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
