/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} arr1
 * @param {number} arr2
 */
export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const arr = new Array(1001).fill(0); const res: number[] = []
  for (let i = 0; i < arr1.length; i++)
    arr[arr1[i]]++

  for (let i = 0; i < arr2.length; i++)
    while (arr[arr2[i]]--) res.push(arr2[i])

  for (let i = 0; i < arr.length; i++)
    while (arr[i]-- > 0) res.push(i)

  return res
}
