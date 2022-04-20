/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} input
 */
export function lengthLongestPath(input: string): number {
  if (!/\./.test(input)) return 0
  // 拆解原字符串为 /{0,} + 内容 的栈
  const stack: string[] = input.replace(/\t/g, '/').split('\n')
  // 结果数组
  const res: number[] = []
  // 中间过程的数组
  const arr: string[] = []
  while (stack.length) {
    // 推出栈顶元素
    let cur = stack.shift()!
    // 获取当前等级
    const level = getLevel(cur)
    // 如果 level 大于 1,则需要去除多余的 /
    if (level > 1) cur = cur.slice(level - 1)

    // 如果当前是文件,获取 arr 中前 level 的元素与当前内容拼接,推入结果数组
    if (/\./.test(cur))
      res.push(arr.slice(0, level).join('').length + cur.length)

    // 替换当前 level 位置的元素
    arr[level] = cur
  }

  return Math.max(...res)
}

// 获取当前级别
function getLevel(str: string): number {
  for (let i = 0; i < str.length; i++)
    if (str[i] !== '/') return i
  return 1
}
