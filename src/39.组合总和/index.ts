/**
 * @description: 空间复杂度 O(N) 时间复杂度 O(S) S 是所有可行解的长度
 * @return {*}
 * @param {number} candidates
 * @param {number} target
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  dfs(0, 0, [])
  return res

  function dfs(ind: number, sum: number, cur: number[]) {
    if (sum > target || ind === candidates.length) return
    if (sum === target) {
      res.push(cur.slice())
      return
    }

    // 不选择当前值
    dfs(ind + 1, sum, cur)
    cur.push(candidates[ind])
    // 选择当前值
    dfs(ind, sum + candidates[ind], cur)
    cur.pop()
  }
}
