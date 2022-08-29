/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} n
 */
export function shuffle(nums: number[], n: number): number[] {
  let i = 0; let j = n
  const arr: number[] = new Array(2 * n)
  let k = 0
  while (k < 2 * n) {
    arr[k++] = nums[i++]
    arr[k++] = nums[j++]
  }
  return arr
}
