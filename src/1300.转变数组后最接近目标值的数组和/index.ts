/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {number} arr
 * @param {number} target
 */
export function findBestValue(arr: number[], target: number): number {
  const n = arr.length
  const left = Math.ceil(target / n)
  const right = Math.max(...arr)
  if (left > right) return right
  for (let i = left; i <= right; i++) {
    const sum = getSum(arr, i)
    // 找到第一个大于等于 target 的数
    if (sum >= target || i === right) {
      const prev = getSum(arr, i - 1)
      if (Math.abs(target - prev) <= Math.abs(target - sum))
        return i - 1

      else
        return i
    }
  }
  return -1
}

function getSum(arr: number[], cur: number): number {
  let res = 0
  arr.forEach(item => {
    res += (item > cur ? cur : item)
  })
  return res
}
