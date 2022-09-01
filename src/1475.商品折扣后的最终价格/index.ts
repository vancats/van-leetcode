/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} prices
 */
export function finalPrices(prices: number[]): number[] {
  const n = prices.length
  const arr: number[] = new Array(n)
  const stack: number[] = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) stack.pop()
    arr[i] = stack.length ? prices[i] - stack[stack.length - 1] : prices[i]
    stack.push(prices[i])
  }
  return arr
}
