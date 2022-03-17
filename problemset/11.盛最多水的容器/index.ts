/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} height
 */
export function maxArea(height: number[]): number {
  let max = 0, left = 0, right = height.length - 1
  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]))
    if (height[left] > height[right]) right--
    else left++
  }
  return max
}