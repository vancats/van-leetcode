/*
 * @Author: Lqf
 * @Date: 2022-02-13 15:59:41
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-13 15:59:43
 * @Description: 我添加了修改
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let arr = new Array(5).fill(0)
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'b':
        arr[0] += 2
        break
      case 'a':
        arr[1] += 2
        break
      case 'l':
        arr[2] += 1
        break
      case 'o':
        arr[3] += 1
        break
      case 'n':
        arr[4] += 2
        break
    }
  }
  arr.sort((a, b) => a - b)
  return arr[0] >> 1
}