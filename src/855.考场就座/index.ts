/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 */
export class ExamRoom {
  public n: number
  public set: Set<number> = new Set()
  constructor(n: number) {
    this.n = n
  }

  seat(): number {
    let res = 0
    let max = 0
    if (!this.set.size) {
      res = 0
    }
    else {
      const inds = [...this.set].sort((a, b) => a - b)
      let cur = inds[0]
      if (cur > max) {
        max = cur
        res = 0
      }
      for (let i = 1; i < inds.length; i++) {
        const val = Math.floor((inds[i] + inds[i - 1]) / 2)
        cur = val - inds[i - 1]
        if (cur > max) {
          max = cur
          res = val
        }
      }
      cur = this.n - 1 - inds[inds.length - 1]
      if (cur > max) {
        max = cur
        res = this.n - 1
      }
    }
    this.set.add(res)
    return res
  }

  leave(p: number): void {
    this.set.delete(p)
  }
}
