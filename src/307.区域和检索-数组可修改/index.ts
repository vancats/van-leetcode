/**
 * @description: Annotation
 * @return {*}
 */
export class NumArray {
  arr: number[]
  constructor(nums: number[]) {
    this.arr = nums
  }

  update(index: number, val: number): void {
    this.arr[index] = val
  }

  sumRange(left: number, right: number): number {
    let sum = 0
    for (let i = left; i <= right; i++)
      sum += this.arr[i]

    return sum
  }
}
