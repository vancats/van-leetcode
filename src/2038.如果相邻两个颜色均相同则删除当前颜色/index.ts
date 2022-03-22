/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} arr
 */
export function winnerOfGame(arr: string): boolean {
  let a = 0, b = 0
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === 'A' && arr[i - 1] === 'A' && arr[i - 2] === 'A') a++
    if (arr[i] === 'B' && arr[i - 1] === 'B' && arr[i - 2] === 'B') b++
  }
  return a > b
}