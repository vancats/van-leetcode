/**
 * @description: 时间复杂度 O(N!) 空间复杂度 O(N)
 * @return {*}
 * @param {number} n
 */
export function totalNQueens(n: number): number {
  const arr: string[] = new Array(n).fill(0).map(() => '*'.repeat(n))
  let res = 0
  dfs(0, arr)

  return res

  function dfs(ind: number, arr: string[]) {
    // 结束条件
    if (ind === n) {
      res++
      return
    }
    // 获取当前字符串
    const s = arr[ind]
    // 如果当前没有可选择的值
    if (s === '.'.repeat(n)) return
    // 遍历当前字符串，如果是 * 则 dfs
    for (let i = 0; i < s.length; i++) {
      // 复制一份
      const dump = arr.slice()
      if (s[i] === '.') continue
      // 更新该行以下的值
      for (let j = ind + 1; j < s.length; j++) {
        const temp = dump[j].split('')
        temp[i] = '.'
        if (i + j - ind < n)
          temp[i + j - ind] = '.'

        if (i + ind - j >= 0)
          temp[i + ind - j] = '.'
        dump[j] = temp.join('')
      }

      dfs(ind + 1, dump)
    }
  }
}
