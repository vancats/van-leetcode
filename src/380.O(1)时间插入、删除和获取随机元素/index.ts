/**
 * @description: 时间复杂度 O(1) 空间复杂度 O(N)
 * @return {*}
 */
export class RandomizedSet {
  stack: number[]
  map: Map<number, number>
  constructor() {
    this.stack = []
    this.map = new Map()
  }

  insert(val: number): boolean {
    if (this.map.has(val))
      return false

    const index = this.stack.length
    this.map.set(val, index)
    this.stack.push(val)
    return true
  }

  remove(val: number): boolean {
    if (this.map.has(val)) {
      const index = this.map.get(val)!
      const last = this.stack[this.stack.length - 1]
      this.stack[index] = last
      this.map.set(last, index)
      this.map.delete(val)
      this.stack.pop()
      return true
    }
    return false
  }

  getRandom(): number {
    const len = this.stack.length
    const random = this.stack[Math.floor(Math.random() * len)]
    return this.stack[random]
  }
}
