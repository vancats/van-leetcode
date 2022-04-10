/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 * @param {string} goal
 */
export function rotateString(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).includes(goal)
}
