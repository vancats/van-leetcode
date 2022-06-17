/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} arr
 */
export function duplicateZeros(arr: number[]): void {
  let cnt = 0
  let flag = false
  for (let i = 0; i < arr.length; cnt++) {
    if (++i >= arr.length) break
    if (arr[cnt] === 0) {
      if (++i >= arr.length) {
        flag = true
        break
      }
    }
  }
  let i = arr.length - 1
  arr[i--] = arr[cnt--]
  if (flag) arr[i--] = arr[cnt + 1]
  for (; i >= 0; i--) {
    arr[i] = arr[cnt]
    !arr[cnt--] && (arr[--i] = arr[cnt + 1])
  }
}
