/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function smallestSubsequence(s: string): string {
  const map: Map<string, number> = new Map()
  const stack: string[] = []
  // 首先初始化获得所有值
  for (let i = 0; i < s.length; i++)
    map.set(s[i], (map.get(s[i]) || 0) + 1)

  for (let i = 0; i < s.length; i++) {
    // 如果序列中已经存在的话，就没必要入栈了
    if (stack.includes(s[i])) {
      map.set(s[i], map.get(s[i])! - 1)
      continue
    }
    // 如果栈不为空，栈末尾值大于当前值并且后续还有栈末尾值
    while (stack.length
      && stack[stack.length - 1] >= s[i]
      && map.get(stack[stack.length - 1])! > 1
    ) {
      const val = stack.pop()!
      map.set(val, map.get(val)! - 1)
    }
    stack.push(s[i])
  }
  return stack.join('')
}
