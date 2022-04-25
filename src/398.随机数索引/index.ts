/**
 * @description: 时间复杂度 O(N) 空间复杂度 (N)
 * @return {*}
 */
export class Solution {
  public nums: number[]
  public map: Map<number, number[]> = new Map()
  constructor(nums: number[]) {
    this.nums = nums

    nums.forEach((num, index) => {
      const numInd = this.map.get(num) || []
      numInd.push(index)
      this.map.set(num, numInd)
    })
  }

  pick(target: number): number {
    const cur = this.map.get(target)!
    return cur[Math.floor(Math.random() * cur.length)]
  }
}
