/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} tokens
 */
export function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  tokens.forEach(token => {
    switch (token) {
      case '+': stack.push(stack.pop()! + stack.pop()!); break
      case '-': stack.push(-stack.pop()! + stack.pop()!); break
      case '*': stack.push(stack.pop()! * stack.pop()!); break
      case '/': stack.push(parseInt(String(1 / stack.pop()! * stack.pop()!))); break
      default: stack.push(Number(token)); break
    }
  })
  return stack[0]
}
