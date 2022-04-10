/*
 * @Author: Lqf
 * @Date: 2022-02-15 17:37:28
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 17:43:33
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
  let n5 = n10 = n20 = 0
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5: n5++
        break
      case 10:
        if (!n5)
          return false
        n5--
        n10++
        break
      case 20:
        if (n10) {
          n10--
          n5--
        }
        else {
          n5 -= 3
        }
        if (n5 < 0 || n10 < 0)
          return false
        n20++
        break
    }
  }
  return true
}
