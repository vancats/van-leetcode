/**
 * @description: 时间复杂度 O(M + N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums1
 * @param {number} nums2
 */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack: number[] = []
  const map: Map<number, number> = new Map()

  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i]
    while (stack.length && num >= stack[stack.length - 1])
      stack.pop()
    map.set(num, stack.length ? stack[stack.length - 1] : -1)
    stack.push(num)
  }
  const res: number[] = new Array(nums1.length).fill(0).map((item, i) => map.get(nums1[i])!)

  return res
}
