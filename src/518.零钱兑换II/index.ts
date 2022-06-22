/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {number} amount
 * @param {number} coins
 */
export function change(amount: number, coins: number[]): number {
  const dp: number[] = new Array(amount + 1).fill(0)
  dp[0] = 1
  // 硬币从小到大遍历可以确保不重复
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      if (i >= coin)
        dp[i] += dp[i - coin]
    }
  }
  console.log(dp)
  return dp[amount]
}
