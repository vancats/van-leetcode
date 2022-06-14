/**
 * @description: 时间复杂度 O(2^N * N) 空间复杂度 O(2^N)
 * @return {*}
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 */
export function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  const memo: Map<number, boolean> = new Map()
  if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal)
    return false

  return dfs(0, 0)
  // useNumbers 已选择的数字置 1
  function dfs(useNumbers: number, curTotal: number): boolean {
    let res = false
    // 记忆化
    if (!memo.has(useNumbers)) {
      // 循环所有数字
      for (let i = 0; i < maxChoosableInteger; i++) {
        // 当该值未被选中
        if (!((useNumbers >> i) & 1)) {
          // 如果加上当前值已经可以得分，那就直接置 true 退出循环
          if (i + 1 + curTotal >= desiredTotal) {
            res = true
            break
          }
          else {
            // 继续往下进行，因为下一步是对方的回合，所以当 false 时才置 true
            if (!dfs(useNumbers | (1 << i), curTotal + i + 1)) {
              res = true
              break
            }
          }
        }
      }
      memo.set(useNumbers, res)
    }
    return memo.get(useNumbers)!
  }
}
