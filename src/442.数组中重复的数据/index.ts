/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function findDuplicates(nums: number[]): number[] {
  const n = nums.length
  const res: number[] = []
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0 || nums[i] - 1 === i) {
      continue
    }
    else {
      const next = nums[nums[i] - 1]
      if (next === nums[i]) {
        res.push(nums[i])
        nums[nums[i] - 1] = nums[i] = 0
      }
      else {
        swap(nums[i] - 1, i--)
      }
    }
  }
  return res
  function swap(i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
}
