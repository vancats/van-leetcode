/*
 * @Author: Lqf
 * @Date: 2022-02-15 17:08:22
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 17:08:25
 * @Description: 我添加了修改
 */

var RecentCounter = function () {
  this.arr = []
}

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  while (t > this.arr[0] + 3000) {
    this.arr.shift()
  }
  this.arr.push(t)
  return this.arr.length
}