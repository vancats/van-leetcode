/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(M + N)
 * @return {*}
 * @param {string} num1
 * @param {string} num2
 */
export function multiply(num1: string, num2: string): string {
  const arr1: string[] = num1.split('').reverse()
  const arr2: string[] = num2.split('').reverse()
  const res: number[] = new Array(num1.length + num2.length).fill(0)

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++)
      res[i + j] += Number(arr1[i]) * Number(arr2[j])
  }

  const len = res.length
  for (let i = 0; i < len; i++) {
    const cur = res[i]
    if (cur < 10) continue
    if (i + 1 === res.length) res.push(0)
    res[i + 1] += Math.floor(cur / 10)
    res[i] = cur % 10
  }

  return res.reverse().join('').replace(/^0+/, '') || '0'
}
