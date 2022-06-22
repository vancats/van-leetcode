/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 * @param {number} k
 */
export function reverseStr(s: string, k: number): string {
  const arr: string[] = [...s]
  let ind = 0
  while (ind < arr.length) {
    let left = ind
    let right = left + k - 1
    if (right > arr.length) right = arr.length - 1
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
    ind = ind + 2 * k
  }
  return arr.join('')
}
