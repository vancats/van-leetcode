/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function waysToMakeFair(nums: number[]): number {
  let res = 0
  let odd = 0
  let even = 0
  // 先计算奇偶总数
  nums.forEach((num, index) => {
    if (index % 2) odd += num
    else even += num
  })

  let curOdd = 0 // 该项前所有奇数
  let curEven = 0 // 该项前所有偶数
  nums.forEach((num, index) => {
    // 当前奇数总和 = 该项前所有奇数 + 该项后所有偶数，偶数总和同理
    const evenTotal = odd - curOdd + curEven - (index % 2 ? num : 0)
    const oddTotal = even - curEven + curOdd - (index % 2 ? 0 : num)
    // 更新值
    curOdd += (index % 2 ? num : 0)
    curEven += (index % 2 ? 0 : num)
    if (evenTotal === oddTotal) res++
  })
  return res
}
