/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:13:22
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:20:12
 * @Description: 我添加了修改
 */

const DetectSquares = function() {
  this.arr = new Map()
}

DetectSquares.prototype.add = function(point) {
  const [x, y] = point
  if (!this.arr.has(x))
    this.arr.set(x, new Map())

  // 以 { x: { y: count } } 形式存储
  const xArr = this.arr.get(x)
  xArr.set(y, (xArr.get(y) || 0) + 1)
}

DetectSquares.prototype.count = function(point) {
  let cnt = 0
  const [x, y] = point
  if (!this.arr.has(x))
    return cnt

  const xArr = this.arr.get(x)
  const entries = this.arr.entries()
  for (const [col, colArr] of entries) {
    if (col !== x) {
      const d = col - x
      cnt += (colArr.get(y) || 0) * (xArr.get(y + d) || 0) * (colArr.get(y + d) || 0)
      cnt += (colArr.get(y) || 0) * (xArr.get(y - d) || 0) * (colArr.get(y - d) || 0)
    }
  }
  return cnt
}
