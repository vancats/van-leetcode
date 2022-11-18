/**
 * @description: 时间复杂度 O(N*M) 空间复杂度 O(N*M)
 * @return {*}
 * @param {string} s1
 * @param {string} s2
 */
export function minimumDeleteSum(s1: string, s2: string): number {
  const len1 = s1.length
  const len2 = s2.length
  // arr[i][j] = Math.max(...前三个值的 + 不同情况下的值)
  const arr: number[][] = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))
  for (let i = 1; i <= len1; i++) arr[i][0] = s1[i - 1].charCodeAt(0) + arr[i - 1][0]
  for (let i = 1; i <= len2; i++) arr[0][i] = s2[i - 1].charCodeAt(0) + arr[0][i - 1]
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const c1 = s1[i - 1].charCodeAt(0)
      const c2 = s2[j - 1].charCodeAt(0)
      if (c1 === c2)
        arr[i][j] = Math.min(arr[i - 1][j - 1], arr[i - 1][j] + c1, arr[i][j - 1] + c2)
      else
        arr[i][j] = Math.min(arr[i - 1][j - 1] + c1 + c2, arr[i - 1][j] + c1, arr[i][j - 1] + c2)
    }
  }
  return arr[len1][len2]
}
