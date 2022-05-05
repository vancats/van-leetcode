/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 */
export class RecentCounter {
  public arr: number[] = []
  constructor() {
  }

  ping(t: number): number {
    while (t - this.arr[0] > 3000)
      this.arr.shift()

    this.arr.push(t)
    return this.arr.length
  }
}
