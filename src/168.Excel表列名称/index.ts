/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} columnNumber
 */
export function convertToTitle(columnNumber: number): string {
  let str = ''
  let cnt = 1
  if (columnNumber > 26) cnt++
  while (columnNumber > 27 * Math.pow(26, cnt - 1)) cnt++
  while (cnt > 0) {
    let num = Math.floor(columnNumber / Math.pow(26, cnt - 1))
    if (!(columnNumber % Math.pow(26, cnt - 1)) && cnt > 1) num--
    str += getChar(num)
    columnNumber -= (num * Math.pow(26, --cnt))
  }
  return str
}

function getChar(num: number): string {
  return String.fromCharCode((num + 64))
}
