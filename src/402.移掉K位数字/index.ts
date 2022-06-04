/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} num
 * @param {number} k
 */
export function removeKdigits(num: string, k: number): string {
  const stack: number[] = []
  const len = num.length - k
  for (let i = 0; i < num.length; i++) {
    // 单调栈
    while (stack.length && k > 0 && stack[stack.length - 1] > Number(num[i])) {
      stack.pop()
      k--
    }
    stack.push(Number(num[i]))
  }
  // 如果已经单调并且还未删除足够数量
  while (stack.length > len) stack.pop()
  // 去除前导零
  while (stack[0] === 0) stack.shift()
  return stack.join('') || '0'
}
