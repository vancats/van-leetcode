export class Solution {
  public nums: number[] = []
  constructor(nums: number[]) {
    this.nums = nums
  }

  reset(): number[] {
    return this.nums
  }

  shuffle(): number[] {
    const res: number[] = this.nums.slice()
    const n = res.length
    for (let i = 0; i < n; i++) {
      const ind = Math.floor(Math.random() * n)
        ;[res[ind], res[i]] = [res[i], res[ind]]
    }
    return res
  }
}
