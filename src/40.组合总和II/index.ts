/**
 * @description: 时间复杂度 O(2^N * N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} candidates
 * @param {number} target
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)
  const n = candidates.length
  const res: number[][] = []
  const used: boolean[] = new Array(n).fill(false)
  dfs(0, 0)
  return res

  function dfs(ind: number, curSum: number, curRes: number[] = []) {
    if (curSum === target) {
      res.push(curRes.slice())
      return
    }
    for (let i = ind; i < n && curSum + candidates[i] <= target; i++) {
      // 如果当前值与前值相等，并且前值的 used 值为 false（已经遍历过而不是正在遍历中），则跳过
      if (i > 0 && candidates[i] === candidates[i - 1] && !used[i - 1]) continue
      used[i] = true
      dfs(i + 1, curSum + candidates[i], [...curRes, candidates[i]])
      used[i] = false
    }
  }
}
