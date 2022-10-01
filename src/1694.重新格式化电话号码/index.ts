/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} number
 */
export function reformatNumber(number: string): string {
  number = number.replace(/-| /g, '')
  let str = ''
  let i = 0
  while (i < number.length) {
    if (i + 4 < number.length) {
      str += (`${number.slice(i, i + 3)}-`)
      i += 3
    }
    else if (i + 4 === number.length) {
      str = `${str + number.slice(i, i + 2)}-${number.slice(i + 2)}`
      break
    }
    else {
      str += number.slice(i)
      break
    }
  }
  return str
}
