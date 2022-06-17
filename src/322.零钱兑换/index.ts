/**
 * @description: 时间复杂度 O(N * M) 空间复杂度 O(N)
 * @return {*}
 * @param {number} coins
 * @param {number} amount
 */
export function coinChange(coins: number[], amount: number): number {
  const arr = new Array(amount + 1).fill(Infinity)
  arr[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0)
        arr[i] = Math.min(arr[i], arr[i - coin] + 1)
    }
  }
  return arr[amount] === Infinity ? -1 : arr[amount]
}
