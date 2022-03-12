/**
 * @description 空间复杂度 O(N) 时间复杂度 O(N)
 * @param {number[]} data
 * @return {boolean}
 */
export function validUtf8(data: number[]): boolean {
  let transform: string[] = []
  // 转换原数组
  for (let i = 0; i < data.length; i++) {
    transform[i] = toBinary(data[i])
  }
  for (let i = 0; i < transform.length; i++) {
    let temp = transform[i]
    if (temp.startsWith('0')) {
      if (!testSingleBinary(temp)) return false
    } else {
      let cnt: number = temp.search('0')
      if (cnt >= 5 || cnt <= 1) return false
      let arr: string[] = transform.slice(i, i + cnt)
      i += (cnt - 1)
      if (i >= transform.length) return false
      if (!testMultipleBinary(arr, cnt)) return false
    }
  }
  return true
}
// 测试单子节
function testSingleBinary(numStr: string): boolean {
  return numStr.startsWith('0')
}
// 测试多字节
function testMultipleBinary(numStrArr: string[], n: number): boolean {
  let str: string = '1'.repeat(n)
  if (!numStrArr[0].startsWith(str)) return false
  for (let i = 1; i < n; i++) {
    if (!numStrArr[i].startsWith('10')) return false
  }
  return true
}
// 转为二进制的八位字符串 1 => '00000001'
function toBinary(num): string {
  let binary: string = String(parseInt(num).toString(2))
  let n: number = binary.length
  for (let i = 0; i < 8 - n; i++) {
    binary = '0' + binary
  }
  return binary
}