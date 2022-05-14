export class MinStack {
  public arr: number[] = []
  public stack: number[] = []
  constructor() {
  }

  push(val: number): void {
    this.arr.push(val)
    if (!this.stack.length || val <= this.stack[this.stack.length - 1])
      this.stack.push(val)
  }

  pop(): void {
    const val = this.arr.pop()!
    if (val === this.stack[this.stack.length - 1])
      this.stack.pop()
  }

  top(): number {
    return this.arr[this.arr.length - 1]
  }

  getMin(): number {
    return this.stack[this.stack.length - 1]
  }
}
