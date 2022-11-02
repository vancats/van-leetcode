/**
 * @description: 时间复杂度(YMax * XMax * N)  空间复杂度O(1)
 * @return {*}
 * @param {number} towers
 * @param {number} radius
 */
export function bestCoordinate(towers: number[][], radius: number): number[] {
  let ans: number[] = [0, 0]
  let max = 0
  let xMax = -Infinity
  let yMax = -Infinity
  for (const tower of towers) {
    const [x, y] = tower
    xMax = Math.max(xMax, x)
    yMax = Math.max(yMax, y)
  }

  for (let x = 0; x <= xMax; x++) {
    for (let y = 0; y <= yMax; y++) {
      let res = 0
      towers.forEach(item => {
        const [x2, y2, p2] = item
        const distance = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2))
        if (distance <= radius)
          res += Math.floor(p2 / (1 + distance))
      })
      if (res > max) {
        ans = [x, y]
        max = res
      }
    }
  }
  return ans
}
