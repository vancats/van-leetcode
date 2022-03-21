/*
 * @Author: Lqf
 * @Date: 2022-03-02 10:43:56
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-02 10:44:02
 * @Description: 我添加了修改
 */

var maximumScore = function (a, b, c) {
  let ans = 0, arr = [a, b, c]
  arr.sort((a, b) => b - a)
  while (arr[1]) {
    arr[0]--
    arr[1]--
    ans++
    arr.sort((a, b) => b - a)
  }
  return ans
}