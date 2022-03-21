/**
 * @description: 时间复杂度 O(1) 空间复杂度 O(1)
 * @return {*}
 * @param {string} num1
 * @param {string} num2
 */
export function complexNumberMultiply(num1: string, num2: string): string {
  let n1 = num1.split('+'), n2 = num2.split('+')
  let real: any = Number(n1[0]) * Number(n2[0]) + Number(n1[1].slice(0, -1)) * Number(n2[1].slice(0, -1)) * -1
  let ima = Number(n1[1].slice(0, -1)) * Number(n2[0]) + Number(n2[1].slice(0, -1)) * Number(n1[0])
  return real + '+' + ima + 'i'
}
