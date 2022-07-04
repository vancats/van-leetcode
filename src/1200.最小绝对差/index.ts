/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} arr
 */
export function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b)
  let res: number[][] = []
  let min = Infinity
  for (let i = 1; i < arr.length; i++) {
    const minus = arr[i] - arr[i - 1]
    if (minus < min)
      res = [[arr[i - 1], arr[i]]]

    else if (minus === min)
      res.push([arr[i - 1], arr[i]])

    min = Math.min(min, minus)
  }
  return res
}
