export class StockSpanner {
  public stack: number[][] = []
  public t = 0
  constructor() {
    this.stack.push([Number.MAX_VALUE, this.t++])
  }

  next(price: number): number {
    while (price > this.stack[this.stack.length - 1][0])
      this.stack.pop()
    const val = this.t - this.stack[this.stack.length - 1][1]
    this.stack.push([price, this.t++])
    return val
  }
}
