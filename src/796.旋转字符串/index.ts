/**
 * @description: Annotation
 * @return {*}
 * @param {string} s
 * @param {string} goal
 */
export function rotateString(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).indexOf(goal) !== -1
}
