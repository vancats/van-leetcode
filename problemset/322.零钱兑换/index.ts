/**
 * @description: 时间复杂度 O(N * M) 空间复杂度 O(N)
 * @return {*}
 * @param {number} coins
 * @param {number} amount
 */
export function coinChange(coins: number[], amount: number): number {
  let arr = new Array(amount + 1)
  arr[0] = 0
  for (let i = 1; i <= amount; i++) {
    arr[i] = Infinity
    for (let coin of coins) {
      if (arr[i - coin] || arr[i - coin] === 0) {
        arr[i] = Math.min(arr[i], arr[i - coin] + 1)
      }
    }
  }
  return arr[amount] === Infinity ? - 1 : arr[amount]
}