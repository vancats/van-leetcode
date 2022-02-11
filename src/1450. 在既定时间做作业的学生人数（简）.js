/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:09:33
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:32:59
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let ans = 0, i, j
  for (i = 0; i < endTime.length; i++) {
    if (endTime[i] >= queryTime) break
  }
  for (j = startTime.length - 1; j >= 0; j--) {
    if (startTime[j] <= queryTime) break
  }
  for (let m = i; m <= j; m++) {
    if (startTime[m] <= queryTime && endTime[m] >= queryTime) ans++
  }
  return ans
}