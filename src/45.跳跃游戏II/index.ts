/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function jump(nums: number[]): number {
  if (nums.length <= 1) return 0
  let cnt = 1
  // 当前位置的下一位
  let pre = 1
  // 当前能到达的最远位置
  let pos = nums[0]
  while (pos + 1 < nums.length) {
    // 遍历从当前位置的下一位到最远位置，获取下一位可以到达的最远位置
    let j = pre
    for (let i = pre + 1; i <= pos; i++) {
      if (i + nums[i] > j + nums[j])
        j = i
    }
    pre = pos + 1
    pos = j + nums[j]
    cnt++
  }
  return cnt
}
