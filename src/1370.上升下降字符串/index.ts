/**
 * @description: 时间复杂度O(N*M) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function sortString(s: string): string {
  const arr = s.split('').sort()
  let res = ''
  while (arr.length) {
    res += getRes(arr, true)
    res += getRes(arr, false)
  }
  return res
}

function getRes(arr: string[], sort: boolean): string {
  let res = ''
  for (let i = arr.length - 1; i >= 0; i--) {
    const cur = arr[i]
    res = sort ? cur + res : res + cur
    arr.splice(i, 1)
    while (i > 0 && cur === arr[i - 1]) i--
  }
  return res
}
