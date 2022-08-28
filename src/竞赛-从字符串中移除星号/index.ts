/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function removeStars(s: string): string {
  const arr: string[] = s.split('')
  const res: string[] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '*')
      res.pop()

    else
      res.push(arr[i])
  }
  return res.join('')
}
