/**
 * @description: Annotation
 * @return {*}
 * @param {number} arr
 */
export function sumSubarrayMins(arr: number[]): number {
  const n = arr.length
  const mod = 1e9 + 7
  const stack: number[] = []
  // 存储的是当前单调栈元素的最小值和
  const sum: number[] = new Array(n + 1).fill(0)
  let res = 0
  for (let i = 0; i < n; i++) {
    // 正常单调栈操作
    while (stack.length && arr[i] <= arr[stack[stack.length - 1]])
      stack.pop()
    // 取出最近小于当前值的值
    const ind = stack.length ? stack[stack.length - 1] : -1
    stack.push(i)
    // 【1, 2, 7, 6, 5】 => [1, 2, 5]
    // !RMQ(x,y) 固定 y
    // !推入当前值后，增加的总和为：
    // !  栈中上一个值(2)与它之前值的和[1,2] + 当前值(5) 与中间所有值[7,6,5]的和值
    sum[stack.length] = (sum[stack.length - 1] + arr[i] * (i - ind)) % mod
    console.log(sum)
    res = (sum[stack.length] + res) % mod
  }
  return res
}
