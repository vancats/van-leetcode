/**
 * @description: 时间复杂度 O(2^N * N) 空间复杂度 O(N^2)
 * @return {*}
 * @param {string} s
 */
export function partition(s: string): string[][] {
  const n = s.length
  const dp: boolean[][] = new Array(n).fill(0).map(() => new Array(n).fill(true))
  const res: string[][] = []

  /// dp 预处理出从 i 到 j 是否回文
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++)
      dp[i][j] = (s[i] === s[j]) && dp[i + 1][j - 1]
  }

  dfs(0)
  return res
  function dfs(ind: number, curRes: string[] = []) {
    if (ind === n) {
      res.push(curRes.slice())
      return
    }
    for (let i = ind; i < n; i++) {
      if (dp[ind][i]) {
        curRes.push(s.slice(ind, i + 1))
        dfs(i + 1, curRes)
        curRes.pop()
      }
    }
  }
}

export function partition2(s: string): string[][] {
  const n = s.length
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const res: string[][] = []

  dfs(0)
  return res

  function dfs(ind: number, curRes: string[] = []) {
    if (ind === n) {
      res.push(curRes.slice())
      return
    }
    for (let i = ind; i < n; i++) {
      if (isPalindrome(ind, i) === 1) {
        curRes.push(s.slice(ind, i + 1))
        dfs(i + 1, curRes)
        curRes.pop()
      }
    }
  }

  /// 记忆化搜索：0 未搜索 1 回文 -1 非回文
  function isPalindrome(left: number, right: number): number {
    if (dp[left][right] !== 0) return dp[left][right]
    if (left >= right)
      dp[left][right] = 1
    else if (s[left] === s[right])
      dp[left][right] = isPalindrome(left + 1, right - 1)
    else
      dp[left][right] = -1
    return dp[left][right]
  }
}
