/**
 * @description: 待定
 * @return {*}
 * @param {number} n
 * @param {number} k
 */
export function combine(n: number, k: number): number[][] {
  const res: number[][] = []
  dfs(1, k)
  return res
  function dfs(curInd: number, curK: number, curRes: number[] = []) {
    if (curK === 0) {
      res.push(curRes.slice())
      return
    }
    // 回溯 + 剪枝
    for (; curInd <= n - curK + 1; curInd++) {
      curRes.push(curInd)
      dfs(curInd + 1, curK - 1, curRes)
      curRes.pop()
    }
  }
}
