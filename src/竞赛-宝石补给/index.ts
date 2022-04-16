/**
 * @description: 时间复杂度 O(OlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} gem
 * @param {number} operations
 */
export function giveGem(gem: number[], operations: number[][]): number {
  for (let i = 0; i < operations.length; i++) {
    const [x, y] = operations[i]
    const half = gem[x] >> 1
    gem[x] -= half
    gem[y] += half
  }
  gem.sort((a, b) => a - b)
  return gem[gem.length - 1] - gem[0]
}
