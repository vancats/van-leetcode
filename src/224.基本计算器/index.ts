/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function calculate(s: string): number {
  let sum = 0
  let i = 0
  let flag = 1
  const stack: number[] = []
  while (i < s.length) {
    let temp = ''
    switch (s[i]) {
      case ' ':
        i++
        break
      case '-':
        flag = -1
        i++
        break
      case '+':
        flag = 1
        i++
        break
      case '(':
        stack.push(sum, flag)
        sum = 0
        flag = 1
        i++
        break
      case ')':
        sum = stack.pop()! * sum + stack.pop()!
        i++
        break
      default:
        temp = ''
        while (!isNaN(Number(s[i]))) {
          temp += s[i]
          i++
        }
        sum += (Number(temp)) * flag
        flag = 1
        break
    }
  }
  return sum
}
