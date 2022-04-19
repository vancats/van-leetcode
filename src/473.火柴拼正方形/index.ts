/**
 * @description: 时间复杂度 O(4^N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} matchsticks
 */
export function makesquare(matchsticks: number[]): boolean {
  matchsticks.sort((a, b) => b - a)

  const side = matchsticks.reduce((a, b) => a + b, 0) / 4
  if (Math.floor(side) !== side) return false
  const sides = [side, side, side, side]
  return dfs(sides, 0)

  function dfs(sides: number[], ind: number): boolean {
    if (ind === matchsticks.length) return true
    for (let i = 0; i < 4; i++) {
      if (sides[i] < matchsticks[ind]) continue
      if (sides[i] === matchsticks[ind] || sides[i] >= matchsticks[ind] + matchsticks[matchsticks.length - 1]) {
        sides[i] -= matchsticks[ind]
        if (dfs(sides, ind + 1)) return true
        sides[i] += matchsticks[ind]
      }
    }
    return false
  }
}
