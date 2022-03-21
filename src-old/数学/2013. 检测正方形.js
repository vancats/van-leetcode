/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:13:22
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:20:12
 * @Description: 我添加了修改
 */


var DetectSquares = function () {
  this.arr = new Map()
}

DetectSquares.prototype.add = function (point) {
  let [x, y] = point
  if (!this.arr.has(x)) {
    this.arr.set(x, new Map())
  }
  // 以 { x: { y: count } } 形式存储
  let xArr = this.arr.get(x)
  xArr.set(y, (xArr.get(y) || 0) + 1)
}

DetectSquares.prototype.count = function (point) {
  let cnt = 0
  let [x, y] = point
  if (!this.arr.has(x)) {
    return cnt
  }
  let xArr = this.arr.get(x)
  let entries = this.arr.entries()
  for (const [col, colArr] of entries) {
    if (col !== x) {
      let d = col - x
      cnt += (colArr.get(y) || 0) * (xArr.get(y + d) || 0) * (colArr.get(y + d) || 0)
      cnt += (colArr.get(y) || 0) * (xArr.get(y - d) || 0) * (colArr.get(y - d) || 0)
    }
  }
  return cnt
}