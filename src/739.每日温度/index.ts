/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} temperatures
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length
  const stack: number[] = []
  const res: number[] = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const val = stack.pop()!
      res[val] = i - val
    }
    stack.push(i)
  }
  return res
}
