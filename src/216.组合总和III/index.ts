/**
 * @description: 待定
 * @return {*}
 * @param {number} k
 * @param {number} n
 */
export function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = []
  dfs(1, 0, k)
  return res

  function dfs(ind: number, curSum: number, cnt: number, curRes: number[] = []) {
    if (curSum > n || cnt < 0 || ind > 10) return
    if (curSum === n && cnt === 0) {
      res.push(curRes.slice())
      return
    }
    dfs(ind + 1, curSum, cnt, curRes)
    dfs(ind + 1, curSum + ind, cnt - 1, [...curRes, ind])
  }
}
