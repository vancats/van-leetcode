/**
 * @description: 待定
 * @return {*}
 * @param {number} candidates
 * @param {number} target
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const arr: number[] = []
  candidates.sort((a, b) => a - b)
  dfs(0)
  return res

  function dfs(index: number, cur = 0) {
    if (cur > target) return
    if (cur === target)
      return res.push(arr.slice())
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue
      arr.push(candidates[i])
      dfs(i + 1, cur + candidates[i])
      arr.pop()
    }
  }
}
