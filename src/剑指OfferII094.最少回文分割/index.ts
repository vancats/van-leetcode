/**
 * @description: 时间复杂度 O(2^N * N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function minCut(s: string): number {
  const n = s.length
  /// dp 定义为前 n 个字符的最小数组长度
  const dp: number[] = new Array(n).fill(0).map((item, ind) => ind + 1)
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (isPalindrome(s.slice(j, i + 1)))
        dp[i] = Math.min(dp[i], (dp[j - 1] || 0) + 1)
    }
  }

  return dp[n - 1] - 1

  function isPalindrome(str: string): boolean {
    let left = 0
    let right = str.length - 1
    while (left < right) {
      if (str[left] !== str[right]) return false
      left++
      right--
    }
    return true
  }
}

/**
 * @description: 时间复杂度 O(N ^ 2) 空间复杂度 O(N ^ 2)
 * @return {*}
 * @param {string} s
 */
export function minCut2(s: string): number {
  const n = s.length
  /// dp 定义为前 n 个字符的最小数组长度
  const dp: number[] = new Array(n).fill(0).map((item, ind) => ind + 1)
  const dpStr: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (isPalindrome(j, i) === 1)
        dp[i] = Math.min(dp[i], (dp[j - 1] || 0) + 1)
    }
  }

  return dp[n - 1] - 1

  /// 记忆化搜索：0 未搜索 1 回文 -1 非回文
  function isPalindrome(left: number, right: number): number {
    if (dpStr[left][right] !== 0) return dpStr[left][right]
    if (left >= right)
      dpStr[left][right] = 1
    else if (s[left] === s[right])
      dpStr[left][right] = isPalindrome(left + 1, right - 1)
    else
      dpStr[left][right] = -1
    return dpStr[left][right]
  }
}

export function minCut3(s: string): number {
  const n = s.length
  /// dp 定义为前 n 个字符的最小数组长度
  const dp: number[] = new Array(n).fill(0).map((item, ind) => ind + 1)
  const dpBool: boolean[][] = new Array(n).fill(0).map(() => new Array(n).fill(true))

  /// dpStr 预处理出从 i 到 j 是否回文
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++)
      dpBool[i][j] = (s[i] === s[j]) && dpBool[i + 1][j - 1]
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (dpBool[j][i])
        dp[i] = Math.min(dp[i], (dp[j - 1] || 0) + 1)
    }
  }

  return dp[n - 1] - 1
}
