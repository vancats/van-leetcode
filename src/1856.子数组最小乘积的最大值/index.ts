/**
 * @description: Annotation
 * @return {*}
 * @param {number} nums
 */
export function maxSumMinProduct(nums: number[]): number {
  const n = nums.length
  let res = 0n
  const stack: number[] = []
  const leftArr: number[] = new Array(n).fill(-1)
  const rightArr: number[] = new Array(n).fill(n)

  // 求出前缀和数组
  const preArr: number[] = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++)
    preArr[i + 1] = preArr[i] + nums[i]

  // 获取左右边界的值
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[i] <= nums[stack[stack.length - 1]])
      rightArr[stack.pop()!] = i
    if (stack.length) leftArr[i] = stack[stack.length - 1]
    stack.push(i)
  }

  // 需要用 Bigint 转换
  for (let i = 0; i < n; i++) {
    const curWidth = preArr[rightArr[i]] - preArr[leftArr[i] + 1]
    const curVal = BigInt(nums[i]) * BigInt(curWidth)
    if (res < curVal)
      res = curVal
  }

  return Number(res % BigInt(1000000007))
}
