/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function decodeString(s: string): string {
  // 构建两个栈，一个数字栈，一个字符串栈
  let str = ''; const numStack: number[] = []; const strStack: string[] = []; let temp = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 49 && s[i].charCodeAt(0) <= 57) {
      // 如果当前为最外层，直接把 temp 拼接到 str 上
      if (!numStack.length)
        str += temp
      // 如果不是最外层，推入到字符串栈中，防止被重复
      else strStack.push(temp)
      // 清空前面的值
      temp = ''
      // 计算连着的所有数字，并直接定位到 [ 的下一位
      let sum = 0
      while (s[i] !== '[') {
        sum = sum * 10 + Number(s[i])
        i++
      }
      // 将数字推入到数字栈中
      numStack.push(sum)
    }
    else if (s[i] === ']') {
      // 需要把 temp 的所有值重复外层数字的数量，如果字符串栈中有值，拼接到前面
      temp = (strStack.pop() || '') + temp.repeat(numStack.pop()!)
    }
    else {
      // 普通字符直接拼接
      temp += s[i]
    }
  }
  // 处理最后的字符
  if (temp)
    str += temp
  return str
}
