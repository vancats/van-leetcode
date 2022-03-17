/**
 * @description: Annotation
 * @return {*}
 * @param {number} n
 */
export function climbStairs(n: number): number {
  const arr: number[] = new Array(n + 1)
  arr[1] = 1, arr[2] = 2
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}