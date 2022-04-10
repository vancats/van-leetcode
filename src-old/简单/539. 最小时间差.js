/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:05:27
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:51:17
 * @Description: 我添加了修改
 */
/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function(timePoints) {
  let min = Number.MAX_SAFE_INTEGER
  // 直接将时间的值相加，23：59 => 2359
  for (let i = 0; i < timePoints.length; i++)
    timePoints[i] = timePoints[i].slice(0, 2) + timePoints[i].slice(3, 5)

  // 排序
  timePoints.sort((a, b) => a - b)
  // 找出序列中的最小差值
  for (let i = 0; i < timePoints.length - 1; i++)
    min = Math.min(minus(timePoints[i], timePoints[i + 1]), min)

  // 比较头尾差值
  timePoints[0] = String(Number(timePoints[0]) + 2400)
  min = Math.min(minus(timePoints[timePoints.length - 1], timePoints[0]), min)
  return min
}
function minus(time1, time2) {
  const hours = time2.slice(0, 2) - time1.slice(0, 2)
  const minutes = time2.slice(2, 4) - time1.slice(2, 4)
  return hours * 60 + minutes
}
